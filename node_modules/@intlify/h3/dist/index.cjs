'use strict';

const core = require('@intlify/core');
const h3 = require('@intlify/utils/h3');

function defineI18nMiddleware(options) {
  const i18n = core.createCoreContext(options);
  const orgLocale = i18n.locale;
  let staticLocaleDetector = null;
  if (typeof orgLocale === "string") {
    console.warn(
      `defineI18nMiddleware 'locale' option is static ${orgLocale} locale! you should specify dynamic locale detector function.`
    );
    staticLocaleDetector = () => orgLocale;
  }
  const getLocaleDetector = (event, i18n2) => {
    return typeof orgLocale === "function" ? orgLocale.bind(null, event, i18n2) : staticLocaleDetector != null ? staticLocaleDetector.bind(null, event, i18n2) : detectLocaleFromAcceptLanguageHeader.bind(null, event);
  };
  return {
    onRequest(event) {
      event.context._i18nLocale = getLocaleDetector(event, i18n);
      i18n.locale = event.context._i18nLocale;
      event.context.i18n = i18n;
    },
    onAfterResponse(event) {
      i18n.locale = orgLocale;
      delete event.context.i18n;
    }
  };
}
const detectLocaleFromAcceptLanguageHeader = (event) => h3.getHeaderLocale(event).toString();
async function useTranslation(event) {
  if (event.context.i18n == null) {
    throw new Error(
      "middleware not initialized, please setup `onRequest` and `onAfterResponse` options of `createApp` with the middleware obtained with `defineI18nMiddleware`"
    );
  }
  const localeDetector = event.context._i18nLocale;
  let locale;
  if (localeDetector.constructor.name === "AsyncFunction") {
    locale = await localeDetector(event);
    event.context.i18n.locale = locale;
  }
  function translate(key, ...args) {
    const [_, options] = core.parseTranslateArgs(key, ...args);
    const [arg2] = args;
    const result = Reflect.apply(core.translate, null, [
      event.context.i18n,
      key,
      arg2,
      {
        // bind to request locale
        locale,
        ...options
      }
    ]);
    return core.NOT_REOSLVED === result ? key : result;
  }
  return translate;
}

exports.defineI18nMiddleware = defineI18nMiddleware;
exports.detectLocaleFromAcceptLanguageHeader = detectLocaleFromAcceptLanguageHeader;
exports.useTranslation = useTranslation;
Object.keys(h3).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = h3[k];
});
