<script>
import {checkWhen} from '../wrapper/util'

export default {
  render (h) {
    let when = this.$attrs.when

    return (
      checkWhen(when) && (
        <div>
          {(this.$slots.default)}
        </div>
      )
    )
  }
}
</script>

<style>
.formm-wrapped_flex {
  display: inline-block;
}
</style>
