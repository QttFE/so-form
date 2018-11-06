// eslint-disable-next-line
import { formatValue, deepCopy } from './util'
import omit from 'object.omit'

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

  return <span>{(typeof value === 'boolean') ? value.toString() : value}</span>
}

function renderOption (h, props) {
  let result = ''
  props.options && props.options.forEach(option => {
    if ((option.value || option.id) === props.props.value) result = option.name || option.label || ''
  })

  return <span>{result}</span>
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

    if (status === 'preview') return renderValue(h, formatValue(props.props.value)) // 处理预览态

    return <this.ele.Input {...props}></this.ele.Input>
  }

  Textarea = (h, props, vm) => {
    const { status } = props

    if (status === 'preview') return renderValue(h, formatValue(props.props.value)) // 处理预览态

    return <this.ele.Input {...props}></this.ele.Input>
  }

  Select(h, props, vm) {
    if (props.status === 'preview') return <this.ele.Select disabled value={props.props.value} />

    return (
      <this.ele.Select {...props}>
        {props.options && props.options.map(option => {
          let attr = {
            on: {
              ...(option.on || {})
            },
            props: {
              value: option.id || option.value,
              label: option.name || option.label || '',
              ...omit(option, ['id', 'value', 'name', 'label', 'on'])
            }
          }

          return (
            <this.ele.Option {...attr}>
              {option.name || option.label || ''}
            </this.ele.Option>
          )}
        )}
      </this.ele.Select>
    )
  }

  Checkbox (h, props, vm) {
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.ele.CheckboxGroup {...props} >
        {props.options && props.options.map(option => {
          let attr = {
            on: {
              ...(option.on || {})
            },
            props: {
              value: option.id || option.value,
              label: option.name || option.label || '',
              ...omit(option, ['id', 'value', 'name', 'label'])
            }
          }

          return (
            <this.ele.Checkbox {...attr}>
              {option.name || option.label || ''}
            </this.ele.Checkbox>
          )}
        )}
      </this.ele.CheckboxGroup>
    )
  }

  Radio (h, props, vm) {
    if (props.status === 'preview') return renderOption(h, props)

    return (
      <this.ele.RadioGroup {...props} >
        {props.options && props.options.map(option => {
          let attr = {
            on: {
              ...(option.on || {})
            },
            props: {
              label: option.id || option.value,
              ...omit(option, ['id', 'value', 'name', 'label'])
            }
          }

          return (
            <this.ele.Radio {...attr}>
              {option.name || option.label || ''}
            </this.ele.Radio>
          )}
        )}
      </this.ele.RadioGroup>
    )
  }

  Switch (h, props, vm) {

    if (props.status === 'preview') return renderValue(h, props.props.value)

    return (
      <this.ele.Switch {...props}></this.ele.Switch>
      )
  }

  Slider (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.Slider {...(props)}></this.ele.Slider>
    }

    return (
      <this.ele.Slider {...props}></this.ele.Slider>
    )
  }

  DatePicker (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.DatePicker {...props}></this.ele.DatePicker>
    }

    return (
      <this.ele.DatePicker {...props}></this.ele.DatePicker>
    )
  }

  TimeSelect (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.TimeSelect {...props}></this.ele.TimeSelect>
    }

    return (
      <this.ele.TimeSelect {...props}></this.ele.TimeSelect>
    )
  }

  TimePicker (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.TimePicker {...props}></this.ele.TimePicker>
    }

    return (
      <this.ele.TimePicker {...props}></this.ele.TimePicker>
    )
  }

  InputNumber (h, props, vm) {
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.ele.InputNumber {...props}></this.ele.InputNumber>
    )
  }

  Rate (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.Rate {...props}></this.ele.Rate>
    }

    return (
      <this.ele.Rate {...props}></this.ele.Rate>
    )
  }

  Cascader (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.Cascader {...props}></this.ele.Cascader>
    }

    return (
      <this.ele.Cascader {...props}></this.ele.Cascader>
    )
  }

  Tree (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.Tree {...props}></this.ele.Tree>
    }

    return (
      <this.ele.Tree {...props}></this.ele.Tree>
    )
  }

  Upload (h, props, vm) {
    if (props.status === 'preview') {
      props.props.disabled = true
      return <this.ele.Upload {...props}></this.ele.Upload>
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
      'Textarea',
      'Select',
      'Checkbox',
      'Radio',
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
