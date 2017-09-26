---
title: jQuery Ajax Get Method
---
## jQuery Ajax Get Method

Load data from server usign HTTP GET method.

`$.get( url [, data ] [, callback ] [, dataType ] )`

```
Params

url
Type: string
URL to which the request is sent.

data
Type: object or string
A object or string that is sent to the server with the request.

callback
Type: Function(data, status, xhr)
A callback function that is executed if the request succeeds.

dataType
Type: string
The type of data expected from the server. Default: intelligent guess (xml, json, script, text, html).
```

#### Simple ajax function ####

```
$.ajax({
  url: url,
  data: data,
  dataType: dataType,
  function(data){
  }
});
```
