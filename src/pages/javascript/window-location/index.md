
<h1>Window Location</h1>


<h3>About:</h3><br>
Location is an property on the Window object which itself is an object.
For example, if you open the console and type window.location it will return you a Location object.

`var location = window.location;
console.log(location);
=> Location{href:...,origin:..,protocol:..}`

So the location contains the Location object now.
The Location object contains many properties. Some of them are href, host, hostname, protocol etc.<br><br>

<h3>Some properties and methods of the object are as below: </h3> 

**href:**<br>
This property contains the current url you are on.
You can access it as below:

`var myCurrentUrl = window.location.href;
console.log(myCurrentUrl);
=> "https://github.com/freeCodeCamp/guides/edit/master/src/pages/javascript/window-location/index.md"`

****host:**<br>
This property contains the information of the host. For example if you check the host of above url it would be github.com.

`var myCurrentHost = window.location.host;
console.log(myCurrentHost);
=> "github.com"`

**protocol:**<br>
It gives us information about what protocol current url is using.

`var myCurrentProtocol = window.location.protocol;
console.log(myCurrentProtocol);
=> "https:"`

**Usage:**<br>
So generally you can use this Object and it's properties for creating a router or getting information about the current URL
in your project.

**reload():**<br>
One of the important method on this property is the reload(). You can force reload a page using this method.
To do this you need to pass a boolean value.
eg: `window.location.reload(true);`
This will reload the current page.



