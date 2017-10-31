---
title: CSS3 Media Queries
---
## CSS3 Media Queries

The @media rule is used to make styles based on different screen sizes.

Media queries look at the device and check for things like:

* width and height of the viewport
* width and height of the device
* orientation (is the tablet/phone in landscape or portrait mode?)
* resolution

### Syntax

```
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```

### Example from Bootstrap Media Queries

```
    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) {

    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }

```

As you can see in the above example you can write CSS code based on certain screen dimensions.
 
You can also use a specific file for different sizes but is not recommended.
```
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

#### More Information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

[W3C](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)



