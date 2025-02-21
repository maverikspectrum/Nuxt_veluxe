'use strict';

const http = require('./shared/utils.0b54721b.cjs');
const cookie = require('hono/cookie');

function getHeaderLanguages(context, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.getHeaderLanguagesWithGetter(() => context.req.header(name), {
    name,
    parser
  });
}
function getHeaderLanguage(context, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return getHeaderLanguages(context, { name, parser })[0] || "";
}
function getHeaderLocales(context, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.mapToLocaleFromLanguageTag(getHeaderLanguages, context, {
    name,
    parser
  });
}
function tryHeaderLocales(context, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(context, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(context, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.getLocaleWithGetter(() => getHeaderLanguages(context, { name, parser })[0] || lang);
}
function tryHeaderLocale(context, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(context, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(context, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  return http.getLocaleWithGetter(() => cookie.getCookie(context, name) || lang);
}
function tryCookieLocale(context, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(context, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(context, locale, options = { name: http.DEFAULT_COOKIE_NAME }) {
  http.validateLocale(locale);
  cookie.setCookie(context, options.name, locale.toString(), options);
}
function getPathLocale(context, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  return http.getPathLocale(new URL(context.req.url), { lang, parser });
}
function tryPathLocale(context, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  try {
    return getPathLocale(context, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(context, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return http.getQueryLocale(new URL(context.req.url), { lang, name });
}
function tryQueryLocale(context, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(context, { lang, name });
  } catch {
    return null;
  }
}

exports.getCookieLocale = getCookieLocale;
exports.getHeaderLanguage = getHeaderLanguage;
exports.getHeaderLanguages = getHeaderLanguages;
exports.getHeaderLocale = getHeaderLocale;
exports.getHeaderLocales = getHeaderLocales;
exports.getPathLocale = getPathLocale;
exports.getQueryLocale = getQueryLocale;
exports.setCookieLocale = setCookieLocale;
exports.tryCookieLocale = tryCookieLocale;
exports.tryHeaderLocale = tryHeaderLocale;
exports.tryHeaderLocales = tryHeaderLocales;
exports.tryPathLocale = tryPathLocale;
exports.tryQueryLocale = tryQueryLocale;
