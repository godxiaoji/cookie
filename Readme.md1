# cookie

简单的 cookie 操作插件，可以轻松的读取和设置 cookie

## Usage

### Script/CDN

    <script src="yourpath/cookie.js"></script>

### NPM(v1.1.0+)

```
npm i @godxiaoji/cookie -S
```

在 module 中引入

```
import cookie from '@godxiaoji/cookie'
```

或者

```
import {getCookie, setCookie, getAllCookies, removeCookie, clearAllCookies} from '@godxiaoji/cookie'
```

## Options

读取一个 cookie 值，如果不存在则返回 undefined

    cookie('the_cookie');

设置一个 cookie 值

    cookie('the_cookie', 'the_value');

设置一个 cookie 值，并设置 1 小时后过期（以秒 s 为单位）

    cookie('the_cookie', 'the_value', {expires: 3600});

设置一个 cookie 值，并设置过期时间、路径、domain 和安全性

    cookie('the_cookie', 'the_value', {expires: 3600, path: '/', domain: 'xxx.com', secure: true});

删除一个 cookie

    cookie('the_cookie', null);

## Author

[Travis](https://github.com/godxiaoji/cookie)
