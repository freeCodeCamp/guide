---
title: Location Reload Method
---
## Location Reload Method

The ``Location.reload()`` method belongs within the [Location Object](./location-object). It's function is to reload the current page, exactly what the reload button does in your browser.

Yet, this method accepts an optional unique param. A ``Boolean`` that, when ``true``, forces the browser to reload the page's resources from the server. When the param is ``false`` or not specified, the browser may reload the page's resources from it's own cache.

#### Examples

```
// Reload the current resources from the server
window.location.reload(true);

// Reload the current resources from the browser's cache
window.location.reload();
```


#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Location/reload' target='_blank' rel='nofollow'>MDN - Location.reload()</a>

<a href='https://www.w3schools.com/jsref/met_loc_reload.asp' target='_blank' rel='nofollow'>W3C - Location reload() Method</a>
