<template>
  <div id="app">
    <iForm label-width="100px" :rules="rules" :model="model" style="width: 500px;" ref="ruleForm">
      <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
    </iForm>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ISlot from './components/ISlot.vue'
import ren from './components/render.vue'
// import iFormItem from './formm/component/FormItem'
// import iForm from './formm/component/Form'

export default {
  name: 'app',
  data: () => ({
    model: {
      input: '',
      select: '',
      radio: 'a',
      checkbox: ['a', 'b'],
      switch: false,
      slider: 10,
      datepicker: ''
    },
    rules: {
      input: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      select: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
    }
  }),
  components: {
    HelloWorld,
    ISlot,
    ren,
    // iFormItem,
    // iForm
  },
  computed: {
    columns (h) {
      return [
        { label: 'input', name: 'input', status: 'edit', type: 'input', on: {
          input: () => {
            // this.model.slider = 20
          } }},
        { name: 'select', status: 'edit', type: 'select', options: [{id:1,name:'a'}, {id: 2,name: 'b'}] , on: {
          change:() => {
            this.model.slider = 20
            // console.log(this)
          }
        }},
        { name: 'checkbox', status: 'edit', type: 'checkbox', options: ['a', 'b', 'c'] , on: {}},
        { name: 'radio', status: 'edit', type: 'radio', options: ['a', 'b', 'c'] , on: {}},
        { name: 'switch', status: 'edit', type: 'switch'},
        { name: 'slider', status: 'edit', type: 'slider'},
        { name: 'datepicker', status: 'edit', type: 'datepicker'},
        { name: 'custom', status: 'edit', type: 'custom', render (h) {
          return (
            <span>123</span>
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
    }
  },
  mounted () {
    console.log(this.$refs.ruleForm)
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
