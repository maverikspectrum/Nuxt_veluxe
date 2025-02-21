
// @ts-nocheck


export const localeCodes =  [
  "pt",
  "en",
  "fr"
]

export const localeLoaders = {
  "pt": [{ key: "../i18n/lang/pt.js", load: () => import("../i18n/lang/pt.js" /* webpackChunkName: "locale__home_gomes_VeluxeAuto_i18n_lang_pt_js" */), cache: true }],
  "en": [{ key: "../i18n/lang/en.js", load: () => import("../i18n/lang/en.js" /* webpackChunkName: "locale__home_gomes_VeluxeAuto_i18n_lang_en_js" */), cache: true }],
  "fr": [{ key: "../i18n/lang/fr.js", load: () => import("../i18n/lang/fr.js" /* webpackChunkName: "locale__home_gomes_VeluxeAuto_i18n_lang_fr_js" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false,
    "generatedLocaleFilePathFormat": "absolute",
    "alternateLinkCanonicalQueries": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false,
    "optimizeTranslationDirective": true
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "pt",
      "name": "Português",
      "files": [
        "/home/gomes/VeluxeAuto/i18n/lang/pt.js"
      ]
    },
    {
      "code": "en",
      "name": "English",
      "files": [
        "/home/gomes/VeluxeAuto/i18n/lang/en.js"
      ]
    },
    {
      "code": "fr",
      "name": "Français",
      "files": [
        "/home/gomes/VeluxeAuto/i18n/lang/fr.js"
      ]
    }
  ],
  "defaultLocale": "pt",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "lang/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "fallbackLocale": "pt",
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "pt",
    "name": "Português",
    "files": [
      {
        "path": "/home/gomes/VeluxeAuto/i18n/lang/pt.js"
      }
    ]
  },
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "/home/gomes/VeluxeAuto/i18n/lang/en.js"
      }
    ]
  },
  {
    "code": "fr",
    "name": "Français",
    "files": [
      {
        "path": "/home/gomes/VeluxeAuto/i18n/lang/fr.js"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
