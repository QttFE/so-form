<template>
<div>
  <iForm label-width="100px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
  <el-button @click="prefix='prefix'">prefix</el-button>
  <el-button @click="suffix = 'suffix'">suffix</el-button>
  <el-button @click="top='top'">top</el-button>
  <el-button @click="bottom='bottom'">bottom</el-button>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      job2: ''
    },
    prefix: '',
    suffix: '',
    bottom: '',
    top: ''
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', prefix: this.prefix, suffix: this.suffix, bottom: this.bottom, top: this.top },
        { label: 'slot render', name: 'job2', type: 'input', bottom: (h) => {
            return <div style="color: blue;">bottom by render</div>
          }
        },
      ]
    }
  }
}
</script>
