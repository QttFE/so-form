<template>
  <iForm label-width="100px" :model="model">
    <p>输入input，选中radio</p>
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</template>

<script>
export default {
  data: () => ({
    model: {
      job: '',
      isNickMsg: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', on: {
            input: (e) => {
              this.model.isNickMsg = 1
            }
          }
        },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]}
      ]
    }
  }
}
</script>
