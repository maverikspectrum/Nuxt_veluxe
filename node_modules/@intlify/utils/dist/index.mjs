import { g as getHeaderLanguagesWithGetter, A as ACCEPT_LANGUAGE_HEADER, p as parseDefaultHeader, m as mapToLocaleFromLanguageTag, a as getLocaleWithGetter, D as DEFAULT_LANG_TAG, b as DEFAULT_COOKIE_NAME, v as validateLocale, c as getExistCookies, d as getPathLocale$1, e as pathLanguageParser, f as getQueryLocale$1 } from './shared/utils.9f8159f5.mjs';
export { h as createPathIndexLanguageParser, i as isLocale, n as normalizeLanguageName, j as parseAcceptLanguage, r as registerPathLanguageParser, k as validateLangTag } from './shared/utils.9f8159f5.mjs';
import { s as serialize, p as parse } from './shared/utils.12d9adcd.mjs';

function getHeaderLanguages(request, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  const getter = () => request.headers.get(name);
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
    const cookieRaw = request.headers.get("cookie");
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
    () => response.headers.getSetCookie()
  );
  const target = serialize(options.name, locale.toString(), {
    path: "/",
    ...options
  });
  response.headers.set("set-cookie", [...setCookies, target].join("; "));
}
function getPathLocale(request, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  return getPathLocale$1(new URL(request.url), { lang, parser });
}
function tryPathLocale(request, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  try {
    return getPathLocale(request, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(request, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return getQueryLocale$1(new URL(request.url), { lang, name });
}
function tryQueryLocale(request, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
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

export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getNavigatorLocale, getNavigatorLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale };
