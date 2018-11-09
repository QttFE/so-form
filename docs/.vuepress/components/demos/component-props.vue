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
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', attrs: {placeholder: '最多输入1字符', maxLength: 1}, props: { clearable: true } },
      ]
    }
  }
}
</script>
