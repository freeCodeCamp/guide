---
title: Location Reload Method
---
## Location Reload Method

The "Location" reload method is a method on the "Location" object. By default it is implemented on the `window` object. It can be used to reload your current web page.

It takes an optional boolean parameter. When set to `true`, the page will reload from the server. When unset, or set to `false`, the page may be reloaded from cache, depending on the browser. 

### Example:

```javascript
// Reload the current resources from the server
window.location.reload(true);

// Reload the current resources from the browser's cache
window.location.reload();
```


This will reload the page at the current URL from the server.

#### More Information:
* [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
* [W3 Schools](https://www.w3schools.com/jsref/met_loc_reload.asp)
