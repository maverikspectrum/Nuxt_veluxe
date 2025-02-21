/**
 * Utility functions to support both VueI18n and Composer instances
 */
import type { Composer, I18n, VueI18n } from 'vue-i18n';
export declare function isVueI18n(target: I18n | VueI18n | Composer): target is VueI18n;
export declare function getI18nTarget(i18n: I18n | VueI18n | Composer): Composer<{}, {}, {}, string, never, string> | VueI18n<{}, {}, {}, string, never, string, Composer<{}, {}, {}, string, never, string>>;
export declare function getComposer(i18n: I18n | VueI18n | Composer): Composer;
declare module 'vue-i18n' {
    interface VueI18n {
        /**
         * This is not exposed in VueI18n's types, but it's used internally
         * @internal
         */
        __composer: Composer;
    }
}
