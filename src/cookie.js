/**
 * cookie.js
 * @Author  Travis
 * @Contact https://github.com/godxiaoji/cookie
 * @Version 1.1.0
 * @date    2020-08-08
 */

const ParamError = require('./param-error')

/**
 * 获取所有的cookie
 */
function getAllCookies() {
  const ret = {}

  if (document.cookie) {
    document.cookie.split('; ').forEach(function (item) {
      const [name, value] = item.split('=')

      ret[name] = decodeURIComponent(value)
    })
  }
  return ret
}

/**
 * 获取指定cookie
 * @param {String} name cookie名称
 */
function getCookie(name) {
  if (typeof name !== 'string') {
    throw new ParamError('name', name, String)
  }

  return getAllCookies()[name]
}

/**
 * 设置指定cookie
 * @param {String} name cookie名称
 * @param {any} value cookie内容，null为删除
 * @param {Object} options {expires, path, domain, secure}
 */
function setCookie(name, value, options) {
  if (typeof name !== 'string') {
    throw new ParamError('name', name, String)
  }

  const arr = []
  let date

  if (typeof options !== 'object') {
    options = {}
  }

  // 配置过期时间
  if (value == null) {
    value = ''
    options.expires = -1
  }

  if (typeof options.expires === 'number') {
    date = new Date()
    date.setTime(date.getTime() + options.expires * 1000)
  } else if (options.expires instanceof Date) {
    date = options.expires
  }

  arr.push(name + '=' + encodeURIComponent(value))
  date && arr.push('expires=' + date.toUTCString())
  options.path && arr.push('path=' + options.path)
  options.domain && arr.push('domain=' + options.domain)
  options.secure && arr.push('secure')

  return (document.cookie = arr.join('; '))
}

/**
 * 删除指定cookie
 * @param {String} name cookie名称
 * @param {Object} options {expires, path, domain, secure}
 */
function removeCookie(name, options) {
  return setCookie(name, null, options)
}

/**
 * 清空所有cookie
 * @param {Object} options {expires, path, domain, secure}
 */
function clearAllCookies(options) {
  const ret = []
  const cookies = getAllCookies()

  for (const k in cookies) {
    if (Object.prototype.hasOwnProperty.call(cookies, k)) {
      ret.push(setCookie(k, null, options))
    }
  }

  return ret
}

/**
 * 操作cookie
 * @param {String} name cookie名称
 * @param {any} value cookie内容，null为删除
 * @param {Object} options {expires, path, domain, secure}
 */
function cookie(name, value, options) {
  if (typeof value === 'undefined') {
    return getCookie(name)
  } else {
    return setCookie(name, value, options)
  }
}

cookie.setCookie = setCookie
cookie.getCookie = getCookie
cookie.getAllCookies = getAllCookies
cookie.removeCookie = removeCookie
cookie.clearAllCookies = clearAllCookies

module.exports = cookie
