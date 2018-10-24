<script>
export default {
  inject: ['elForm'],
  render(h) {
    let attrs = this.$attrs
    // console.log(this.elForm.model[attrs.name])
    if (!attrs.props) {
      attrs.props = {}
    }
    attrs.props.value = this.elForm.model[attrs.name]
    this.$on('input', (e) => {
      this.elForm.model[attrs.name] = e
    })

    return (
    <this.$formmWrapped.ele.FormItem label={attrs.label} prop={attrs.name}>
      {this.$formmWrapped[this.$attrs.type](h, attrs, this)}
    </this.$formmWrapped.ele.FormItem>
    )
  }
}
</script>
