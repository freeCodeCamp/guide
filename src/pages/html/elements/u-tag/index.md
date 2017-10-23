---
title: U Tag
---
## U Tag

The HTML `<u>` tag renders text with an underline.

The `<u>` element was deprecated in HTML 4.01. In HTML5, the `<u>` tag was redefined to represent text that should be stylistically different form normal text. This includes misspelled words or proper nouns in Chinese.

Instead, to underline text, it is recommended that the `<span>` tag is used in place of `<u>`. Style your `<span>` tags with the CSS `text-decoration` property with the value `underline`.

### Examples
Underline text with the deprecated `<u>` tag:
```
<u>Everyone<u> has been talking about <u>freeCodeCamp</u> lately.
```

Underlining text with the `<span>` tag:
```
<span style="text-decoration: underline">Everyone</span> has been talking about <span style="text-decoration: underline">freeCodeCamp</span> lately.
```
