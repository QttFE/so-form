<script>
import {parsePath} from '../wrapper/util'
import set from 'set-object-path'

export default {
  inject: ['elForm'],
  render(h) {
    let attrs = this.$attrs
    attrs.props = attrs.props || {}

    // 从model层拿数据
    attrs.props.value = parsePath(this.elForm.model, attrs.name)

    this.$on('input', (e) => {
      // 双向数据绑定实现
      set(this.elForm.model, attrs.name, e)
    })

    // from item props
    let formItemProps = {
      props: {
        label: attrs.label,
        prop: attrs.name,
        ...(attrs.formItemProps || {})
      }
    }

    return (
    <this.$formmWrapped.ele.FormItem {...formItemProps}>
      {attrs.slots && Object.keys(attrs.slots).map(slot => (
        <div style="display: inline-block;" slot={slot}>
          {attrs.slots[slot](h)}
        </div>
      ))}
      {this.$formmWrapped[this.$attrs.type](h, attrs, this)}
    </this.$formmWrapped.ele.FormItem>
    )
  }
}
</script>
