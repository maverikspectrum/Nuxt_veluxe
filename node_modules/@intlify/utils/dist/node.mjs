import { s as serialize, p as parse } from './shared/utils.12d9adcd.mjs';
import { g as getHeaderLanguagesWithGetter, A as ACCEPT_LANGUAGE_HEADER, p as parseDefaultHeader, m as mapToLocaleFromLanguageTag, a as getLocaleWithGetter, D as DEFAULT_LANG_TAG, b as DEFAULT_COOKIE_NAME, v as validateLocale, c as getExistCookies, d as getPathLocale$1, e as pathLanguageParser, f as getQueryLocale$1, n as normalizeLanguageName } from './shared/utils.9f8159f5.mjs';

function getHeaderLanguages(request, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  const getter = () => request.headers[name];
  return getHeaderLanguagesWithGetter(getter, { name, parser });
}
function getHeaderLanguage(request, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getHeaderLanguages(request, { name, parser })[0] || "";
}
function getHeaderLocales(request, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return mapToLocaleFromLanguageTag(getHeaderLanguages, request, {
    name,
    parser
  });
}
function tryHeaderLocales(request, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(request, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(request, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getLocaleWithGetter(() => getHeaderLanguages(request, { name, parser })[0] || lang);
}
function tryHeaderLocale(request, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(request, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(request, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  const getter = () => {
    const cookieRaw = request.headers.cookie;
    const cookie = parse(cookieRaw || "");
    return cookie[name] || lang;
  };
  return getLocaleWithGetter(getter);
}
function tryCookieLocale(request, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(request, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(response, locale, options = { name: DEFAULT_COOKIE_NAME }) {
  validateLocale(locale);
  const setCookies = getExistCookies(
    options.name,
    () => response.getHeader("set-cookie")
  );
  const target = serialize(options.name, locale.toString(), {
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
function getPathLocale(request, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  return getPathLocale$1(getURL(request), { lang, parser });
}
function tryPathLocale(request, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  try {
    return getPathLocale(request, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(request, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return getQueryLocale$1(getURL(request), { lang, name });
}
function tryQueryLocale(request, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
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
  env.LC_ALL && langs.add(normalizeLanguageName(env.LC_ALL));
  env.LC_MESSAGES && langs.add(normalizeLanguageName(env.LC_MESSAGES));
  env.LANG && langs.add(normalizeLanguageName(env.LANG));
  env.LANGUAGE && langs.add(normalizeLanguageName(env.LANGUAGE));
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

export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getNavigatorLocale, getNavigatorLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale };
