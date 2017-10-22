---
title: Iframes
---
## Iframes
An HTML `<iframe>` tag embeds one web document within another. A common use for this is to embed media from another site, such as YouTube videos, into your own website.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/NFaZKFTycmc" frameborder="0"></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/NFaZKFTycmc" frameborder="0"></iframe>

#### Alternative Text
The content between the opening and closing `<iframe>` tags is used as alternative text, to be displayed if the viewer's browser does not support iframes.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/NFaZKFTycmc" frameborder="0">
  <p>Your browser does not support iframes.</p>
</iframe>
```

#### Targeting an Iframe in a Link
Any `<a>` link can target the content of an `<iframe>` element. Rather than redirect the browser window to the linked webpage, it will redirect the `<iframe>`. For this to work, the `target` attribute of the `<a>` element must match the `name` attribute of the `<iframe>`.

```html
<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe_redir"></iframe>
<p><a href="https://www.youtube.com/embed/NFaZKFTycmc" target="iframe_redir">Redirect the Iframe</a></p>
```

<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe_redir"></iframe>

<a href="https://www.youtube.com/embed/NFaZKFTycmc" target="iframe_redir">Redirect the Iframe</a>

This example will show a blank `<iframe>` initially, but when you click the link above it will redirect the `<iframe>` to show a YouTube video.

#### Javascript and Iframes
Documents embedded in an `<iframe>` can run JavaScript within their own context (without affecting the parent webpage) as normal.

Any script interaction between the parent webpage and the content of the embedded `<iframe>` is subject to the same-origin policy. This means that if you load the content of the `<iframe>` from a different domain, the browser will block any attempt to access that content with JavaScript.

#### More Information:
See the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
