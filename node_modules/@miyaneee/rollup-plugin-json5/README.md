# @miyaneee/rollup-plugin-json5

![npm](https://img.shields.io/npm/v/@miyaneee/rollup-plugin-json5?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@miyaneee/rollup-plugin-json5?logo=typescript&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@miyaneee/rollup-plugin-json5?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/Miyaneee/rollup-plugin-json5?logo=github&style=flat-square)

🍣 A Rollup plugin which Converts .json5 files to ES6 modules. This plugin is very similar to json plugin officially provided beside the parser.

[简体中文](./README_zh.md) | **English**

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```bash
npm install @miyaneee/rollup-plugin-json5 -D
```

Or use yarn:

```bash
yarn add @miyaneee/rollup-plugin-json5 -D
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import json5 from '@miyaneee/rollup-plugin-json5'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [json5()]
}
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

Now `.json5` file will be importable:

```js
import json from 'path/to/json5.json5'
console.log(json)
```

## Options

### `compact`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to ignore `indent` and generates the smallest code.

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

### `indent`

Type: `String`<br>
Default: `'\t'`

Specifies the indentation for the generated default export.

### `namedExports`

Type: `Boolean`<br>
Default: `true`

If `true`, instructs the plugin to generate a named export for every property of the JSON object.

### `preferConst`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to declare properties as variables, using either `var` or `const`. This pertains to tree-shaking.

### `includeArbitraryNames`

Type: `Boolean`<br>
Default: `false`

If `true` and `namedExports` is `true`, generates a named export for not a valid identifier properties of the JSON object by leveraging the ["Arbitrary Module Namespace Identifier Names" feature](https://github.com/tc39/ecma262/pull/2154).

### `reviver`

Type: `((this: any, key: string, value: any) => any) | null`

See [JSON5.parse()](https://github.com/json5/json5#json5parse).

## LICENSE

MIT
