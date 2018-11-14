<script>
import { parsePath, checkWhen, deepCopy } from '../wrapper/util'
import { getConfig } from '../adaptation/config'
import set from 'set-object-path'

export default {
  inject: [getConfig().injectFormName, 'statusEmitter'],
  data: () => ({
    status: 'edit'
  }),
  render(h) {
    let config = getConfig()
    let props = deepCopy(this.$attrs) || {}
    props.props = props.props || {}
    props.on = props.on || {}
    props.status = this.status || 'edit'
    if (props.status === 'disabled') {
      props.props.disabled = true
    }

    let attrs = {
      ...props,
      on: deepCopy(props.on) || {},
      props: deepCopy(props.props)
    }
    attrs.on.input = e => {
      props.on.input && props.on.input(e)
      this.$emit('input', e)
    }

    // 从model层拿数据
    // attrs.props.value = parsePath(this.elForm.model, attrs.name)
    attrs.props.value = parsePath(this[config.injectFormName].model, attrs.name)

    this.$on('input', e => {
      // 双向数据绑定实现
      set(this[config.injectFormName].model, attrs.name, e)
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
      <this.$formmWrapped.source.FormItem {...formItemProps}>
        {attrs.slots &&
          Object.keys(attrs.slots).map(slot => (
            <div style="display: inline-block;" slot={slot}>
              {attrs.slots[slot](h)}
            </div>
          ))}
        {// top 插槽
        attrs.top && (
          <div class="formm-wrapped_top">{context2Jsx(h, attrs.top)}</div>
        )}
        {/* main */}
        <div class="formm-wrapped_flex">
          {attrs.prefix && (
            <div class="formm-wrapped_prefix">
              {context2Jsx(h, attrs.prefix)}
            </div>
          )}
          {/* prefix 插槽 */}
          <div class="formm-wrapped_div">
            {this.$formmWrapped[this.$attrs.type](h, attrs, this)}
          </div>
          {/* suffix 插槽 */}
          {attrs.suffix && (
            <div class="formm-wrapped_suffix">
              {context2Jsx(h, attrs.suffix)}
            </div>
          )}
        </div>

        {// bottom 插槽
        attrs.bottom && (
          <div class="formm-wrapped_bottom">{context2Jsx(h, attrs.bottom)}</div>
        )}
      </this.$formmWrapped.source.FormItem>
    )
  },
  mounted() {
    // initialize statusCenter && callback
    if (this.$attrs.name && this.statusEmitter) {
      this.statusEmitter.core.emit('init', { [this.$attrs.name]: 'edit' })
      this.statusEmitter.core.on('update', obj => {
        if (!obj) return

        if (obj.name === this.$attrs.name && this.status !== obj.status) {
          this.status = obj.status
          this.$forceUpdate()
        }
      })
    }
  }
}

function context2Jsx(h, input) {
  if (typeof input === 'string') return <span>{input}</span>

  if (typeof input === 'function') {
    return input(h)
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
.formm-wrapped_suffix {
  margin-left: 10px;
}
.formm-wrapped_prefix {
  margin-right: 10px;
}
</style>
