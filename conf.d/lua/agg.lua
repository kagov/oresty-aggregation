cjson = require("cjson")
local res1,res2 = ngx.location.capture_multi{{"/service-one"},{"/service-two"}}

ngx.status = ngx.HTTP_OK
ngx.header.content_type = "application/json; charset=utf-8"
local status1 = cjson.decode(res1.body)
local status2 = cjson.decode(res2.body)
ngx.say(cjson.encode({service1=status1.status,service2=status2.status}))
return ngx.exit(ngx.HTTP_OK)
