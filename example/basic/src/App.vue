<template>
  <div id="app">
    <iForm label-width="100px" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
      <!-- <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem> -->
      <iFormRows :rows="columns"></iFormRows>
    </iForm>
    <button @click="reset">reset</button>
    <button @click="validate">validate</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      msg: '',
      nickname: '',
      isNickMsg: 1,
      isNickMsg1: [],
      land: 1,
    },
    rules: {
      'job': [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    }
  }),
  computed: {
    columns (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', top: (h) => (<span>'top'</span>), suffix: 'suffix'},
        { label: '短信内容', name: 'msg', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是', border: true, on: {change: (e) => {
          console.log(e, 123)
        }}}]},
        { label: '是否昵称短信', name: 'isNickMsg1', type: 'checkbox', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: '昵称短信内容', name: 'nickname', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        // label 自定义 render
        { name: 'land', type: 'select', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], slots: { label: (h) => (<span style="color: gray">落地页个性化 by render</span>) }},
        // custom 表单
        { label: 'cu', name: 'custom', type: 'custom', render (h) {
          return (
            <span>自定义内容</span>
          )
        }}
      ]
    }
  },
  methods: {
    ttt (e) {
      this.model.slider = 20
    },
    reset () {
      this.$refs.ruleForm.resetFields()
    },
    validate () {
      this.$refs.ruleForm.validate()
    }
  },
  mounted () {
    // console.log(this.$refs.ruleForm)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
