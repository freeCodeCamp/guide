---
title: HTML5 Web Storage
---
## HTML5 Web Storage

Web storage allows web applications to store up to 5MB of information in browser storage per origin (per domain and protocol).

### Types of Web Storage

There are two objects for storing data on the client.

* window.localStorage: stores data with no expiration date and lives until removed.

```javascript
// Store Item
localStorage.setItem("foo", "bar");
// Get Item
localStorage.getItem("foo");
```

* window.sessionStorage: stores data for one sessions and is lost when the browser tab is closed.

```javascript
// Store Item
sessionStorage.setItem("foo", "bar");
// Get Item
sessionStorage.getItem("foo");
```


