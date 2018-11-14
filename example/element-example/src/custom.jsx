export default (h, props, vm) => {
  return <div><input type="text" onInput={(e) => vm.$emit('input', e.target.value)}  /></div>
}