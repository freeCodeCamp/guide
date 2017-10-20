---
title: Location Reload Method
---
## Location Reload Method

The "Location" reload method is a method on the "Location" object. By default it is implemented on the `window` object. It can be used to reload your current web page.

```javascript
    window.location.reload();
```

By default this will reload your current web page. This allows the browser to pull from its cache for a faster load time. Usually loading your web page from cache is preferred, but there are occasions where the cached web page that you are loading is out of date. This can cause potential bugs within the web page. If you would like to hard reload your web page without using the browser cache, you can achieve it by passing an optional Boolean parameter like so:

```javascript
    window.location.reload(true);
```

For more information on `reload()`: [Location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
