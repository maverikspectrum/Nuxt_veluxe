import { createCoreContext, parseTranslateArgs, translate, NOT_REOSLVED } from '@intlify/core';
import { getHeaderLocale } from '@intlify/utils/h3';
export * from '@intlify/utils/h3';

function defineI18nMiddleware(options) {
  const i18n = createCoreContext(options);
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
const detectLocaleFromAcceptLanguageHeader = (event) => getHeaderLocale(event).toString();
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
  function translate$1(key, ...args) {
    const [_, options] = parseTranslateArgs(key, ...args);
    const [arg2] = args;
    const result = Reflect.apply(translate, null, [
      event.context.i18n,
      key,
      arg2,
      {
        // bind to request locale
        locale,
        ...options
      }
    ]);
    return NOT_REOSLVED === result ? key : result;
  }
  return translate$1;
}

export { defineI18nMiddleware, detectLocaleFromAcceptLanguageHeader, useTranslation };
