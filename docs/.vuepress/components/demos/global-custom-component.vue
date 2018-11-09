<template>
  <iForm label-width="100px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '全局组件', name: 'job', type: 'customComponent' },
      ]
    }
  }
}
</script>
