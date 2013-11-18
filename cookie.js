/**
 * cookie.js
 * @Author  Travis(LinYongji)
 * @Contact http://travisup.com/
 * @Version 1.0.2
 * @date    2013-10-25
 */
var cookie = function( name, value, options ) {
    var i, len,
        cookies, ret, date,
        expires, path, secure;
    
    // 没传入参数返回，不开放获取全部cookie
    if ( name == null ) {
        return ret;
    }
    // 读取cookie
    if ( typeof value === "undefined" ) {
        if ( document.cookie && document.cookie != "" ) {
            cookies = document.cookie.split("; ");
            for ( i = 0, len = cookies.length; i < len; i++ ) {
                if ( cookies[i].indexOf( name + "=" ) === 0 ) {
                    ret = decodeURIComponent( cookies[i].substr( name.length + 1 ) );
                    break;
                }
            }
        }
        // 没找到返回undefined
        return ret;
    }
    // 设置cookie
    options = options || {};
    // 设置为删除cookie
    if ( value === null ) {
        value = "";
        options.expires = -1;
    }
    // 设置过期时间(支持传入秒和Date类型)
    expires = "";
    if ( options.expires && ( typeof options.expires === "number" || options.expires.toUTCString ) ) {
        if ( typeof options.expires === "number" ) {
            date = new Date();
            date.setTime( date.getTime() + options.expires * 1000 );
        } else {
            date = options.expires;
        }
        expires = "; expires=" + date.toUTCString();
    }
    // 设置域，安全性等
    path = options.path ? "; path=" + options.path : "";
    domain = options.domain ? "; domain=" + options.domain : "";
    secure = options.secure ? "; secure" : "";
    // 写入cookie
    ret = [ name, "=", encodeURIComponent( value ), expires, path, domain, secure ].join("");
    document.cookie = ret;
    return ret;
};