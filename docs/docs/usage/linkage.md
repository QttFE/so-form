## 基础表单

> 主要涉及到表单的视图输出

表单由主要`视图层`和`数据层`两部分组成，并弱化视图层，强调数据即视图，通过自动双向数据绑定完成视图层修改响应到数据层，这点跟 vue 的设计不谋而合。

### 生成表单

- `tpye`参数，控制输出的表单类型
- `name`参数，自动跟在`<iForm>` 的`model`的数据源进行双向绑定，所以你在只需要关系数据层就好

::: tip
ps: name支持嵌套，例如'inner.job'，如下示例)
:::

<box>
  <vuecode md>
    <div slot="demo">
      <demos-basic></demos-basic>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      inner: {
        job: ''
      },
      isNickMsg: 1,
      package: []
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '嵌套任务', name: 'inner.job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]},
        { label: '选择套餐', name: 'package', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] },
      ]
    }
  }
}
</script>

```

  </div>
  </vuecode>
</box>

---

### iForm

`<iForm>`的设计初衷，是希望跟组件库的使用方式一致，无成本使用，所以，传参跟组件库的参数保持一致


<box>
  <vuecode md>
    <div slot="demo">
      <demos-iform></demos-iform>
    </div>
    <div slot="code">

```html
<template>
<div>
  <iForm label-width="100px" :model="model" :inline="inline">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
  <el-button @click="inline = !inline">toggle inline</el-button>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    inline: false,
    model: {
      job: '',
      isNickMsg: 1,
      package: []
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]},
        { label: '选择套餐', name: 'package', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] },
      ]
    }
  }
}
</script>
```

  </div>
  </vuecode>
</box>

---


---

### form-item

- 通过`formItemProps`, 控制原生`<el-form-item>`的参数
- 通过`slots`，控制form-item自带的slots，如：`slots: { label: (h) => (<span style="color: gray">label by render</span>) }`

<box>
  <vuecode md>
    <div slot="demo">
      <demos-form-item></demos-form-item>
    </div>
    <div slot="code">

```html
<template>
<div>
  <iForm label-width="150px" :model="model" :inline="inline">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      isNickMsg: 1,
      land: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], formItemProps: {
          required: true
        }},
        { name: 'land', type: 'select', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], slots: { label: (h) => (<span style="color: gray">label by render</span>) }},
      ]
    }
  }
}
</script>

```

  </div>
  </vuecode>
</box>

---

### 具体功能组件传参

- 通过`props`跟`attrs`，给具体渲染出来的功能组件(如`input`, `select` etc.)进行传参

::: tip

  正常组件的props，通过props参数来传递

  正常的 HTML 特性 比如 input的 `maxLength`,需要通过attrs来传递

  ps: 这是vue jsx 的一个比较不好的特性，目前没有太好的方式解决
:::


<box>
  <vuecode md>
    <div slot="demo">
      <demos-component-props></demos-component-props>
    </div>
    <div slot="code">

```html
<template>
<div>
  <iForm label-width="150px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      isNickMsg: 1,
      land: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', attrs: {placeholder: '最多输入1字符', maxLength: 1}, props: { clearable: true } },
      ]
    }
  }
}
</script>
```

  </div>
  </vuecode>
</box>
