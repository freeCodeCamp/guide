---
title: Window Location
---
## Window Location

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/window-location/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

### Basic Information:
Location is an property on the Window object which itself is an object.
For example, if you open the console and type window.location it will return you a Location object.

`var location = window.location;
console.log(location);
=> Location{href:...,origin:..,protocol:..}`

So the location contains the Location object now.
The Location object contains many properties. Some of them are href, host, hostname, protocol etc.

### Some properties and methods of the object are as below:

#### href:
This property contains the current url you are on.
You can access it as below:

`var myCurrentUrl = window.location.href;
console.log(myCurrentUrl);
=> "https://github.com/freeCodeCamp/guides/edit/master/src/pages/javascript/window-location/index.md"`

#### host:
This property contains the information of the host.
For example if you check the host of above url it would be github.com.

`var myCurrentHost = window.location.host;
console.log(myCurrentHost);
=> "github.com"`

#### protocol:
It gives us information about what protocol current url is using.

`var myCurrentProtocol = window.location.protocol;
console.log(myCurrentProtocol);
=> "https:"`

#### reload(boolean):
One of the important method on this property is the reload(). You can force reload a page using this method.
To do this you need to pass a boolean value.

eg: `window.location.reload(true);`
This will reload the current page.

### Usage:
So generally you can use this Object and it's properties for creating a router or getting information about the current URL in your project.
