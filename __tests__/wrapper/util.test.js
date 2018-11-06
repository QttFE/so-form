import { formatValue, parsePath, checkWhen, deepCopy } from '../../src/wrapper/util'

describe('test wrapper functions', () => {
  test('formatValue', () => {
    expect(formatValue(1)).toBe(1)
    expect(formatValue(null)).toBe(null)
    expect(formatValue(undefined)).toBe(null)
  })

  test('parsePath', () => {
    let testObj = {a: { b: 2 }}

    expect(parsePath(testObj, 'a.b')).toBe(2)
    expect(parsePath(testObj, 'a.c')).toBe(undefined)
    expect(parsePath(testObj)).toBe(undefined)
    expect(parsePath(testObj, '&')).toBe(undefined)
  })

  test('checkWhen', () => {
    const testFn = () => false

    expect(checkWhen(1)).toBe(undefined)
    expect(checkWhen(false)).toBe(false)
    expect(checkWhen(testFn)).toBe(false)
  })

  test('deepCopy', () => {
    let testObj = {a: { b: 2 }}
    let testArr = ['a', {a: 123}, [1, 23, 4]]

    expect(deepCopy(testObj)).toEqual(testObj)
    expect(deepCopy(testArr)).not.toBe(testArr)
  })
})
