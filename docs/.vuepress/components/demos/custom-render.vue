<template>
<div>
  <iForm label-width="150px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</div>
</template>

<script>
export default {
  data: () => ({
    model: {}
  }),
  computed: {
    rows (h) {
      return [
        { label: 'custom render', name: 'custom', type: 'custom', render: (h) => {
            return (
              <div>
                <p>content by custom render </p>
                <button tpye="button">custom button</button>
              </div>
            )
          }
        },
      ]
    }
  }
}
</script>
