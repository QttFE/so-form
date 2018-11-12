## iFormRows

是批量传递iFormItem的一个快捷组件，所以大家按需使用即可

```html
<iForm label-width="100px" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
  <iFormRows :rows="columns"></iFormRows>
</iForm>

等价与下文

<iForm label-width="100px" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
  <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
</iForm>

```

