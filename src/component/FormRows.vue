<template>
<div>
  <FormItem v-for="(col, index) in rows" v-bind="col" :key="index"></FormItem>
</div>
</template>

<script>
import FormItem from './FormItem'

export default {
  props: {
    rows: {
      required: true,
      type: Array
    }
  },
  components: {
    FormItem
  }
}
</script>
