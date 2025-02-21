'use strict';

const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
function isURL(val) {
  return toTypeString(val) === "[object URL]";
}
function isURLSearchParams(val) {
  return toTypeString(val) === "[object URLSearchParams]";
}
function isLocale(val) {
  return toTypeString(val) === "[object Intl.Locale]";
}
function toLocale(val) {
  return isLocale(val) ? val : new Intl.Locale(val);
}
function validateLangTag(lang) {
  try {
    Intl.getCanonicalLocales(lang);
    return true;
  } catch {
    return false;
  }
}
function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function normalizeLanguageName(langName) {
  const [lang] = langName.split(".");
  return lang.replace(/_/g, "-");
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}
exports.pathLanguageParser = /* @__PURE__ */ createPathIndexLanguageParser();
function registerPathLanguageParser(parser) {
  exports.pathLanguageParser = parser;
}

const DEFAULT_LANG_TAG = "en-US";
const DEFAULT_COOKIE_NAME = "i18n_locale";
const ACCEPT_LANGUAGE_HEADER = "accept-language";

function parseDefaultHeader(input) {
  return [input];
}
function getHeaderLanguagesWithGetter(getter, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  const langString = getter();
  return langString ? name === ACCEPT_LANGUAGE_HEADER ? parser === parseDefaultHeader ? parseAcceptLanguage(langString) : parser(langString) : parser(langString) : [];
}
function getLocaleWithGetter(getter) {
  return toLocale(getter());
}
function validateLocale(locale) {
  if (!(isLocale(locale) || typeof locale === "string" && validateLangTag(locale))) {
    throw new SyntaxError(`locale is invalid: ${locale.toString()}`);
  }
}
function mapToLocaleFromLanguageTag(getter, ...args) {
  return Reflect.apply(getter, null, args).map(
    (lang) => getLocaleWithGetter(() => lang)
  );
}
function getExistCookies(name, getter) {
  let setCookies = getter();
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  setCookies = setCookies.filter(
    (cookieValue) => cookieValue && !cookieValue.startsWith(name + "=")
  );
  return setCookies;
}
function getPathLanguage(path, { lang = DEFAULT_LANG_TAG, parser = exports.pathLanguageParser } = {}) {
  return (parser || exports.pathLanguageParser)(path) || lang;
}
function getPathLocale(path, { lang = DEFAULT_LANG_TAG, parser = exports.pathLanguageParser } = {}) {
  return new Intl.Locale(getPathLanguage(path, { lang, parser }));
}
function getURLSearchParams(input) {
  if (isURLSearchParams(input)) {
    return input;
  } else if (isURL(input)) {
    return input.searchParams;
  } else {
    return new URLSearchParams(input);
  }
}
function getQueryLanguage(query, { lang = DEFAULT_LANG_TAG, name = "lang" } = {}) {
  const queryParams = getURLSearchParams(query);
  return queryParams.get(name) || lang;
}
function getQueryLocale(query, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return new Intl.Locale(getQueryLanguage(query, { lang, name }));
}

exports.ACCEPT_LANGUAGE_HEADER = ACCEPT_LANGUAGE_HEADER;
exports.DEFAULT_COOKIE_NAME = DEFAULT_COOKIE_NAME;
exports.DEFAULT_LANG_TAG = DEFAULT_LANG_TAG;
exports.createPathIndexLanguageParser = createPathIndexLanguageParser;
exports.getExistCookies = getExistCookies;
exports.getHeaderLanguagesWithGetter = getHeaderLanguagesWithGetter;
exports.getLocaleWithGetter = getLocaleWithGetter;
exports.getPathLocale = getPathLocale;
exports.getQueryLocale = getQueryLocale;
exports.isLocale = isLocale;
exports.mapToLocaleFromLanguageTag = mapToLocaleFromLanguageTag;
exports.normalizeLanguageName = normalizeLanguageName;
exports.parseAcceptLanguage = parseAcceptLanguage;
exports.parseDefaultHeader = parseDefaultHeader;
exports.registerPathLanguageParser = registerPathLanguageParser;
exports.validateLangTag = validateLangTag;
exports.validateLocale = validateLocale;
