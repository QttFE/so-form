<script>
export default {
  props: {
    name: {},
    status: {},
  },
  render (h) {
    return (
      <div>
        <el-button>render</el-button>
        hello, render
      </div>
    )
  }
}
</script>
