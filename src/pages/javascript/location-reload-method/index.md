---
title: Location Reload Method
---
## Location Reload Method
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The reload() method is used to reload the current document.
```
location.reload();
```
The reload() method does the same as the reload button in your browser.

By default, the reload() method reloads the page from the cache, but you can force it to reload the page from the server by setting the forceGet parameter to true: location.reload(true).

Besides caching behaviour the forceGet parameter also impacts how some browsers handle the scroll position: ordinary reload tries to restore the scroll position after reloading the page, while in forced mode (when parameter is set to true) the new DOM gets loaded with `scrollTop == 0`.

If the assignment can't happen because of a security violation, a `DOMException` of type `SECURITY_ERROR` is thrown. This happens if the origin of the script calling the method is different from the origin of the page originally described by the `Location` object, usually when the script is hosted on a different domain.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.w3schools.com/jsref/met_loc_reload.asp
https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
https://html.spec.whatwg.org/multipage/history.html#dom-location-reload

