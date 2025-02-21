'use strict';

const http = require('./shared/utils.0b54721b.cjs');
const index = require('./shared/utils.f7f223d6.cjs');

function getHeaderLanguages(request, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  const getter = () => request.headers.get(name);
  return http.getHeaderLanguagesWithGetter(getter, { name, parser });
}
function getHeaderLanguage(request, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return getHeaderLanguages(request, { name, parser })[0] || "";
}
function getHeaderLocales(request, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.mapToLocaleFromLanguageTag(getHeaderLanguages, request, {
    name,
    parser
  });
}
function tryHeaderLocales(request, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(request, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(request, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  return http.getLocaleWithGetter(() => getHeaderLanguages(request, { name, parser })[0] || lang);
}
function tryHeaderLocale(request, {
  lang = http.DEFAULT_LANG_TAG,
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(request, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(request, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  const getter = () => {
    const cookieRaw = request.headers.get("cookie");
    const cookie = index.parse(cookieRaw || "");
    return cookie[name] || lang;
  };
  return http.getLocaleWithGetter(getter);
}
function tryCookieLocale(request, { lang = http.DEFAULT_LANG_TAG, name = http.DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(request, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(response, locale, options = { name: http.DEFAULT_COOKIE_NAME }) {
  http.validateLocale(locale);
  const setCookies = http.getExistCookies(
    options.name,
    () => response.headers.getSetCookie()
  );
  const target = index.serialize(options.name, locale.toString(), {
    path: "/",
    ...options
  });
  response.headers.set("set-cookie", [...setCookies, target].join("; "));
}
function getPathLocale(request, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  return http.getPathLocale(new URL(request.url), { lang, parser });
}
function tryPathLocale(request, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  try {
    return getPathLocale(request, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(request, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return http.getQueryLocale(new URL(request.url), { lang, name });
}
function tryQueryLocale(request, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(request, { lang, name });
  } catch {
    return null;
  }
}
function getNavigatorLanguages() {
  if (typeof navigator === "undefined") {
    throw new Error("not support `navigator`");
  }
  return navigator.languages;
}
function getNavigatorLanguage() {
  if (typeof navigator === "undefined") {
    throw new Error("not support `navigator`");
  }
  return navigator.language;
}
function getNavigatorLocales() {
  return getNavigatorLanguages().map((lang) => new Intl.Locale(lang));
}
function getNavigatorLocale() {
  return new Intl.Locale(getNavigatorLanguage());
}

exports.createPathIndexLanguageParser = http.createPathIndexLanguageParser;
exports.isLocale = http.isLocale;
exports.normalizeLanguageName = http.normalizeLanguageName;
exports.parseAcceptLanguage = http.parseAcceptLanguage;
exports.registerPathLanguageParser = http.registerPathLanguageParser;
exports.validateLangTag = http.validateLangTag;
exports.getCookieLocale = getCookieLocale;
exports.getHeaderLanguage = getHeaderLanguage;
exports.getHeaderLanguages = getHeaderLanguages;
exports.getHeaderLocale = getHeaderLocale;
exports.getHeaderLocales = getHeaderLocales;
exports.getNavigatorLocale = getNavigatorLocale;
exports.getNavigatorLocales = getNavigatorLocales;
exports.getPathLocale = getPathLocale;
exports.getQueryLocale = getQueryLocale;
exports.setCookieLocale = setCookieLocale;
exports.tryCookieLocale = tryCookieLocale;
exports.tryHeaderLocale = tryHeaderLocale;
exports.tryHeaderLocales = tryHeaderLocales;
exports.tryPathLocale = tryPathLocale;
exports.tryQueryLocale = tryQueryLocale;
