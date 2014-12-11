/**
 * cookie.js
 * @Author  Travis
 * @Contact https://github.com/godxiaoji/cookie
 * @Version 1.0.3
 * @date    2014-12-11
 */
(function(undefined) {

    function cookie(name, value) {
        return name != null ?
            cookie[value === undefined ? "get" : "set"].apply(null, arguments) :
            undefined;
    }
    // 获取cookie
    cookie.get = function(name) {
        var ret, arr,
            i, len;

        if(document.cookie) {
            arr = document.cookie.split("; ");
            for(i = 0, len = arr.length; i < len; i++) {
                if(arr[i].indexOf(name + "=") === 0) {
                    ret = decodeURIComponent(arr[i].substr(name.length + 1));
                    break;
                }
            }
        }
        return ret;
    };
    // 设置cookie
    cookie.set = function(name, value, options) {
        var arr = [], date;
        options = options || {};

        // 配置过期时间
        if(value == null) {
            value = "";
            options.expires = -1;
        }
        if(typeof options.expires === "number") {
            date = new Date();
            date.setTime(date.getTime() + options.expires * 1000);
        } else if(options.expires instanceof Date) {
            date = options.expires;
        }

        arr.push(name + "=" + encodeURIComponent(value));
        date && arr.push("expires=" + date.toUTCString());
        options.path && arr.push("path=" + options.path);
        options.domain && arr.push("domain=" + options.domain);
        options.secure && arr.push("secure");

        return document.cookie = arr.join("; ");
    };

    window.cookie = cookie;
})();