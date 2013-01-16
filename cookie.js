/**
 * @Name    cookie.js
 * @Author  linyongji
 * @Version 1.0.0
 */
var cookie = function(name, value, options) {
    if(typeof name === "undefined") return null;
    // get
    if(typeof value === "undefined") {
        var cookieValue = null;
        if (document.cookie && document.cookie != "") {
            var cookies = document.cookie.split("; ");
            for (var i = 0; i < cookies.length; i++) {
                if(cookies[i].indexOf(name+"=") === 0) {
                    cookieValue = cookies[i].substr(name.length+1);
                    break;
                }
            }
        }
        return cookieValue;
    }
    // set
    options = options || {};
    // delete
    if (value === null) {
        value = "";
        options.expires = -1;
    }
    var expires = "";
    if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires == "number") {
            date = new Date();
            date.setTime(date.getTime() + options.expires * 1000);
        } else {
            date = options.expires;
        }
        expires = "; expires=" + date.toUTCString();
    }
    var path = options.path ? "; path=" + options.path : "";
    var domain = options.domain ? "; domain=" + options.domain : "";
    var secure = options.secure ? "; secure" : "";
    var ret = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("");
    document.cookie = ret;
    return ret;
}