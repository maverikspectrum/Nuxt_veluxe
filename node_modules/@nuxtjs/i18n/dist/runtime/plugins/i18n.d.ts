import type { LocaleHeadFunction, ResolveRouteFunction } from '../composables.js';
declare const _default: import("#app").Plugin<{
    /**
     * TODO: remove type assertions while type narrowing based on generated types
     */
    localeHead: LocaleHeadFunction;
    localePath: import("../composables").LocalePathFunction;
    localeRoute: import("../composables").LocaleRouteFunction;
    getRouteBaseName: import("../composables").RouteBaseNameFunction;
    switchLocalePath: import("../composables").SwitchLocalePathFunction;
    resolveRoute: ResolveRouteFunction;
    localeLocation: import("../composables").LocaleLocationFunction;
}> & import("#app").ObjectPlugin<{
    /**
     * TODO: remove type assertions while type narrowing based on generated types
     */
    localeHead: LocaleHeadFunction;
    localePath: import("../composables").LocalePathFunction;
    localeRoute: import("../composables").LocaleRouteFunction;
    getRouteBaseName: import("../composables").RouteBaseNameFunction;
    switchLocalePath: import("../composables").SwitchLocalePathFunction;
    resolveRoute: ResolveRouteFunction;
    localeLocation: import("../composables").LocaleLocationFunction;
}>;
export default _default;
