---
title: Center an Image Using Text Align Center
---
## Center an Image Using Text Align Center

To center image (inside block element like `div`) we will use CSS's `text-align` property.

```html
<div style="text-align:center;">
  <img src="SOME_URL" alt="" />
</div>
```

In above example image will be centered inside div. This is because div is [block-level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

We can't do that with [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).
However we can apply `display: block` to any element making it block element.

```html
<span style="display: block; text-align: center;">
  <img src="SOME_URL" alt="" />
</span>
```

In above example we will see image centered exactly same way as in first example.

#### More Information:
[MDN: text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
