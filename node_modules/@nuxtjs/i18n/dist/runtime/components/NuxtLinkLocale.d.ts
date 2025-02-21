import { type Locale } from '#i18n';
import type { NuxtLinkProps } from 'nuxt/app';
type NuxtLinkLocaleProps = Omit<NuxtLinkProps, 'to'> & {
    to?: import('vue-router').RouteLocationNamedI18n;
    locale?: Locale;
};
declare const _default: import("vue").DefineComponent<NuxtLinkLocaleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<NuxtLinkLocaleProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
