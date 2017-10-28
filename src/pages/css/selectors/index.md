---
title: Selectors
---
## Selectors

---
title: Selectors
---
## Selectors

CSS selectors determine which elements we want to apply the style to.

**Basic tag selectors**

Just use the tag name to format the basic html tags.

Example:

```css
a { /* link */ }
p { /* paragraph */ }
ul { /* unordered list */ }
li { /* list items */ }
```

**Classes**

Of all the HTML attributes, the `class` attribute is the most important for CSS. It allows you to define a group of HTML elements that we can precisely target. Simply put a dot in front of the class name you want to use:

```css
.date {
color: red;
}
```

The `.date` class selector will target all HTML elements with the `class = "date" attribute`. Thus, the following HTML elements will all be stylized:

```html
<p class="date">
  21 February, Saturday
</p>
<p>
  The event will take place in<em class="date">saturday</em>.
</p>
```

**Identifiers**

You can also use the `id` attribute in your HTML and define it in your CSS using a octothorpe:

```css
#tagline { color: orange;}
```
HTML:

```html
<h1 id="tagline">This title will be orange.</h1>
```

Identifiers are similar to classes, because they are also based on the HTML attribute.

**Hierarchy of selectors**

The space in the selector determines the ancestor / child relationship. For example, we want the links in our header to be red:

```css
header a {
  color: red;
}
```

This can be read from right to left as: "select all the `<a>` elements that are inside the `<header>` element." This will cause all other links (which are not in the header) to remain unchanged.

**Pseudo-classes**

HTML elements can have different states. The most common case is when you hover over the link. In CSS, it is possible to apply a different style when an event occurs.

Pseudo-classes are tied to common selectors and begin with a colon:

```css
a {
  color: blue;
}
  
a:hover {
  color: red;
}
```


