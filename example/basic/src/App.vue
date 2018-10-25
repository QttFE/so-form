<template>
  <div id="app">
    <iForm label-width="100px" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
      <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
    </iForm>
    <button @click="reset">reset</button>
    <button @click="validate">validate</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: () => ({
    model: {
      obj: {
        input: ''
      },
      input: '',
      select: '',
      radio: 'a',
      checkbox: ['a', 'b'],
      switch: false,
      slider: 10,
      datepicker: ''
    },
    rules: {
      'obj.input': [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      select: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
      checkbox: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
    }
  }),
  components: {
    HelloWorld,
  },
  computed: {
    columns (h) {
      return [
        { label: 'input', name: 'obj.input', type: 'input', on: {
          input: () => {
            // this.model.slider = 20
          } }},
        { slots: {
            label: h => <span>slot</span>
          },label: 'select', name: 'select', type: 'select', options: [{id:1,name:'a'}, {id: 2,name: 'b'}] , on: {
          change:() => {
            this.model.slider = 20
          }
        }},
        { name: 'checkbox', type: 'checkbox', options: ['a', 'b', 'c'] , on: {}},
        { name: 'radio', type: 'radio', options: ['a', 'b', 'c'] , on: {}},
        { name: 'switch', type: 'switch'},
        { name: 'slider', type: 'slider'},
        { name: 'datepicker', type: 'datepicker'},
        { name: 'custom', type: 'custom', render (h) {
          return (
            <span>444</span>
          )
        } },
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
