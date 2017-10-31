---
title: How to Use Links
---
## How to Use Links

In HTML, links are referred to as hyperlinks.  Hyperlinks allow you to jump from one page to another.  To define a link, use the anchor element (<code>&#60;a&#62;</code> tag).
  
```html
<a href="http://www.microsoft.com">Microsoft</a>
```

The <code>href</code> attribute specifies the destination address of the link.

#### HTML Local links
You can define a link in a similar fashion as above.  Let's assume you want to link from <code>page1</code> to <code>page2</code>.

```html
<a href=”page2.html”>Next page</a>
```

This is about it, and very simple.  However, this would open your page in the same tab.  If you want to open the link in a new browser window/tab, then you add a target attribute.

```html
<a href=”page2.html” target=”_blank”>Next page</a>
```

Finally, you can even define an image as a link.

```html
<a href=”page2.html”>
  <img src=”nature.png” alt=”Nature” />
</a>
```
