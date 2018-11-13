import wrapperElement from '../wrapper/element.js'
import wrapperIview from '../wrapper/iview.js'

// ui框架配置
const configEnum = {
  iview: {
    injectFormName: 'form',
    wrapper: wrapperIview
  },
  element: {
    injectFormName: 'elForm',
    wrapper: wrapperElement
  },
}

let adaptationConfig

/**
 * 设置config
 *
 * @export
 * @param {string} [type='element']
 * @returns
 */
export function setConfig(type = 'element') {
  adaptationConfig = configEnum[type] || configEnum['element']

  return getConfig()
}

/**
 * 获取config
 *
 * @export
 * @returns
 */
export function getConfig() {
  return adaptationConfig
}