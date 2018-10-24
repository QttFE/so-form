import { formatValue, getCleanProps, deepCopy } from './util'

/**
 * preview态
 *
 * @param {*} value
 * @returns
 */
function renderValue(h, value) {
  if (value === null || value === undefined) return null // 空值直接返回

  if (Array.isArray(value)) {
    const arrValue = value.map(valItem => (
      <span className="multi-value-item">{valItem}</span>
    ))

    return <div className="multi-value-item-wrapper">{arrValue}</div>
  }

  return <span>{value}</span>
}

/**
 * 封装组件
 *
 * @class WrapperClass
 */
class WrapperClass {
  constructor(source) {
    this.ele = source
  }

  Input = (h, props, vm) => {
    const { status } = props
    const otherProps = getCleanProps(props);

    let config = {
      ...props,
      on: deepCopy(props.on) || {},
      props: deepCopy(props.props),
    }
    config.on.input = (e) => {
      props.on.input && props.on.input(e)
      vm.$emit('input', e)
    }

    if (status === 'preview') return renderValue(h, formatValue(props.value)) // 处理预览态

    return <this.ele.Input {...config}></this.ele.Input>
  }

  Select(h, props, vm) {
    let methods = deepCopy(props.on) || {}
    const value = formatValue(props.value) // 格式化值

    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    if (props.status === 'preview') return <this.ele.Select {...props} />

    return (
      <this.ele.Select {...props}>
        {props.options && props.options.map(option => (
          <this.ele.Option value={option.id} label={option.name || option.label || ''}>{option.name || option.label || ''}</this.ele.Option>
        ))}
      </this.ele.Select>
    )
  }

  Checkbox (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.ele.CheckboxGroup {...props} >
      {props.options && props.options.map(option => (
        <this.ele.Checkbox value={option} label={option}>{option}</this.ele.Checkbox>
      ))}
      </this.ele.CheckboxGroup>
    )
  }

  Radio (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.ele.RadioGroup {...props} >
      {props.options && props.options.map(option => (
        <this.ele.Radio key={option} label={option}>{option}</this.ele.Radio>
      ))}
      </this.ele.RadioGroup>
    )
  }

  Switch (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Switch {...props}></this.ele.Switch>
      )
  }

  Slider (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Slider {...props}></this.ele.Slider>
    )
  }

  DatePicker (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.DatePicker {...props}></this.ele.DatePicker>
    )
  }

  TimeSelect (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.TimeSelect {...props}></this.ele.TimeSelect>
    )
  }

  TimePicker (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.TimePicker {...props}></this.ele.TimePicker>
    )
  }

  InputNumber (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.InputNumber {...props}></this.ele.InputNumber>
    )
  }

  Rate (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Rate {...props}></this.ele.Rate>
    )
  }

  Cascader (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Cascader {...props}></this.ele.Cascader>
    )
  }

  Tree (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Tree {...props}></this.ele.Tree>
    )
  }

  Upload (h, props, vm) {
    if (!props.on) props.on = {}

    props.on['input'] = (e) => {
      vm.$emit('input', e)
    }

    return (
      <this.ele.Upload {...props}></this.ele.Upload>
    )
  }

  Custom (h, props, vm) {
    return props.render(h, props, vm)
  }

  format = () => {
    const result = [
      'Custom',
      'Input',
      'Select',
      'Checkbox',
      'Radio',
      // 'AutoComplete',
      'Switch',
      'Slider',
      'DatePicker',
      'TimeSelect',
      'TimePicker',
      'InputNumber',
      'Rate',
      'Cascader',
      'Tree',
      'Upload'
    ].reduce((ret, key) => {
      this[key].displayName = `wrapper(${key})`

      ret[key] = this[key]
      ret[key.toLocaleLowerCase()] = this[key]

      return ret
    }, {})

    return {
      ele: this.ele,
      ...result
    }
  }
}

function wrapper(Source) {
  const instance = new WrapperClass(Source)
  return instance.format()
}

export default wrapper
