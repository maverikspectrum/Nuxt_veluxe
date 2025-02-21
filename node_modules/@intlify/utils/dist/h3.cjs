'use strict';

const http = require('./shared/utils.0b54721b.cjs');
const h3 = require('h3');

function getHeaderLanguages(event, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  const getter = () => {
    const headers = h3.getHeaders(event);
    return headers[name];
  };
  return http.getHeaderLanguagesWithGetter(getter, { name, parser });
}
function getHeaderLanguage(event, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return getHeaderLanguages(event, { name, parser })[0] || "";
}
function getHeaderLocales(event, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.mapToLocaleFromLanguageTag(getHeaderLanguages, event, { name, parser });
}
function tryHeaderLocales(event, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(event, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(event, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.getLocaleWithGetter(() => getHeaderLanguages(event, { name, parser })[0] || lang);
}
function tryHeaderLocale(event, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(event, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(event, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  return http.getLocaleWithGetter(() => h3.getCookie(event, name) || lang);
}
function tryCookieLocale(event, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(event, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(event, locale, options = { name: http.DEFAULT_COOKIE_NAME }) {
  http.validateLocale(locale);
  h3.setCookie(event, options.name, locale.toString(), options);
}
function getPathLocale(event, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  return http.getPathLocale(h3.getRequestURL(event), { lang, parser });
}
function tryPathLocale(event, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  try {
    return getPathLocale(event, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(event, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return http.getQueryLocale(h3.getRequestURL(event), { lang, name });
}
function tryQueryLocale(event, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(event, { lang, name });
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
