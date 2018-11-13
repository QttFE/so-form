import wrapperElement from '../../src/wrapper/element.js'
import Element from 'element-ui'

describe('element ui wrapper', () => {
  let wrappedComponent = wrapperElement(Element)
  test('wrapper', () => {
    expect(typeof wrappedComponent.input).toBe('function')
    expect(wrappedComponent.source).toBe(Element)
  })
})
