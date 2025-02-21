'use strict';

const index = require('./shared/utils.f7f223d6.cjs');
const http = require('./shared/utils.0b54721b.cjs');

function getHeaderLanguages(request, {
  name = http.ACCEPT_LANGUAGE_HEADER,
  parser = http.parseDefaultHeader
} = {}) {
  const getter = () => request.headers[name];
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
    const cookieRaw = request.headers.cookie;
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
    () => response.getHeader("set-cookie")
  );
  const target = index.serialize(options.name, locale.toString(), {
    path: "/",
    ...options
  });
  response.setHeader("set-cookie", [...setCookies, target]);
}
function getRequestProtocol(request, opts = {}) {
  if (opts.xForwardedProto !== false && request.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return request.socket.encrypted ? "https" : "http";
}
function getRequestHost(request, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = request.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return request.headers.host || "localhost";
}
function getPath(request) {
  const raw = request.originalUrl || request.url || "/";
  return raw.replace(
    /^[/\\]+/g,
    "/"
  );
}
function getURL(request) {
  const protocol = getRequestProtocol(request);
  const host = getRequestHost(request);
  const path = getPath(request);
  return new URL(path, `${protocol}://${host}`);
}
function getPathLocale(request, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  return http.getPathLocale(getURL(request), { lang, parser });
}
function tryPathLocale(request, { lang = http.DEFAULT_LANG_TAG, parser = http.pathLanguageParser } = {}) {
  try {
    return getPathLocale(request, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(request, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return http.getQueryLocale(getURL(request), { lang, name });
}
function tryQueryLocale(request, { lang = http.DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(request, { lang, name });
  } catch {
    return null;
  }
}
let navigatorLanguages;
function getNavigatorLanguages() {
  if (navigatorLanguages && navigatorLanguages.length > 0) {
    return navigatorLanguages;
  }
  const env = process.env;
  const langs = /* @__PURE__ */ new Set();
  env.LC_ALL && langs.add(http.normalizeLanguageName(env.LC_ALL));
  env.LC_MESSAGES && langs.add(http.normalizeLanguageName(env.LC_MESSAGES));
  env.LANG && langs.add(http.normalizeLanguageName(env.LANG));
  env.LANGUAGE && langs.add(http.normalizeLanguageName(env.LANGUAGE));
  return navigatorLanguages = [...langs].filter(Boolean);
}
function getNavigatorLocales() {
  return getNavigatorLanguages().map((lang) => new Intl.Locale(lang));
}
let navigatorLanguage = "";
function getNavigatorLanguage() {
  return navigatorLanguage || (navigatorLanguage = getNavigatorLanguages()[0] || "");
}
function getNavigatorLocale() {
  return new Intl.Locale(getNavigatorLanguage());
}

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
