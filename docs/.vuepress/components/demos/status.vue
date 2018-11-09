<template>
  <iForm label-width="100px" :model="model" ref="ruleForm">
    <iFormRows :rows="rows"></iFormRows>
    <div class="margin">
      <span class="label">global status:</span>
      <el-button @click="setStatus('edit')">status edit</el-button>
      <el-button @click="setStatus('preview')">status preview</el-button>
      <el-button @click="setStatus('disabled')">status disabled</el-button>
    </div>
    <div class="margin">
      <span class="label">name status:</span>
      <el-button @click="setLocalStatus('job', 'edit')">status edit</el-button>
      <el-button @click="setLocalStatus('job', 'preview')">status preview</el-button>
      <el-button @click="setLocalStatus('job', 'disabled')">status disabled</el-button>
    </div>
    <div class="margin">
      <span class="label">age status:</span>
      <el-button @click="setLocalStatus('isMsg', 'edit')">status edit</el-button>
      <el-button @click="setLocalStatus('isMsg', 'preview')">status preview</el-button>
      <el-button @click="setLocalStatus('isMsg', 'disabled')">status disabled</el-button>
    </div>
  </iForm>
</template>

<script>
export default {
  data: () => ({
    model: {
      job: '',
      isMsg: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: 'name', name: 'job', type: 'input' },
        { label: 'isMsg', name: 'isMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]}
      ]
    }
  },
  methods: {
    setStatus (status) {
      this.$refs.ruleForm.setGlobalStatus(status)
    },
    setLocalStatus (name, status) {
      this.$refs.ruleForm.setStatus(name, status)
    }
  }
}
</script>

<style scoped>
.label {
  display: inline-block;
  width: 120px;
}
.margin{
  margin: 5px 0;
}
</style>