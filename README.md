# cookie

简单的 cookie 操作插件，可以轻松的读取和设置 cookie 。

## Usage

### CDN

```js
<script src="https://cdn.jsdelivr.net/npm/@godxiaoji/cookie@1.2.1/dist/cookie.js"></script>
```

### NPM

```sh
npm i @godxiaoji/cookie -S
```

在 module 中引入

```js
import cookie from '@godxiaoji/cookie'
```

## Options

读取一个 cookie 值，如果不存在则返回 undefined

```js
cookie('the_cookie')
```

设置一个 cookie 值

```js
cookie('the_cookie', 'the_value')
```

设置一个 cookie 值，并设置 1 小时后过期（以秒 s 为单位）

```js
cookie('the_cookie', 'the_value', { expires: 3600 })
```

设置一个 cookie 值，并设置过期时间、路径、domain 和安全性

```js
cookie('the_cookie', 'the_value', {
  expires: 3600,
  path: '/',
  domain: 'xxx.com',
  secure: true
})
```

删除一个 cookie

```js
cookie('the_cookie', null)
```

## Author

[Travis](https://github.com/godxiaoji/cookie)
