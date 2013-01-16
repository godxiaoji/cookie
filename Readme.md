# cookie

简单的cookie操作插件，可以轻松的读取和设置cookie

## Usage
    
    <script src="yourpath/cookie.js"></script>
    
## Options
    
读取一个cookie值，如果不存在则返回null（鉴于安全原因不提供获取全部cookie的方法）

    cookie('the_cookie');
    
设置一个cookie值

    cookie('the_cookie', 'the_value');
    
设置一个cookie值，并设置1小时后过期（以秒s为单位）
    
    cookie('the_cookie', 'the_value', {expires: 3600});
    
设置一个cookie值，并设置过期时间、路径、domain和安全性
    
    cookie('the_cookie', 'the_value', {expires: 3600, path: '/', domain: 'xxx.com', secure: true});

删除一个cookie
    
    cookie('the_cookie', null);

### Author

[Travis](http://travisup.com/)
