---
title: CSS3 Backgrounds
---
## CSS3 Backgrounds

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/css3-backgrounds/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# CSS3 Backgrounds

CSS3 contains a few new background properties, which allow greater control of the background element.

In this section you will learn how to add multiple background images to one element.

You will also learn about the following new CSS3 properties:

+ background-size
+ background-origin
+ background-clip

## CSS3 Multiple Backgrounds

CSS3 allows you to add multiple background images for an element, through the background-image property.

The different background images are separated by commas, and the images are stacked on top of each other, where the first image is closest to the viewer.

The following example has two background images, the first image is a flower (aligned to the bottom and right) and the second image is a paper background (aligned to the top-left corner):
```
#example1 {
    background-image: url(img_flwr.gif), url(paper.gif);
    background-position: right bottom, left top;
    background-repeat: no-repeat, repeat;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background_multiple)

## CSS3 Background Size

The CSS3 background-size property allows you to specify the size of background images.

Before CSS3, the size of a background image was the actual size of the image. CSS3 allows us to re-use background images in different contexts.

The size can be specified in lengths, percentages, or by using one of the two keywords: contain or cover.

The following example resizes a background image to much smaller than the original image (using pixels):
```
#div1 {
    background: url(img_flower.jpg);
    background-size: 100px 80px;
    background-repeat: no-repeat;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size)

The two other possible values for background-size are contain and cover.

The contain keyword scales the background image to be as large as possible (but both its width and its height must fit inside the content area). As such, depending on the proportions of the background image and the background positioning area, there may be some areas of the background which are not covered by the background image.

The cover keyword scales the background image so that the content area is completely covered by the background image (both its width and height are equal to or exceed the content area). As such, some parts of the background image may not be visible in the background positioning area.

The following example illustrates the use of contain and cover:
```
#div1 {
    background: url(img_flower.jpg);
    background-size: contain;
    background-repeat: no-repeat;
}
#div2 {
    background: url(img_flower.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size_contain)

## CSS3 background-origin Property
The CSS3 background-origin property specifies where the background image is positioned.

The property takes three different values:

+ border-box - the background image starts from the upper left corner of the border
+ padding-box - (default) the background image starts from the upper left corner of the padding edge
+ content-box - the background image starts from the upper left corner of the content
The following example illustrates the background-origin property:
```
#example1 {
    border: 10px solid black;
    padding: 35px;
    background: url(img_flwr.gif);
    background-repeat: no-repeat;
    background-origin: content-box;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-origin)

## CSS3 background-clip Property

The CSS3 background-clip property specifies the painting area of the background.

The property takes three different values:

+ border-box - (default) the background is painted to the outside edge of the border
+ padding-box - the background is painted to the outside edge of the padding
+ content-box - the background is painted within the content box

The following example illustrates the background-clip property:

```
#example1 {
    border: 10px dotted black;
    padding: 35px;
    background: yellow;
    background-clip: content-box;
}
```
[Test it](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-clip)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


