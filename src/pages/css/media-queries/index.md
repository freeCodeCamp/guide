---
title: Media Queries
---

## Media Queries

Media queries are used to alter the rendering of a HTML document based on the viewing device's type (e.g. print, screen, etc.) and/or capabilities (e.g. orientation, resolution, etc.), and are a key facet of [Responsive Web Design](https://guide.freecodecamp.org/html/responsive-web-design/).

### Walkthrough:

[Progressive enhancement](https://guide.freecodecamp.org/css/progressive-enhancement/) is the process of initially creating a mobile design, and then gradually introducing changes as the viewing device increases in capability and/or resolution. A common usage scenario is having images stacked vertically on mobile devices with a portrait orientation, and stacked horizontally on mobile devices with a landscape orientation.

The contents of the HTML document are as follows:
```html
<div class="container">
  <div class="photo">
    <img src="photo.png" />
  </div>
  <div class="photo">
    <img src="photo.png" />
  </div>
  <div class="photo">
    <img src="photo.png" />
  </div>
  <div class="photo">
    <img src="photo.png" />
  </div>
</div>
```

The initial contents of the CSS document are as follows:
```css
* {
  margin: 0;
  padding: 0;
}

body {
  background: #eee;
}

img {
  display: block;
  width: 100%;
}

.container {
  padding: 1.25rem; /* 20px */
}

.photo:not(:last-child) {
  margin-bottom: 1.25rem; /* 20px */
}
```

As this point, the relevant HTML elements (i.e. `div` and `img`) are all responsive. In other words, they're all block-level with a relative width of 100%. This is done implicitly (i.e. inherently) for the `div` elements, and explicitly for the `img` elements.

The result in portrait orientation is looking good:

![Mobile Portrait](https://i.imgur.com/xRhsHSx.png)

However, the result in landscape orientation is excessively scaled:

![Mobile Landscape](https://i.imgur.com/wlmg6pi.png)

This is where media queries really shine. Taking pixel density into account, current generation phones do not exceed 480 pixels of width whilst in portrait orientation, yet older generation phones (since the iPhone 4) have at least 480 pixels of width whilst in landscape orientation. Due to this, a [breakpoint](https://guide.freecodecamp.org/css/breakpoints/) of 480 pixels seems appropriate in this instance.

The additions to the CSS document are as follows:
```css
@media (min-width: 30rem) { /* 480px */
  .container {
    overflow: hidden;
  }

  .photo {
    box-sizing: border-box;
    float: left;
    width: 50%;
  }

  .photo:nth-child(odd) {
    padding-right: 0.625rem; /* 10px */
  }

  .photo:nth-child(even) {
    padding-left: 0.625rem; /* 10px */
  }

  .photo:nth-last-child(2) {
    margin-bottom: 0;
  }
}
```

Essentially, the above media query is instructing the [user agent](https://guide.freecodecamp.org/user-agent/) to only apply those styles when the viewport width is a minimum of 480 pixels. Otherwise, the styles are simply ignored.

The updated result in landscape orientation is now much better:

![Mobile Landscape After Media Queries](https://i.imgur.com/8A0IUZQ.png)

This walkthrough has merely scratched the surface of the possibilities with media queries.

### More Information:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [W3C](https://www.w3.org/TR/css3-mediaqueries/)
