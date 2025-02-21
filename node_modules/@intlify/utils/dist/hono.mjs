import { g as getHeaderLanguagesWithGetter, A as ACCEPT_LANGUAGE_HEADER, p as parseDefaultHeader, m as mapToLocaleFromLanguageTag, a as getLocaleWithGetter, D as DEFAULT_LANG_TAG, b as DEFAULT_COOKIE_NAME, v as validateLocale, d as getPathLocale$1, e as pathLanguageParser, f as getQueryLocale$1 } from './shared/utils.9f8159f5.mjs';
import { setCookie, getCookie } from 'hono/cookie';

function getHeaderLanguages(context, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getHeaderLanguagesWithGetter(() => context.req.header(name), {
    name,
    parser
  });
}
function getHeaderLanguage(context, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getHeaderLanguages(context, { name, parser })[0] || "";
}
function getHeaderLocales(context, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return mapToLocaleFromLanguageTag(getHeaderLanguages, context, {
    name,
    parser
  });
}
function tryHeaderLocales(context, {
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocales(context, { name, parser });
  } catch {
    return null;
  }
}
function getHeaderLocale(context, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  return getLocaleWithGetter(() => getHeaderLanguages(context, { name, parser })[0] || lang);
}
function tryHeaderLocale(context, {
  lang = DEFAULT_LANG_TAG,
  name = ACCEPT_LANGUAGE_HEADER,
  parser = parseDefaultHeader
} = {}) {
  try {
    return getHeaderLocale(context, { lang, name, parser });
  } catch {
    return null;
  }
}
function getCookieLocale(context, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  return getLocaleWithGetter(() => getCookie(context, name) || lang);
}
function tryCookieLocale(context, { lang = DEFAULT_LANG_TAG, name = DEFAULT_COOKIE_NAME } = {}) {
  try {
    return getCookieLocale(context, { lang, name });
  } catch {
    return null;
  }
}
function setCookieLocale(context, locale, options = { name: DEFAULT_COOKIE_NAME }) {
  validateLocale(locale);
  setCookie(context, options.name, locale.toString(), options);
}
function getPathLocale(context, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  return getPathLocale$1(new URL(context.req.url), { lang, parser });
}
function tryPathLocale(context, { lang = DEFAULT_LANG_TAG, parser = pathLanguageParser } = {}) {
  try {
    return getPathLocale(context, { lang, parser });
  } catch {
    return null;
  }
}
function getQueryLocale(context, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  return getQueryLocale$1(new URL(context.req.url), { lang, name });
}
function tryQueryLocale(context, { lang = DEFAULT_LANG_TAG, name = "locale" } = {}) {
  try {
    return getQueryLocale(context, { lang, name });
  } catch {
    return null;
  }
}

export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale };
