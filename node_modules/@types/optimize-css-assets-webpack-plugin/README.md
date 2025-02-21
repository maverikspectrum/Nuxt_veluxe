# Installation
> `npm install --save @types/optimize-css-assets-webpack-plugin`

# Summary
This package contains type definitions for optimize-css-assets-webpack-plugin (https://github.com/nmfr/optimize-css-assets-webpack-plugin).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/optimize-css-assets-webpack-plugin.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/optimize-css-assets-webpack-plugin/index.d.ts)
````ts
import { Compiler, WebpackPluginInstance as Plugin } from "webpack";

export = OptimizeCssAssetsPlugin;

declare namespace OptimizeCssAssetsPlugin {
    interface Options {
        /**
         * A regular expression that indicates the names of the assets that should
         * be optimized \ minimized. The regular expression provided is run against
         * the filenames of the files exported by the `ExtractTextPlugin` instances
         * in your configuration, not the filenames of your source CSS files
         *
         * @default /\.css$/g
         */
        assetNameRegExp?: RegExp | undefined;
        /**
         * The CSS processor used to optimize \ minimize the CSS. This should be a
         * function that follows `cssnano.process` interface (receives a CSS and
         * options parameters and returns a Promise).
         *
         * @default cssnano
         */
        cssProcessor?: {
            process: (css: string, options?: object) => PromiseLike<any>;
        } | undefined;
        /**
         * The options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorOptions?: object | undefined;
        /**
         * The plugin options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorPluginOptions?: object | undefined;
        /**
         * A boolean indicating if the plugin can print messages to the console.
         *
         * @default true
         */
        canPrint?: boolean | undefined;
    }
}

declare class OptimizeCssAssetsPlugin implements Plugin {
    constructor(options?: OptimizeCssAssetsPlugin.Options);
    apply(compiler: Compiler): void;
}

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 09:09:39 GMT
 * Dependencies: [@types/webpack](https://npmjs.com/package/@types/webpack)

# Credits
These definitions were written by [Armando Meziat](https://github.com/odnamrataizem), and [Spencer Miskoviak](https://github.com/skovy).
