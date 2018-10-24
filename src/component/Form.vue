<script>
export default {
  render (h) {
    let config = {
      props: this.$attrs,
      ref: 'form'
    }
    setTimeout(() => {
      if (this.$refs.form) {
        this.validate = this.$refs.form.validate
        this.validateField = this.$refs.form.validateField
        this.resetFields = this.$refs.form.resetFields
        this.clearValidate = this.$refs.form.clearValidate
      }
    }, 0)

    return (
        <this.$formmWrapped.ele.Form {...config}>
          {(this.$slots.default)}
        </this.$formmWrapped.ele.Form>
    )
  }
}
</script>
