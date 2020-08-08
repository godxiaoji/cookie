const path = require('path')

module.exports = {
  entry: './src/cookie.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cookie.js',
    library: 'cookie',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: 'production'
}
