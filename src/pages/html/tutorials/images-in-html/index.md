---
title: Images in HTML
---

## Images in HTML

See the freeCodeCamp page on the `<img>` tag [here](https://guide.freecodecamp.org/html/elements/img-tag)

## INTRODUCTION
Ever seen images in website , Well now we can too insert images in our website using HTML. It's very easy to use.All we have to use is a tag -> `<img>`. 
This tag is used to insert images on web pages and uses two attributes: src and alt.

`src` - This attribute provides the url to image present either on your P.C./Laptop or to be included from some other website. Remember the link provided should not be broken otherwise the image will not be produced on your webpage.

`alt` - This attribute is used to overcome the problem of broken image or incapability of your browser to not being able to produce image on webpage. This attribute as name suggests provide "Alternative" to image which is some 'TEXT' describing the image

## EXAMPLE

`<img src="codingme.jpg" alt="A code snippet">`
Hence if browser cannot find this image, it will display the value of the alt attribute , i.e. "A code snippet".

#### More Information:
To get more details on images in HTML, check out the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)


Images can improve the design and the apperance of a web page.

In HTML, images are defined with the `<img>` tag.

The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.

The src attribute specifies the URL (web address) of the image:
`<img src="url">`

The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).
`<img src="" alt="your text here">`

You can use the style attribute to specify the width and height of an image.
`<img src="" alt="your text here" style="width:500px;height:600px;">`

Alternatively, you can use the width and height attributes:
`<img src="" alt="your text here" width="500" height="600">`
