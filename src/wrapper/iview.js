// eslint-disable-next-line
import { formatValue, renderValue, renderOption } from './util'
import omit from 'object.omit'

/**
 * iview 封装组件
 *
 * @class WrapperClass
 */
class WrapperClass {
  constructor(source) {
    this.source = source
  }

  Input = (h, props, vm) => {
    const { status } = props

    if (status === 'preview') return renderValue(h, formatValue(props.props.value)) // 处理预览态

    return <this.source.Input {...props}></this.source.Input>
  }

  Textarea = (h, props, vm) => {
    const { status } = props
    props.props.type = 'textarea'

    if (status === 'preview') return renderValue(h, formatValue(props.props.value)) // 处理预览态

    return <this.source.Input {...props}></this.source.Input>
  }

  Select(h, props, vm) {
    if (props.status === 'preview') return <this.source.Select disabled value={props.props.value} />

    return (
      <this.source.Select {...props}>
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
            <this.source.Option {...attr}>
              {option.name || option.label || ''}
            </this.source.Option>
          )}
        )}
      </this.source.Select>
    )
  }

  Checkbox (h, props, vm) {
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.source.CheckboxGroup {...props} >
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
            <this.source.Checkbox {...attr}>
              {option.name || option.label || ''}
            </this.source.Checkbox>
          )}
        )}
      </this.source.CheckboxGroup>
    )
  }

  Radio (h, props, vm) {
    if (props.status === 'preview') return renderOption(h, props)

    return (
      <this.source.RadioGroup {...props} >
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
            <this.source.Radio {...attr}>
              {option.name || option.label || ''}
            </this.source.Radio>
          )}
        )}
      </this.source.RadioGroup>
    )
  }

  Switch (h, props, vm) {
    if (props.status === 'preview') return renderValue(h, props.props.value)

    return (
      <this.source.Switch {...props}></this.source.Switch>
      )
  }

  Slider (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.Slider {...props}></this.source.Slider>
    )
  }

  DatePicker (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.DatePicker {...props}></this.source.DatePicker>
    )
  }

  TimeSelect (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.TimeSelect {...props}></this.source.TimeSelect>
    )
  }

  TimePicker (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.TimePicker {...props}></this.source.TimePicker>
    )
  }

  InputNumber (h, props, vm) {
    if (props.status === 'preview') return renderValue(h, formatValue(props.props.value))

    return (
      <this.source.InputNumber {...props}></this.source.InputNumber>
    )
  }

  Rate (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.Rate {...props}></this.source.Rate>
    )
  }

  Cascader (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.Cascader {...props}></this.source.Cascader>
    )
  }

  Tree (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true

    return (
      <this.source.Tree {...props}></this.source.Tree>
    )
  }

  Upload (h, props, vm) {
    if (props.status === 'preview') props.props.disabled = true


    return (
      <this.source.Upload {...props}>
        {props.props.slots && Object.keys(props.props.slots).map(slot => (
          <div>
            {props.props.slots[slot](h)}
          </div>
        ))}
      </this.source.Upload>
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
      source: this.source,
      ...result
    }
  }
}

function wrapper(Source) {
  const instance = new WrapperClass(Source)
  return instance.format()
}

export default wrapper
