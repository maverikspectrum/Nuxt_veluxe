import { g as getHeaderLanguagesWithGetter, A as ACCEPT_LANGUAGE_HEADER, p as parseDefaultHeader, m as mapToLocaleFromLanguageTag, a as getLocaleWithGetter, D as DEFAULT_LANG_TAG, b as DEFAULT_COOKIE_NAME, v as validateLocale, d as getPathLocale$1, e as pathLanguageParser, f as getQueryLocale$1 } from './shared/utils.9f8159f5.mjs';
import { setCookie, getRequestURL, getCookie, getHeaders } from 'h3';

function getHeaderLanguages(event, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  const getter = () => {
    const headers = getHeaders(event);
    return headers[name];
  };
  return getHeaderLanguagesWithGetter(getter, { name, parser });
}
function getHeaderLanguage(event, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getHeaderLanguages(event, { name, parser })[0] || "";
}
function getHeaderLocales(event, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return mapToLocaleFromLanguageTag(getHeaderLanguages, event, { name, parser });
}
function tryHeaderLocales(event, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(event, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(event, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getLocaleWithGetter(() => getHeaderLanguages(event, { name, parser })[0] || lang);
}
function tryHeaderLocale(event, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(event, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(event, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  return getLocaleWithGetter(() => getCookie(event, name) || lang);
}
function tryCookieLocale(event, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(event, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(event, locale, options = { name: DEFAULT_COOKIE_NAME }) {
  validateLocale(locale);
  setCookie(event, options.name, locale.toString(), options);
}
function getPathLocale(event, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  return getPathLocale$1(getRequestURL(event), { lang, parser });
}
function tryPathLocale(event, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  try {
    return getPathLocale(event, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(event, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return getQueryLocale$1(getRequestURL(event), { lang, name });
}
function tryQueryLocale(event, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(event, { lang, name });
  } catch {
    return null;
  }
}

export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale };
