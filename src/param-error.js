/**
 * 错误捕捉类
 */
class ParamError extends Error {
  /**
   * 构造
   * @param {String} key
   * @param {Object} value
   * @param {Function} type
   */
  constructor(key, value, type) {
    super(`${key} should be ${typeof type()} instead of ${typeof value}`)

    this.name = 'Invalid param'
  }

  getMessage() {
    return this.message
  }
}

module.exports = ParamError
