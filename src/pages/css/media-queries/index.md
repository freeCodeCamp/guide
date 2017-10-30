---
title: Media Queries
---
## Media Queries
Developers use **media queries** to alter the appearance of websites depending on the type of device being used and its properties.
Media Queries tell the browser to load specific css rules for the given `@media` specifications. 

The rules are applied when initially loading the web page, transitioning from portrait to landscape mode in mobile, or when a desktop browser is manually resized.

An advantage of this is having content that needs to be displayed on a particular screen size or device, but is not needed for other screens such as the famous mobile navigation hamburger button.

### Getting Set Up For Media Queries
To have the web page not appear zoomed out on mobile devices, and forcing the user to pinch the screen to see the content, add the following meta tag to the html page which tells the
browser to load the page using a scale based on the width of the device:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Though media queries will work without adding this meta tag, it will not properly display on mobile devices.

### Getting Started With Media Queries

Media Queries are used with the `@media` rule using following the format:

```css
@media not|only mediatype and (expressions) {
    New CSS Goes Here;
}
```

Where mediatype can be any of the following:
* `all`
* `print`
* `screen`
* `speech`

and expressions are used to evaluate specific screen sizes such as:
* `min-width`
* `max-width`
* `min-height`
* `max-height`
* `orientation`

For example:

```css
@media screen and (min-width: 560px) {
    body {
        background-color: lightblue;
    }
}
```

will display the background of the website as lightblue for any screen size larger than 560px, otherwise it will remain the default css value.

The following code will do the same effect, but only display the lightblue backgroudn in landscape orientation:

```css
@media screen and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
```

The browser can also apply specific stylesheets for different sizes using:

```html
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="desktop-large.css">
```

### Complex Media Queries
If there is a need to have a specific style between two screen sizes then media queries offer the ability to combine two expressions in one statement.

```css
@media screen and (max-width: 700px) and (min-width: 500px) {
    section {
        padding-left: 20px;
        width: 80%;
    }
}
```

Media queries are very important for responsive web development, and are often used with principles of responsive design such as:
* Let the page content determine breakpoints
* Build mobile first

There are many devices out there, and still many more to be created in the future making it impracticatl to determine at once screen size to use a media querry, or what is known as a **breakpoints**. Breakpoints can be minor or major but should be created only when the content does not display right in its container.

Building mobile first feels strange at first, but with more people searching the web using their mobile devices the percentage of website visits from mobile devices will only increase, much like with screen sizes. It is simple to start small and build the website up. However, desktop first solutions are still viable, so pick which approach best fits your target users. 

#### More Information:
<a href='https://www.w3schools.com/css/css_rwd_mediaqueries.asp' target='_blank' rel='nofollow'>w3schools : RWD Media Queries</a><br>
<a href='https://www.w3schools.com/css/css3_mediaqueries.asp' target='_blank' rel='nofollow'>w3schools : CSS3 Media Queries</a><br>
<a href='https://www.w3schools.com/cssref/css3_pr_mediaquery.asp' target='_blank' rel='nofollow'>w3schools : @media Rule</a><br>
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' target='_blank' rel='nofollow'>MDN Web Docs - Using Media Queries</a>

#### Free Online Course:
<a href='https://www.udacity.com/course/responsive-web-design-fundamentals--ud893' target='_blank' rel='nofollow'>Udacity Responsive Web Design Fundamentals</a>
