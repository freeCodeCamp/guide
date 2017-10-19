---
title: Location Reload Method
---
## Location Reload Method

### Definition and Usage
The `reload()` method is used to reload the current document.
The `reload()` method does the same as the reload button in your browser.

By default, the reload() method reloads the page from the cache, but you can force it to reload the page from the server by setting the forceGet parameter to true: location.reload(true).

### Syntax
```
location.reload(forceGet)
```
### Parameters
```
Parameter   Type      Description                                                 Return
forceGet    Boolean   false - Default. Reloads the current page from the cache    No return value
                      true - Reloads the current page from the server             No return value
```
### Example
```
location.reload();
```
