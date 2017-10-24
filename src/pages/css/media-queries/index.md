---
title: Media Queries
---
### What are media queries?

MDN define media queries as follows:
>Media queries are useful when you want to apply CSS styles depending on a device's general type (such as print vs. screen), specific characteristics (such as the width of the browser viewport), or environment (such as ambient light conditions). With the huge variety of internet-connected devices available today, media queries are a vital tool for building websites and apps that are robust enough to work on whatever hardware your users have.
>Starting with HTML 4 and CSS2 there is a way of creating custom stylesheets depeding on the device propreties that uses the website.

For example, if you want to have a sidebar on larger screens but want to hide it on smaller ones you can do it as follows:

Let's say our sidebar is inside of a div as shown below:

```html
<div id="sidebar"> ...
</div>
```

The CSS 
```css
@media (min-width: 840px) { // or which width do you want
    #sidebar {
        display: inline-block;
        min-heigth: 100vh;
        min-width: 25vw;
    }
}
```

Let's explain the CSS above.
First, by using @media (min-width: 840px) we are saying that all the css propreties that follow inside the curly brackets will apply only to media that has minimum width of 840px. 
This means that on devices that do not have this width, the div we created earlier will not have the propreties stated in the code above.

#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
Also see the <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json' target='_blank' rel='nofollow'>Responsive Web Design Principles</a> section on Beta
#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->
Walk through of what Media Queries are and how to use them
