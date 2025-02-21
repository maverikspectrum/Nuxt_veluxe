import { IncomingMessage, OutgoingMessage } from 'node:http';
import { H as HeaderOptions, C as CookieOptions, P as PathOptions, Q as QueryOptions } from './shared/utils.77e85720.cjs';

/**
 * get languages from header
 *
 * @description parse header string, default `accept-language` header
 *
 * @example
 * example for Node.js request:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { getHeaderLanguages } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   const langTags = getHeaderLanguages(req)
 *   // ...
 *   res.writeHead(200)
 *   res.end(`detect accpect-languages: ${langTags.join(', ')}`)
 * })
 * ```
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @returns {Array<string>} The array of language tags, if you use `accept-language` header and `*` (any language) or empty string is detected, return an empty array.
 */
declare function getHeaderLanguages(request: IncomingMessage, { name, parser, }?: HeaderOptions): string[];
/**
 * get language from header
 *
 * @description parse header string, default `accept-language`. if you use `accept-language`, this function retuns the **first language tag** of `accept-language` header.
 *
 * @example
 * example for Node.js request:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { getHeaderLanguage } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   const langTag = getHeaderLanguage(req)
 *   // ...
 *   res.writeHead(200)
 *   res.end(`detect accpect-language: ${langTag}`)
 * })
 * ```
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @returns {string} The **first language tag** of header, if header is not exists, or `*` (any language), return empty string.
 */
declare function getHeaderLanguage(request: IncomingMessage, { name, parser, }?: HeaderOptions): string;
/**
 * get locales from header
 *
 * @description wrap language tags with {@link Intl.Locale | locale}, languages tags will be parsed from `accept-language` header as default.
 *
 * @example
 * example for Node.js request:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { getHeaderLocales } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   const locales = getHeaderLocales(req)
 *   // ...
 *   res.writeHead(200)
 *   res.end(`accpected locales: ${locales.map(locale => locale.toString()).join(', ')}`)
 * })
 * ```
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @throws {RangeError} Throws the {@link RangeError} if header are not a well-formed BCP 47 language tag.
 *
 * @returns {Array<Intl.Locale>} The locales that wrapped from header, if you use `accept-language` header and `*` (any language) or empty string is detected, return an empty array.
 */
declare function getHeaderLocales(request: IncomingMessage, { name, parser, }?: HeaderOptions): Intl.Locale[];
/**
 * try to get locales from header
 *
 * @description wrap language tags with {@link Intl.Locale | locale}, languages tags will be parsed from `accept-language` header as default. Unlike {@link getHeaderLocales}, this function does not throw an error if the locale cannot be obtained, this function returns `null`.
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @returns {Array<Intl.Locale> | null} The locales that wrapped from header, if you use `accept-language` header and `*` (any language) or empty string is detected, return an empty array. if header are not a well-formed BCP 47 language tag, return `null`.
 */
declare function tryHeaderLocales(request: IncomingMessage, { name, parser, }?: HeaderOptions): Intl.Locale[] | null;
/**
 * get locale from header
 *
 * @description wrap language tag with {@link Intl.Locale | locale}, languages tags will be parsed from `accept-language` header as default.
 *
 * @example
 * example for Node.js request:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { getHeaderLocale } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   const locale = getHeaderLocale(req)
 *   // ...
 *   res.writeHead(200)
 *   res.end(`accpected locale: ${locale.toString()}`)
 * })
 * ```
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {string} options.lang The default language tag, Optional. default value is `en-US`. You must specify the language tag with the {@link https://datatracker.ietf.org/doc/html/rfc4646#section-2.1 | BCP 47 syntax}.
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @throws {RangeError} Throws the {@link RangeError} if `lang` option or header are not a well-formed BCP 47 language tag.
 *
 * @returns {Intl.Locale} The first locale that resolved from header string. if you use `accept-language` header and `*` (any language) or empty string is detected, return `en-US`.
 */
declare function getHeaderLocale(request: IncomingMessage, { lang, name, parser, }?: HeaderOptions & {
    lang?: string;
}): Intl.Locale;
/**
 * try to get locale from header
 *
 * @description wrap language tag with {@link Intl.Locale | locale}, languages tags will be parsed from `accept-language` header as default. Unlike {@link getHeaderLocale}, this function does not throw an error if the locale cannot be obtained, this function returns `null`.
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {string} options.lang The default language tag, Optional. default value is `en-US`. You must specify the language tag with the {@link https://datatracker.ietf.org/doc/html/rfc4646#section-2.1 | BCP 47 syntax}.
 * @param {HeaderOptions['name']} options.name The header name, which is as default `accept-language`.
 * @param {HeaderOptions['parser']} options.parser The parser function, which is as default {@link parseDefaultHeader}. If you are specifying more than one in your own format, you need a parser.
 *
 * @returns {Intl.Locale | null} The first locale that resolved from header string. if you use `accept-language` header and `*` (any language) or empty string is detected, return `en-US`. if `lang` option or header are not a well-formed BCP 47 language tag, return `null`.
 */
declare function tryHeaderLocale(request: IncomingMessage, { lang, name, parser, }?: HeaderOptions & {
    lang?: string;
}): Intl.Locale | null;
/**
 * get locale from cookie
 *
 * @example
 * example for Node.js request:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { getCookieLocale } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   const locale = getCookieLocale(req)
 *   console.log(locale) // output `Intl.Locale` instance
 *   // ...
 * })
 * ```
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {string} options.lang The default language tag, default is `en-US`. You must specify the language tag with the {@link https://datatracker.ietf.org/doc/html/rfc4646#section-2.1 | BCP 47 syntax}.
 * @param {string} options.name The cookie name, default is `i18n_locale`
 *
 * @throws {RangeError} Throws a {@link RangeError} if `lang` option or cookie name value are not a well-formed BCP 47 language tag.
 *
 * @returns {Intl.Locale} The locale that resolved from cookie
 */
