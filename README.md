<p align="center" style="text-align: center;"><img width="200" src="./docs/.vuepress/public/logo.png"></p>
<h2 style="text-align: center;" align="center">q-form 📰</h2>
<p align="center" style="text-align: center;">渐进式通用vue表单</p>

[![pipeline status](https://git.qutoutiao.net/npm/q-form/badges/master/pipeline.svg)](https://git.qutoutiao.net/npm/q-form/commits/master)[![coverage report](https://git.qutoutiao.net/npm/q-form/badges/master/coverage.svg)](https://git.qutoutiao.net/npm/q-form/commits/master)

## Introduction

- q-form 是一个自动双向数据绑定，可拓展，提供 `json-schema` 自动渲染出对应表单组件`vue`插件
- q-form 对第三方组件库无侵入，提供了高度抽象能力解决繁琐的表单配置问题

## feature

- json-schema 2 form
- 自动双向数据绑定
- 表单支持自定义 render（[jsx 写法](https://cn.vuejs.org/v2/guide/render-function.html#JSX)）
- 支持拓展 components
- 各种方便插槽
- 全局切换`edit`/`preview`状态
- 支持`element-ui`，后续会支持iview等ui框架

## Links

- 📘 [Documentation](http://qtt-frontend-gerrit.qutoutiao.net/ci/npm/q-form/docs/index.html)

## example gif

例如下图，通过左边的简单配置，就可以生成右边表单。
![example](https://git.qutoutiao.net/npm/q-form/raw/master/static/basic.gif)

## install

```shell
  # vue支持 jsx写法
  npm i babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx --save-dev

  # 在.babelrc文件中加入
    "plugins": ["transform-vue-jsx"]

  # 引入
  npm i @qtt/q-form --save

```

## usage

```
  import qform from '@qtt/q-form'

  Vue.use(Element)
  Vue.use(qform, {
    source: Element,
  })

```

```html
<!-- model 为表单数据中心，iFormItem 通用的vue表单会自动数据绑定 -->
<iForm :model="model">
  <iFormRows :rows="rows"></iFormRows>
</iForm>
```

```js
  // 注意，需要把columns写在computed内部（若卸载data后续会有context问题）
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input'},
        { label: '短信内容', name: 'msg', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: '昵称短信内容', name: 'nickname', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        { label: '落地页个性化', name: 'land', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: 'cu', name: 'custom', type: 'custom', render (h) {
          return (
            <span>自定义内容</span>
          )
        }}
      ]
    }
  },
```

## 组件

- custom(自己写 render)
- input
- textarea
- select
- checkbox
- radio
- switch
- slider
- datepicker
- timeselect
- timepicker
- inputnumber
- rate
- cascader
- tree
- upload

## todo

- [x] label 可 render
- [x] `<FormRows>` 组件
- [x] `option`组件支持传参
- [x] 全局切换`edit`/`preview`状态
- [x] `formItem` 支持 `prefix` 等插槽
- [x] `when`/`参数 可以控制`<formitem>`渲染
- [x] 注册自定义 form 组件
- [x] 完善文档
- [ ] 支持 iview

## changelog

_2018-11-12_

- 提供文档

_2018-11-07_

- 支持注册自定义 form 组件
- add when props

_2018-11-05_

- 添加全局切换`edit`/`preview`状态功能

## issue 🤔

> 如果存在`bug`或者有好的一些改善意见建议，💡

- 可在`km`上评论，[传送门](http://km.qutoutiao.net/display/MD/q-form)
- 也可在 npm 中直接写 issue， [传送门](https://git.qutoutiao.net/npm/q-form/issues)
