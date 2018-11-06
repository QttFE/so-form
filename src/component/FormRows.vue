<template>
<div>
  <iFormItem v-for="(col, index) in rows" v-bind="col" :key="index"></iFormItem>
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
  }
}
</script>
