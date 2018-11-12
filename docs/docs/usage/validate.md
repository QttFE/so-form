## 校验

目前so-form的校验方式跟 `el-form` 的使用方式一致，无成本迁移

### demo

<box>
  <vuecode md>
    <div slot="demo">
      <demos-validate></demos-validate>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :rules="rules" :model="model" ref="ruleForm">
    <iFormRows :rows="rows"></iFormRows>
      <el-button @click="validate">validate</el-button>
      <el-button @click="reset">reset</el-button>
      <el-button @click="validateField('job')">validateField</el-button>
      <el-button @click="clearValidate">clearValidate	</el-button>
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
    },
    clearValidate	 () {
      this.$refs.ruleForm.clearValidate	()
    },
    validateField (name) {
      this.$refs.ruleForm.validateField(name)
    }
  }
}
</script>

```

  </div>
  </vuecode>
</box>