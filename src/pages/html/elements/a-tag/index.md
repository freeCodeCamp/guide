---
title: A Tag
---
## A Tag

The A tag is the HTML tag used to insert a link into a webpage. Consider the following code:
```html
<a href="http://www.google.com">Google</a>
```

The 'a' is called the anchor element in HTML.

The href defines the web address being linked to. 

The website name is also provided before the closing tag. This is what the user clicks on to send them to the website. 

There are several different attributes one can use along with the 'a' tag. One of these is to set a _target="blank", which opens a new browser tab or window depending on the user environment. It would be used as follows:

```html
< href="http://www.google.com" target="blank">Google</a>
```

One can also link to another section of the same webpage with the use of an HTML ID tag, like so:

```
<a href="#section">Section</a>
```

One could also make an image a clickable link by nesting the image within the 'a' element like so:

```
< href="http://www.google.com" target="blank">
  <img src="imagesource" alt="image">
</a>
```

#### More Information:
For more information on the A tag and it's attributes, see: 

[MDN HTML A-Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

