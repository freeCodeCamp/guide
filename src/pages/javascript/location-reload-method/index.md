---
title: Location Reload Method
---

## Location Reload Method

The `location.reload()` method is used to reload the current document.  

## Syntax

    location.reload(forcedReload);  

## Parameters

**forcedReload** `boolean` 

Optional. When it is `true`, causes the page to always be reloaded from the server. If it is `false` or not specified, the browser may reload the page from its cache.

Besides caching behaviour the `forcedReload` flag also impacts how some browsers handle the scroll position: ordinary reload tries to restore the scroll position after reloading the page, while in forced mode (when parameter is set to `true`) the new DOM gets loaded with `scrollTop == 0`.
    
#### More Information:
[W3C](https://www.w3schools.com/jsref/met_loc_reload.asp) - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)


