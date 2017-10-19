---
title: Window Location
---
## Window Location

The `window.location` object can be used to get the current page address (URL) and to redirect the browser to a new page.

### Some uses of window.location
```
window.location.href      //returns the href (URL) of the current page
window.location.hostname  //returns the domain name of the web host
window.location.pathname  //returns the path and filename of the current page
window.location.protocol  //returns the web protocol used (http: or https:)
window.location.port      //returns the number of the internet host port (of the current page).
window.location.assign    //loads a new document
```
### Some exmaples
#### window.location.href
```
document.getElementById(someIdentifier).innerHTML = "Page location is " + window.location.href;

//result for example
Page location is https://www.freecodecamp.org/challenges/selecting-from-many-options-with-switch-statements
```
#### window.location.hostname
```
document.getElementById(someIdentifier).innerHTML = "Page hostname is " + window.location.hostname;

//result for example
Page hostname is www.freecodecamp.org
```
#### window.location.pathname
```
document.getElementById(someIdentifier).innerHTML = "Page path is " + window.location.pathname;

//result for example
Page path is /challenges/selecting-from-many-options-with-switch-statements
```
#### window.location.protocol
```
document.getElementById(someIdentifier).innerHTML = "Page protocol is " + window.location.protocol;

//result for example
Page protocol is https:
```
#### window.location.port
```
document.getElementById(someIdentifier).innerHTML = "Page port is " + window.location.port;

//result for example
Page port is
//This is because most browsers will not display default port numbers (80 for http and 443 for https)
```
#### window.location.assign
```
<html>
  <head>
  <script>
    function newDoc() {
        window.location.assign("https://www.freecodecamp.org")
    }
  </script>
  </head>
  <body>

    <input type="button" value="Load FreeCodeCamp WebSite" onclick="newDoc()">

  </body>
</html>
```
