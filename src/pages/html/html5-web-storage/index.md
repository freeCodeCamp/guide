---
title: HTML5 Web Storage
---
## HTML5 Web Storage

Web storage allows web applications to store up to 5MB of information in browser storage per origin (per domain and protocol).

### Types of Web Storage

There are two objects for storing data on the client:

`window.localStorage`: stores data with no expiration date and lives until removed.

```javascript
// Store Item
localStorage.setItem("foo", "bar");

// Get Item
localStorage.getItem("foo"); //returns "bar"
```

`window.sessionStorage`: stores data for one session, where data is lost when the browser / browser tab is closed.

```javascript
// Store Item
sessionStorage.setItem("foo", "bar");

// Get Item
sessionStorage.getItem("foo"); //returns "bar"
```

### Private Browsing / Incognito modes
In private browsing or igcognito modes, most browsers's storage APIs are still available and seemingly fully functional, however all stored data is wiped after the browser is closed. 

In summary, for fully functional web app testing, do remember to test on all browsers with/without private browsing.

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target='_blank' rel='nofollow'>MDN</a>
