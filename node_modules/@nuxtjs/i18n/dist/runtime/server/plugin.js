import { useRuntimeConfig } from "#imports";
import { defineI18nMiddleware } from "@intlify/h3";
import { localeCodes, vueI18nConfigs, localeLoaders } from "#internal/i18n/options.mjs";
import { defineNitroPlugin } from "nitropack/dist/runtime/plugin";
import { localeDetector as _localeDetector } from "#internal/i18n/locale.detector.mjs";
import { nuxtMock } from "./utils.js";
import { loadVueI18nOptions, loadInitialMessages, makeFallbackLocaleCodes, loadAndSetLocaleMessages } from "../messages.js";
export default defineNitroPlugin(async (nitro) => {
  const options = await loadVueI18nOptions(vueI18nConfigs, nuxtMock);
  options.messages = options.messages || {};
  const fallbackLocale = options.fallbackLocale = options.fallbackLocale ?? false;
  const runtimeI18n = useRuntimeConfig().public.i18n;
  const initialLocale = runtimeI18n.defaultLocale || options.locale || "en-US";
  options.messages = await loadInitialMessages(
    options.messages,
    localeLoaders,
    {
      localeCodes,
      initialLocale,
      lazy: runtimeI18n.lazy,
      defaultLocale: runtimeI18n.defaultLocale,
      fallbackLocale: options.fallbackLocale
    },
    nuxtMock
  );
  const localeDetector = async (event, i18nContext) => {
    const locale = _localeDetector(event, {
      defaultLocale: initialLocale,
      fallbackLocale: options.fallbackLocale
    });
    if (runtimeI18n.lazy) {
      if (fallbackLocale) {
        const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [locale]);
        await Promise.all(
          fallbackLocales.map((locale2) => loadAndSetLocaleMessages(locale2, localeLoaders, i18nContext.messages, nuxtMock))
        );
      }
      await loadAndSetLocaleMessages(locale, localeLoaders, i18nContext.messages, nuxtMock);
    }
    return locale;
  };
  const { onRequest, onAfterResponse } = defineI18nMiddleware({
    ...options,
    locale: localeDetector
  });
  nitro.hooks.hook("request", onRequest);
  nitro.hooks.hook("afterResponse", onAfterResponse);
});
