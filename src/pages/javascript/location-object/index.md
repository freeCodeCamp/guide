---
title: Location Object
---
## Location Object

The "Location" object provides an API (Application Programming Interface) which enables retrieval of a URL, setting of a URL, or access to parts of a URL. It is already implemented for you by default on the Window and Document objects. They and are accessible by:

```javascript
    console.log(window.location);
    // > https://guide.freecodecamp.org/javascript/location-object
    console.log(document.location);
    // > https://guide.freecodecamp.org/javascript/location-object
```

You can also set the Location object of an HTML `<a>` element or an HTML `<area>` element programmatically with JavaScript.

```javascript
    var anchor = document.createElement('a');
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object";
```

Once you have an object with a URL set (including the window), the Location API allows you to access parts of the URL.

```javascript
    console.log(anchor.protocol); 
    // > https:
    console.log(anchor.host);
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080)
```
    
Other properties of "Location" you can access are:

- `anchor.hostname` - *guide.freecodecamp.org*
- `anchor.port` - *8080*
- `anchor.pathname` - */javascript/location-object*
- `anchor.origin` - *https://developer.mozilla.org*

If your URL contains parameters or hashes you can access them like so:

```javascript
    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties
    console.log(window.location.search);
    // > "?param=location"
    console.log(document.location.hash);
    // > "#other-properties"
```

For more information on the Location API: [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)


