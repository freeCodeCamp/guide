---
title: CSS3 at Media Rule
---
## CSS3 at Media Rule


Media queries,implemented as `@media` rules in CSS are used to define and apply different CSS styles for different media types/devices.

Media queries may be used to query for several different parameters such as:

* width of viewport using `width` 
* height of viewport  using `height`
* color              using `color`
* resolution         using `resolution`

Media queries involve a [media type](https://en.wikipedia.org/wiki/Media_queries#Media_types)  and some conditional expressions for testing a device's capabilites,which evaluates to a boolean value.

Following are some examples of usages of media queries:

```CSS

@media screen and (max-width: 360px) {
    body {
        background-color: yellow;
    }
}
```

In the above example `screen` is [media-feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)  and `max-width: 360px` is the conditional expression which evaluates to true or false depending on the device screen width.

Several media queries can be combined by using `and` `only` etc. to form a complex media query
The function of the `or` logical operator can be realized by using comma spearated lists.

Some further examples of media queries:

```CSS

@media  screen 
  and (min-width: 360px) 
  and (max-width: 480px){
    body { font-size: 15px; }
}

@media screen, print {
  body {font-size: 20px; }
}

@media all and (min-width: 360px) and (max-width: 480px), (min-width: 720px) and (msx-width: 1200px){
  body {
    font-size:  18px ;
  }
}
```


Entire external stylesheets can be applied for different devices and conditions by using them with media queries in the following manner:

```CSS
<link rel='stylesheet' media='screen and (min-width: 360px) and (max-width: 480px)' href='css/small-font.css' />
```

Check browser compatibilty for different media queries and rules [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Browser_compatibility) or [here](http://cssmediaqueries.com/overview.html).

### Sources
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
* [cssmediaqueries](http://cssmediaqueries.com/what-are-css-media-queries.html)
* [css-tricks](https://css-tricks.com/css-media-queries/)
* [Wikipedia](https://en.wikipedia.org/wiki/Media_queries)
* [w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
