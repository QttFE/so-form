<template>
<div>
  <iFormItem v-for="(col, index) in rows" v-bind="col" :key="index"></iFormItem>
</div>
</template>

<script>
import FormItem from './FormItem'
import {parsePath, checkWhen, deepCopy} from '../wrapper/util'

export default {
  props: {
    rows: {
      required: true,
      type: Array,
      default: () => ([])
    }
  }
}
</script>
