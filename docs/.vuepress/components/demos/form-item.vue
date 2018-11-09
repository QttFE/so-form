<template>
<div>
  <iForm label-width="150px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      isNickMsg: 1,
      land: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], formItemProps: {
          required: true
        }},
        { name: 'land', type: 'select', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], slots: { label: (h) => (<span style="color: gray">label by render</span>) }},
      ]
    }
  }
}
</script>
