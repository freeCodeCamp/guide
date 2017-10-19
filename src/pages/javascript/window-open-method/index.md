---
title: Window Open Method
---
## Window Open Method

The Window Open Method takes three possible arguments to load a specified window into a context (i.e. browser window/tab). The Window Open Method looks like this:

```javascript
var window = window.open(url, windowName, [windowFeatures]);
```

The window.open method takes three parameters:

 * url
   * The url parameter takes a string that represents a DOMString that points to a resource to be loaded. This can be any resource that is capable of loading in a browser, such as an HTML page, image or any other file type that is supported by the user's browser. The url parameter can be left empty (i.e. "") and a blank page will be opened.
 * windowName
   * The windowName takes a string and it gives the window a name that can be used later on. After giving a new window a name, you can use this windowName as the target attribute of <a> or <form> elements. The name cannot have whitespace. (Note: this is not the window's displayed title, but a variable that allows you to interact with the new window after you've created it)
 * [windowFeatures] 
   * The windowFeatures variable is an array of comma-separated values that correspond to a windows feature and their value (i.e. "name=value"). 

You can simply add a new blank window.

```javascript
var window = window.open("", "blankWindow");
```

You can open a new window that goes to a page.

```javascript
var window = window.open("http://www.github.com/", "github");
```

You can open a new window that goes to a page and style the new window.

```javascript
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
var window = window.open("http://www.github.com/", "github", windowFeatures);
```
You can use the current context of a window do manually do routing to other pages. For instance, if you start on http://www.github.com you run the following code in the console to bring yourself to freeCodeCamp's repo.

```javascript
//Go to www.github.com
var goToFreeCodeCampWindow = window.open("/freeCodeCamp/", "freeCodeCamp");
```

#### More Information:
https://developer.mozilla.org/en-US/docs/Web/API/Window/open


