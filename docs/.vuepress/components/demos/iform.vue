<template>
<div>
  <iForm label-width="100px" :model="model" :inline="inline">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
  <el-button @click="inline = !inline">toggle inline</el-button>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    inline: false,
    model: {
      job: '',
      isNickMsg: 1,
      package: []
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]},
        { label: '选择套餐', name: 'package', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] },
      ]
    }
  }
}
</script>
