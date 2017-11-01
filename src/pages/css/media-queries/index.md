---
title: Media Queries
---
##Media Queries

Media queries are a CSS rule that acts as an if check for the rules that are contained within the media query. The puropse of a media queiy is to apply a set of CSS rules based on a certain screen size. Media queries are usually based on pixels, but can also be based on browser orientation or device pixel ratiios. By using media queries a developer can ensure that the website or application is displaying correctly across all devices

### Examples
```CSS
/*--- Desktop ---*/
body {
    background-color: red;
}

/*--- Tablet Portrait and below ---*/
@media screen and (max-width: 768px){
    body{
        background-color: blue;
    }
}

/*--- iPhone 6, 7, 8 -- Google Pixel -- Samsung Galaxy --*/
@media screen and (max-width: 375px){
    body{
        background-color: green;
    }
}
```

These are three very basic examples that change the background color based on the device width. It is possible to set minimum widths in a media query `@media screen and (min-width: 300px) and (max-width: 325px)` would only select that 25 pixel range.

#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
Also see the <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json' target='_blank' rel='nofollow'>Responsive Web Design Principles</a> section on Beta

<a href='https://css-tricks.com/snippets/css/media-queries-for-standard-devices/' target='_blank' rel='nofollow'>CSS Tricks Standard Device Widths Atricle</a>

<a href='https://alistapart.com/article/responsive-web-design' target='_blank' rel='nofollow'> Ethan Marcotte A List Apart Atricle on  Responsive Web Design</a>
