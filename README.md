<p align="center"><img width="200" src="./docs/.vuepress/public/logo.png"></p>
<p align="center">so-form, 渐进式通用vue表单</p>

<p align="center">
  <a href="https://github.com/alibaba/ice/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a href="https://travis-ci.com/ws456999/so-form">
    <img src="https://travis-ci.com/ws456999/so-form.svg?branch=master"/>
  </a>
  <a href="https://coveralls.io/github/ws456999/so-form?branch=master"><img src="https://coveralls.io/repos/github/ws456999/so-form/badge.svg?branch=master" /></a>
</p>

## Introduction

- so-form 是一个自动双向数据绑定，可拓展，提供 `json-schema` 自动渲染出对应表单组件`vue`插件
- so-form 对第三方组件库无侵入，提供了高度抽象能力解决繁琐的表单配置插件

## feature

- json-schema 2 form
- 自动双向数据绑定
- 表单支持自定义 render（[jsx 写法](https://cn.vuejs.org/v2/guide/render-function.html#JSX)）
- 支持拓展 components
- 各种方便插槽
- 全局切换`edit`/`preview`状态
- 目前支持`element-ui`跟`iview` ui框架

## install

```shell
  npm i so-form --save
```

## usage

- 📘 [中文文档](https://ws456999.github.io/so-form/)


## example gif

例如下图，通过左边的简单配置，就可以生成右边表单。

![example](./static/basic.gif)

## 组件

[目前支持的组件](https://ws456999.github.io/so-form/docs/started/component-list.html)

## todo

- [ ] babel插件，按需加载

## Contribution

Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License

so-form is available under the [MIT license](https://tldrlegal.com/license/mit-license).
