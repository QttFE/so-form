## 状态控制

状态是q-form最关心的问题之一，通过状态的控制，能够在传统的 `新建`、`编辑`、`详情` 的场景中，使用同一份代码，提高开发效率。

除此之外，引入状态的表单，也能够轻松地去应对纷繁复杂的业务需求。

### Demo

<box>
  <vuecode md>
    <div slot="demo">
      <demos-status></demos-status>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :rules="rules" :model="model" ref="ruleForm">
    <iFormRows :rows="rows"></iFormRows>
      <el-button @click="validate">validate</el-button>
      <el-button @click="reset">reset</el-button>
  </iForm>
</template>

<script>
export default {
  data: () => ({
    model: {
      job: '',
      age: ''
    },
    rules: {
      'job': [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      age: [
        {type: "number", required: true, transform(value) {
            return parseInt(value, 10)
        }},
        {validator(rule, value, callback, source, options) {
            if(value < 18){
                callback(['too young']);
            }
            callback([])
        }}
      ]
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: 'name', name: 'job', type: 'input' },
        { label: 'age', name: 'age', type: 'input'}
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.ruleForm.resetFields()
    },
    validate () {
      this.$refs.ruleForm.validate()
    }
  }
}
</script>
```

  </div>
  </vuecode>
</box>

### 状态枚举
表单状态分为以下三种类型：edit(编辑态), preview(预览态), disabled(禁用态)

### getGlobalStatus()
获取form表单内的组件状态

```js
  this.$refs.xxxx.getGlobalStatus(); // get global status
```

### setGlobalStatus(status)
设置form表单全局状态

```js
  this.$refs.xxxx.setGlobalStatus('edit'); // set up global status
```

### getStatus(name)
获取单个组件状态

```js
this.$refs.xxxx.getStatus('username'); // get single item's status
```

### setStatus(name, status)
设置单个组件状态

```js
this.$refs.xxxx.setStatus('username', 'edit'); // modify single item's status
```

### 组件适配
为了能够更好实现状态控制，开发者需要对引入的组件进行 "适配"。 常用的表单组件通常只具有编辑态，因此要达到状态控制的目的，我们需要对他们进行改造。

目前我们已经对社区流行的组件库进行了统一的适配，开发者只需要引入这些适配层就可以直接使用了。
