---
title: Location Reload Method
---
## Location Reload Method

JavaScript `Location.reload()` method provides means to reload the page at current URL. 

The syntax is the following: 

`object.reload(forcedReload);`, where `forceReload` is an optional parameter.

To simply reload the page, you can input `window.location` as object.

Optional parameters `force reload` is a boolean value, which if set to:

*True* reload the page from the server (e.g. does not store the data cached by the browser):
```
window.location.reload(true);
```
*False* reloads the page using the version of the page cached by the browser.
```
window.location.reload(false);
```
*False* is the default parameter, so if left blank, `object.reload()` reloads the page using the broswer's cached data, i.e. is identical to using the method as `window.location.reload(false)`.

To create the effect of browser-provided "Refresh"-option, you may want to create HTML-button and:

a) attach `Location.reload()` to the HTML button-markup, like this:

```
<input type="button" value="Refresh Button" onClick="window.location.reload()">

```
b) assign on-click event to the button with the function that uses the method, where the button looks similar to 

```
<button type="button" onClick="reloadThePage()">Refresh!</button>

```
```
<script>
function reloadThePage(){
    window.location.reload();
} 
</script>
```




<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


