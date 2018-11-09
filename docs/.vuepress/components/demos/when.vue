<template>
<div>
  <iForm label-width="100px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
  <el-button @click="whenJob=!whenJob">toggle显示任务名称</el-button>
  <el-button @click="whenMsg=!whenMsg">toggle显示是否短信</el-button>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      isNickMsg: 1
    },
    whenJob: true,
    whenMsg: true
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', when: this.whenJob },
        { label: '是否短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], when: () => this.whenMsg },
      ]
    }
  }
}
</script>