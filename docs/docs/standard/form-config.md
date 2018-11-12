## iForm

iForm 具有以下可配置的类型

- `model`, 是整个form的数据中心，表单内的数据统一由model分发到各个form-item，并且自动双向数据绑定

- [element-Form Attributes](http://element-cn.eleme.io/#/zh-CN/component/form#form-attributes)

其实就是跟element form 的参数一致

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
