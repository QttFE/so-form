import { shallowMount, createLocalVue, mount, config } from '@vue/test-utils'
import Element from 'element-ui'
import qform from '../../src/install.js'
import Form from '../../src/component/Form.vue'
import FormRows from '../../src/component/FormRows.vue'
import { doesNotReject } from 'assert';

config.stubs.transition = false
const localVue = createLocalVue()
localVue.use(qform, {
  source: Element
})

describe('components/form basic function', () => {
  let formInstance

  beforeEach(() => {
    formInstance = mount(
      {
        data: () => ({
          model: {
            cascader: [],
            checkbox: [1],
            job: '',
            jobWhen: '',
            select: 1,
            radio: 1,
            switch: false,
            slider: 100,
            datepicker: ''
          },
          when: false
        }),
        computed: {
          columns(h) {
            return [
              { label: 'input', name: 'job', type: 'input', slots: { label: (h) => (<span style="color: gray">落地页个性化 by render</span>) } },
              { label: 'whenRender', name: 'jobWhen', type: 'input', when: this.when },
              { label: 'textarea', name: 'textarea', type: 'textarea', top: (h) => (<span>top</span>), suffix: 'suffix', prefix: 'prefix', bottom: 'bottom' },
              {
                name: 'select',
                type: 'select',
                options: [{ value: 1, name: '否' }, { value: 2, name: '是' }]
              },
              {
                label: '是否昵称短信',
                name: 'checkbox',
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
              { label: 'upload', name: 'upload', type: 'upload', props: {action: 'https://jsonplaceholder.typicode.com/posts/', slots: {default: (h) => <button>123</button> }} },
              // { label: 'tree', name: 'tree', type: 'tree', props: {data: []} },
              // { label: 'cascader', name: 'cascader', type: 'cascader', props: {options: []} },
              { label: 'switch', name: 'switch', type: 'switch' },
              { label: 'datepicker', name: 'datepicker', type: 'datepicker' },
              { label: 'timeselect', name: 'timeselect', type: 'timeselect' },
              { label: 'timepicker', name: 'timepicker', type: 'timepicker' },
              {
                label: 'inputnumber',
                name: 'inputnumber',
                type: 'inputnumber'
              },
              { label: 'rate', name: 'rate', type: 'rate' },
              { label: 'cu', name: 'custom', type: 'custom', render (h) {
                return (
                  <span>自定义内容</span>
                )
              }},
            ]
          }
        },
        render(h) {
          return (
            <Form ref="form" model={this.model}>
              <FormRows rows={this.columns} />
            </Form>
          )
        }
      },
      {
        localVue
      }
    )
  })

  test('init', () => {
    let formRef = formInstance.vm.$refs.form
    expect(formRef).toBeDefined()
  })

  test('set form reactive', () => {
    let formRef = formInstance.vm.$refs.form
    formInstance.vm.model.job = '444'
    expect(formInstance.find('.el-input input').element.value).toBe('444')

    formInstance.find('.el-input input').setValue('123')
    expect(formInstance.vm.model.job).toBe('123')
  })

  test('render component', () => {
    // expect(formInstance.findAll('.el-form-item').length).toBe(13)
  })

  test('getStatus', () => {
    let formRef = formInstance.vm.$refs.form
    expect(formRef.getStatus('job')).toBe('edit')
  })

  test('setStatus', () => {
    let formRef = formInstance.vm.$refs.form
    formRef.setStatus('job', 'preview')
    formInstance.vm.model.job = '444'
    expect(formRef.getStatus('job')).toBe('preview')

    expect(formInstance.find('.el-form-item[name="job"] .formm-wrapped_div').text()).toBe('444')
  })

  test('getGlobalStatus', () => {
    let formRef = formInstance.vm.$refs.form
    expect(formRef.getGlobalStatus()).toEqual(formRef.statusCenter)
  })

  test('setGlobalStatus', () => {
    let formRef = formInstance.vm.$refs.form

    formRef.setGlobalStatus('preview')
    Object.values(formRef.getGlobalStatus()).forEach((v) => {
      expect(v).toBe('preview')
    })

    formRef.setGlobalStatus('edit')
    Object.values(formRef.getGlobalStatus()).forEach((v) => {
      expect(v).toBe('edit')
    })
  })

  test('render label', () => {
    expect(formInstance.find('.el-form-item[name="job"] label').text()).toBe('落地页个性化 by render')
  })

  test('props when render', (done) => {
    jest.useRealTimers()

    expect(formInstance.findAll('.el-form-item[name="jobWhen"]').length).toBe(0)
    let formRef = formInstance.vm.$refs.form
    formRef.when = true
    formInstance.vm.$forceUpdate()

    setTimeout(() => {
      expect(formInstance.find('.el-form-item[name="jobWhen"]')).toBeDefined()
      done()
    }, 0)
  })

  test('render slot', () => {
    let textArr = formInstance.findAll('.el-form-item[name="textarea"] .el-form-item__content > span').wrappers.map(v => v.text())
    expect(textArr.some(v => v === 'top')).toBeTruthy()
    expect(textArr.some(v => v === 'bottom')).toBeTruthy()

    let textArr2 = formInstance.findAll('.el-form-item[name="textarea"] .formm-wrapped_flex > span').wrappers.map(v => v.text())
    expect(textArr2.some(v => v === 'suffix')).toBeTruthy()
    expect(textArr2.some(v => v === 'prefix')).toBeTruthy()
  })
})
