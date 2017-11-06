---
title: Image Opacity and Transparency
---
## Image Opacity and Transparency

The CSS `opacity` property specifies the degree of which an element is visible or transparent. Legal values of `opacity` range between `0` and `1` inclusive.

### Examples

The following CSS example will set the visibility of all images to `0.5` (or 50%) allowing content behind the images to be partially visible:

```css
img {
  opacity: 0.5;
}
```

In this example, we set the visibility of image elements having the `class`=`hide-image` to `0` (or 0%):

```css
img.hide-image {
  opacity: 0;
}
```
