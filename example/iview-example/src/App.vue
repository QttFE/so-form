<template>
  <div id="app">
    <iForm :label-width="100" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
      <!-- <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem> -->
      <iFormRows :rows="columns"></iFormRows>
    </iForm>
    <button @click="setStatus">status preview</button>
    <button @click="setStatusEdit">status edit</button>
    <button @click="setStatusDisabled">status disabled</button>
    <button @click="reset">reset</button>
    <button @click="validate">validate</button>
    <button @click="when = !when">when</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    when: true,
    model: {
      job: '',
      job1: '',
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
        { label: '任务名称', name: 'job', type: 'input', when: this.when},
        { label: '任务名称', name: 'textarea', type: 'textarea' },
        // { label: 'tree', name: 'tree', type: 'tree', props: {data: []} },
        // { label: 'upload', name: 'upload', type: 'upload', props: {action: 'https://jsonplaceholder.typicode.com/posts/', slots: {default: (h) => <button>123</button> }} },
        // { label: 'cascader', name: 'cascader', type: 'cascader', props: {options: []} },
        // { label: 'test', name: 'test', type: 'test'},
        // { label: 'datepicker', name: 'job1', type: 'InputNumber'},
        { label: '短信内容', name: 'msg', type: 'textarea', on: {}},
        // { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是', border: true, on: {change: (e) => {
        //   this.ttt()
        // }}}]},
        // { label: '是否昵称短信', name: 'isNickMsg1', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] , on: {}},
        // { label: '昵称短信内容', name: 'nickname', type: 'input', on: {}, props: {
        //     type: 'textarea'
        // }}
      ]
    }
  },
  methods: {
    setStatus () {
      // this.$refs.ruleForm.setStatus('job', 'preview')
      this.$refs.ruleForm.setGlobalStatus('preview')
    },
    setStatusEdit () {
      this.$refs.ruleForm.setGlobalStatus('edit')
    },
    setStatusDisabled () {
      this.$refs.ruleForm.setGlobalStatus('disabled')
    },
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
#app > button {
  margin: 0 10px;
  padding: 3px;
}
</style>
