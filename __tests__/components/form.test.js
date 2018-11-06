import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Element from 'element-ui'

import qform from '../../src/install.js'
import Form from '../../src/component/Form.vue'
import FormRows from '../../src/component/FormRows.vue'

const localVue = createLocalVue()
localVue.use(qform, {
  source: Element
})

describe('components/form basic function', () => {
  test('init', () => {
    let formInstance = shallowMount(Form, {
      localVue
    })
    expect(formInstance.vm.statusCenter).toEqual({})
  })

  test('set form reactive', () => {
    const formInstance = mount(
      {
        data: () => ({
          model: { job: '' }
        }),
        computed: {
          columns(h) {
            return [{ label: '任务名称', name: 'job', type: 'input' }]
          }
        },
        render(h) {
          return (
            <Form ref="form" model={this.model}>
              <iFormRows rows={this.columns} />
            </Form>
          )
        }
      },
      {
        localVue
      }
    )

    let formRef = formInstance.vm.$refs.form
    formInstance.vm.model.job = '444'
    expect(formInstance.find('.el-input input').element.value).toBe('444')

    formInstance.find('.el-input input').setValue('123')
    expect(formInstance.vm.model.job).toBe('123')
  })

  test('render component', () => {
    const formInstance = mount(
      {
        data: () => ({
          model: { job: '' },
          select: 1,
          radio: 1,
          switch: false,
          slider: 100,
          datepicker: ''
        }),
        computed: {
          columns(h) {
            return [
              { label: '任务名称', name: 'job', type: 'input' },
              {
                name: 'select',
                type: 'select',
                options: [{ value: 1, name: '否' }, { value: 2, name: '是' }]
              },
              {
                label: '是否昵称短信',
                name: 'isNickMsg',
                type: 'checkbox',
                options: [{ value: 1, name: 'a' }, { value: 2, name: 'b' }],
                on: {}
              },
              {
                label: 'radio',
                name: 'radio',
                type: 'radio',
                options: [{ value: 1, name: '否' }, { value: 2, name: '是' }]
              },
              { label: 'slider', name: 'slider', type: 'slider' },
              { label: 'datepicker', name: 'datepicker', type: 'datepicker' },
              { label: 'timeselect', name: 'timeselect', type: 'timeselect' },
              { label: 'timepicker', name: 'timepicker', type: 'timepicker' },
              {
                label: 'inputnumber',
                name: 'inputnumber',
                type: 'inputnumber'
              },
              { label: 'rate', name: 'rate', type: 'rate' }
            ]
          }
        },
        render(h) {
          return (
            <Form ref="form" model={this.model}>
              <iFormRows rows={this.columns} />
            </Form>
          )
        }
      },
      {
        localVue
      }
    )

    expect(formInstance.findAll('.el-form-item').length).toBe(10)
  })
})