declare function getCookieLocale(request: IncomingMessage, { lang, name }?: {
    lang?: string | undefined;
    name?: string | undefined;
}): Intl.Locale;
/**
 * try to get locale from cookie
 *
 * @description Unlike {@link getCookieLocale}, this function does not throw an error if the locale cannot be obtained, this function returns `null`.
 *
 * @param {IncomingMessage} request The {@link IncomingMessage | request}
 * @param {string} options.lang The default language tag, default is `en-US`. You must specify the language tag with the {@link https://datatracker.ietf.org/doc/html/rfc4646#section-2.1 | BCP 47 syntax}.
 * @param {string} options.name The cookie name, default is `i18n_locale`
 *
 * @returns {Intl.Locale | null} The locale that resolved from cookie. if `lang` option or cookie name value are not a well-formed BCP 47 language tag, return `null`.
 */
declare function tryCookieLocale(request: IncomingMessage, { lang, name }?: {
    lang?: string | undefined;
    name?: string | undefined;
}): Intl.Locale | null;
/**
 * set locale to the response `Set-Cookie` header.
 *
 * @example
 * example for Node.js response:
 *
 * ```ts
 * import { createServer } from 'node:http'
 * import { setCookieLocale } from '@intlify/utils/node'
 *
 * const server = createServer((req, res) => {
 *   setCookieLocale(res, 'ja-JP')
 *   // ...
 * })
 * ```
 *
 * @param {OutgoingMessage} response The {@link OutgoingMessage | response}
 * @param {string | Intl.Locale} locale The locale value
 * @param {CookieOptions} options The cookie options, `name` option is `i18n_locale` as default, and `path` option is `/` as default.
 *
 * @throws {SyntaxError} Throws the {@link SyntaxError} if `locale` is invalid.
 */
declare function setCookieLocale(response: OutgoingMessage, locale: string | Intl.Locale, options?: CookieOptions): void;
/**
 * get the locale from the path
 *
 * @param {IncomingMessage} request the {@link IncomingMessage | request}
 * @param {PathOptions['lang']} options.lang the language tag, which is as default `'en-US'`. optional
 * @param {PathOptions['parser']} options.parser the path language parser, default {@link pathLanguageParser}, optional
 *
 * @throws {RangeError} Throws the {@link RangeError} if the language in the path, that is not a well-formed BCP 47 language tag.
 *
 * @returns {Intl.Locale} The locale that resolved from path
 */
declare function getPathLocale(request: IncomingMessage, { lang, parser }?: PathOptions): Intl.Locale;
/**
 * try to get the locale from the path
 *
 * @description Unlike {@link getPathLocale}, this function does not throw an error if the locale cannot be obtained, this function returns `null`.
 *
 * @param {IncomingMessage} request the {@link IncomingMessage | request}
 * @param {PathOptions['lang']} options.lang the language tag, which is as default `'en-US'`. optional
 * @param {PathOptions['parser']} options.parser the path language parser, default {@link pathLanguageParser}, optional
 *
 * @returns {Intl.Locale | null} The locale that resolved from path. if the language in the path, that is not a well-formed BCP 47 language tag, return `null`.
 */
declare function tryPathLocale(request: IncomingMessage, { lang, parser }?: PathOptions): Intl.Locale | null;
/**
 * get the locale from the query
 *
 * @param {IncomingMessage} request the {@link IncomingMessage | request}
 * @param {QueryOptions['lang']} options.lang the language tag, which is as default `'en-US'`. optional
 * @param {QueryOptions['name']} options.name the query param name, default `'locale'`. optional
 *
 * @throws {RangeError} Throws the {@link RangeError} if the language in the query, that is not a well-formed BCP 47 language tag.
 *
 * @returns {Intl.Locale} The locale that resolved from query
 */
declare function getQueryLocale(request: IncomingMessage, { lang, name }?: QueryOptions): Intl.Locale;
/**
 * try to get the locale from the query
 *
 * @description Unlike {@link getQueryLocale}, this function does not throw an error if the locale cannot be obtained, this function returns `null`.
 *
 * @param {IncomingMessage} request the {@link IncomingMessage | request}
 * @param {QueryOptions['lang']} options.lang the language tag, which is as default `'en-US'`. optional
 * @param {QueryOptions['name']} options.name the query param name, default `'locale'`. optional
 *
 * @returns {Intl.Locale | null} The locale that resolved from query. if the language in the query, that is not a well-formed BCP 47 language tag, return `null`.
 */
declare function tryQueryLocale(request: IncomingMessage, { lang, name }?: QueryOptions): Intl.Locale | null;
/**
 * get navigator locales
 *
 * @description
 * You can get some {@link Intl.Locale} from system environment variables.
 *
 * @returns {Array<Intl.Locale>}
 */
declare function getNavigatorLocales(): readonly Intl.Locale[];
/**
 * get navigator locale
 *
 * @description
 * You can get the {@link Intl.Locale} from system environment variables.
 *
 * @returns {Intl.Locale}
 */
declare function getNavigatorLocale(): Intl.Locale;

export { getCookieLocale, getHeaderLanguage, getHeaderLanguages, getHeaderLocale, getHeaderLocales, getNavigatorLocale, getNavigatorLocales, getPathLocale, getQueryLocale, setCookieLocale, tryCookieLocale, tryHeaderLocale, tryHeaderLocales, tryPathLocale, tryQueryLocale };
