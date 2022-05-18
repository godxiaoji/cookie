interface Options {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
}

/**
 * 获取所有的cookie
 */
function getAllCookies() {
  const ret: Record<string, string> = {}

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
function getCookie(name: string) {
  return getAllCookies()[name]
}

/**
 * 设置指定cookie
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
function setCookie(
  name: string,
  value: number | string | null,
  options?: Options
) {
  return (document.cookie = serialize(name, value, options))
}

/**
 * 序列化的cookie指令
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
function serialize(
  name: string,
  value: number | string | null,
  options?: Options
) {
  const arr = []
  let date

  if (!options || typeof options !== 'object') {
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

  arr.push(name + '=' + encodeURIComponent(value.toString()))
  date && arr.push('expires=' + date.toUTCString())
  options.path && arr.push('path=' + options.path)
  options.domain && arr.push('domain=' + options.domain)
  options.secure && arr.push('secure')

  return arr.join('; ')
}

/**
 * 删除指定cookie
 * @param name cookie名称
 * @param options {expires, path, domain, secure}
 */
function removeCookie(name: string, options?: Options) {
  return setCookie(name, null, options)
}

/**
 * 操作cookie
 * @param name cookie名称
 * @param value cookie内容，null为删除
 * @param options {expires, path, domain, secure}
 */
function cookie(
  name: string,
  value?: number | string | null,
  options?: Options
) {
  if (typeof value === 'undefined') {
    return getCookie(name)
  } else {
    return setCookie(name, value, options)
  }
}

cookie.set = setCookie
cookie.get = getCookie
cookie.getAll = getAllCookies
cookie.remove = removeCookie
cookie.serialize = serialize

export default cookie
