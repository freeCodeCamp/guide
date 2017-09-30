---
title: Images
---
## Images

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/images/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
A simple HTML Image element can be included in an HTML document like this:

```
<img src="path/to/image/file" alt="this is a cool picture">
```

`alt` tags provide alternate text for an image. One use of the `alt` tag is for visually impaired people using a screen reader; they can be read the `alt` tag of the image in order to understand the image's meaning.

Note that the path to the image file can be either relative or absolute. Also, remember that the `img` element is self-closing, meaning that it does not close with the `</img>` tag and instead closes with just a single `>`.

Example:

```html
<img src="https://example.com/image.png"alt="my picture">
```

(This is assuming that the html file is at https://example.com/index.html, so it's in the same folder as the image file)

is the same as:

```html
<img src="image.png"alt="my picture">
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


