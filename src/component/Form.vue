<script>
import mitt from 'mitt'

export default {
  provide () {
    return {
      statusEmitter: this.statusEmitter
    }
  },
  data: () => ({
    statusCenter: {},
    statusEmitter: {core: null}
  }),
  methods: {
    setStatus (key, status) {
      this.statusEmitter.core.emit('update', { name : key, status })
      this.statusCenter[key] && (this.statusCenter[key] = status)
    },
    getStatus (key) {
      return this.statusCenter[key]
    },
    setGlobalStatus (status = 'edit') {
      let statusCenter = this.statusCenter
      Object.keys(statusCenter).forEach(key => {
        statusCenter[key] = status
        this.statusEmitter.core.emit('update', { name : key, status })
      })
      this.statusCenter = {...statusCenter}
    },
    getGlobalStatus () {
      return this.statusCenter
    }
    // this.core.setGlobalStatus('edit');
  },
  render (h) {
    let config = {
      props: this.$attrs,
      ref: 'form'
    }

    return (
        <this.$formmWrapped.ele.Form {...config}>
          {(this.$slots.default)}
        </this.$formmWrapped.ele.Form>
    )
  },
  created () {
    const emitter = this.statusEmitter.core = mitt()
    emitter.on('init', statusObj => {
      this.statusCenter = { ...this.statusCenter, ...statusObj }
    })
  },
  mounted () {

    if (this.$refs.form) {
      this.validate = this.$refs.form.validate
      this.validateField = this.$refs.form.validateField
      this.resetFields = this.$refs.form.resetFields
      this.clearValidate = this.$refs.form.clearValidate
    }
  }
}
</script>
