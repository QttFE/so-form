import wrapperElement from '../../src/wrapper/element.jsx'
import Element from 'element-ui'

describe('element ui wrapper', () => {
  let wrappedComponent = wrapperElement(Element)
  test('wrapper', () => {
    expect(typeof wrappedComponent.input).toBe('function')
    expect(wrappedComponent.ele).toBe(Element)
  })
})
