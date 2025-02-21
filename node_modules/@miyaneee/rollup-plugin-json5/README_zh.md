# @miyaneee/rollup-plugin-json5

![npm](https://img.shields.io/npm/v/@miyaneee/rollup-plugin-json5?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@miyaneee/rollup-plugin-json5?logo=typescript&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@miyaneee/rollup-plugin-json5?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/Miyaneee/rollup-plugin-json5?logo=github&style=flat-square)

🍣 一个将 .json5 文件转换为 ES6 模块的 rollup 插件。这个插件和官方提供的解析 json 的插件非常相似，除了它的解析器。

**简体中文** | [English](./README.md)

## 环境需求

需要 Node(v8.0.0+) 和 Rollup v1.20.0+。

## 安装

使用 npm 安装：

```bash
npm install @miyaneee/rollup-plugin-json5 -D
```

或者使用 yarn 安装：

```bash
yarn add @miyaneee/rollup-plugin-json5 -D
```

## 使用

创建一个 `rollup.config.js` [配置文件](https://www.rollupjs.com/guide/command-line-reference#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6configuration-files) 并引入插件：

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

接着通过 [命令行](https://www.rollupjs.com/guide/command-line-reference) 或者 [API](https://www.rollupjs.com/guide/javascript-api) 调用 `rollup`。

现在，你可以引入 `.json` 文件了：

```js
import json from 'path/to/json5.json5'
console.log(json)
```

## 选项

### `compact`

类型：`Boolean`<br>
默认值：`false`

如果为 `true`, 会令插件忽视 `indent` 并生成最小的代码。

### `exclude`

类型：`String` | `Array[...String]`<br>
默认值：`null`

一个 [最小匹配表达式](https://github.com/isaacs/minimatch)，或者一个表达式数组，它会指定哪些文件会被忽略。默认情况下没有文件会被忽略。

### `include`

类型：`String` | `Array[...String]`<br>
默认值：`null`

一个 [最小匹配表达式](https://github.com/isaacs/minimatch)，或者一个表达式数组，它会指定哪些文件会被包括。默认情况下所有文件都会被包括。

### `indent`

类型：`String`<br>
默认值：`'\t'`

为默认导出指定缩进。

### `namedExports`

类型：`Boolean`<br>
默认值：`true`

如果为 `true`，令插件为每个 JSON 对象属性生成命名导出。

### `preferConst`

类型：`Boolean`<br>
默认值：`false`

如果为 `true`，令插件使用 `var` 或者 `const` 将属性定义为变量。与摇树优化相关。

### `includeArbitraryNames`

类型：`Boolean`<br>
默认值：`false`

如果本选项设为 `true` 并且 `namedExports` 也被设为 `true`，那么就会利用[“任意模块命名空间标识符名称”特性](https://github.com/tc39/ecma262/pull/2154)，为 JSON 对象中非有效标识符属性生成一个命名导出。

### `reviver`

类型：`((this: any, key: string, value: any) => any) | null`

查看 [JSON5.parse()](https://github.com/json5/json5#json5parse)。

## 许可证

MIT
