<template>
  <div id="app">
    <iForm label-width="100px" :model="model">
      <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
    </iForm>
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
    }
  }),
  computed: {
    columns (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', top: (h) => (<span>'top'</span>), suffix: 'suffix'},
        { label: '任务名称', name: 'textarea', type: 'textarea' },
        { label: 'tree', name: 'tree', type: 'tree', props: {data: []} },
        { label: 'datepicker', name: 'job1', type: 'InputNumber'},
        { label: '短信内容', name: 'msg', type: 'textarea', on: {}},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是', border: true, on: {change: (e) => {
          this.ttt()
        }}}]},
        { label: '是否昵称短信', name: 'isNickMsg1', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] , on: {}},
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
