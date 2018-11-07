<script lang="jsx">
import {parsePath, checkWhen, deepCopy} from '../wrapper/util'
import set from 'set-object-path'

function context2Jsx(h, input) {
  if (typeof input === 'string') return <span>{input}</span>

  if (typeof input === 'function') {
    return input(h)
  }
}

export default {
  inject: ['elForm', 'statusEmitter'],
  data: () => ({
    status: 'edit'
  }),
  render(h) {
    let props = this.$attrs || {}
    props.props = props.props || {}
    props.on = props.on || {}
    props.status = this.status || 'edit'

    let attrs = {
      ...props,
      on: deepCopy(props.on) || {},
      props: deepCopy(props.props),
    }
    attrs.on.input = (e) => {
      props.on.input && props.on.input(e)
      this.$emit('input', e)
    }

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

    let hasWhen = attrs.hasOwnProperty('when')
    let isWhen = checkWhen(attrs.when)
    if (hasWhen && !isWhen) return null

  return (
    <this.$formmWrapped.ele.FormItem {...formItemProps}>
      {attrs.slots && Object.keys(attrs.slots).map(slot => (
        <div style="display: inline-block;" slot={slot}>
          {attrs.slots[slot](h)}
        </div>
      ))}
      {
      // top 插槽
        attrs.top && (context2Jsx(h, attrs.top))
      }
      {/* main */}
      <div class="formm-wrapped_flex">
        {attrs.prefix && context2Jsx(h, attrs.prefix)}
        {/* prefix 插槽 */}
        <div class="formm-wrapped_div">
          {this.$formmWrapped[this.$attrs.type](h, attrs, this)}
        </div>
        {/* suffix 插槽 */}
        {attrs.suffix && context2Jsx(h, attrs.suffix)}
      </div>

      {
        // bottom 插槽
        attrs.bottom && (context2Jsx(h, attrs.bottom))
      }
    </this.$formmWrapped.ele.FormItem>
    )
  },
  mounted () {
    // initialize statusCenter && callback
    if (this.$attrs.name && this.statusEmitter) {
      this.statusEmitter.core.emit('init', {[this.$attrs.name]: 'edit'})
      this.statusEmitter.core.on('update', (obj) => {
        if (!obj) return

        if (obj.name === this.$attrs.name && this.status !== obj.status) {
          this.status = obj.status
          this.$forceUpdate()
        }
      })
    }
  }
}
</script>

<style>
.formm-wrapped_flex {
  display: flex;
}
.formm-wrapped_div {
  width: 100%;
}
</style>