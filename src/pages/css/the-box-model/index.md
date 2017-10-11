---
title: Box Model
---
## Box Model

Understanding the CSS Box Model is crucial to being able to correctly layout a web page.

When a browser renders (draws) a web page each element, for example, a piece of text or an image, is drawn as a rectangular box following the rules of the CSS Box Model.

At the center of the box is the content itself, which takes up a certain height and width. This region is known as the **Content Area**. The size of the content area can be automatically determined, or you can explicitly set the size of height and width. (see note below regarding `box-sizing`)

![Content Area Image](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/content%20area.jpg)

Around the Content Area, this is a region known as **Padding Area**. The size of the padding can be the same all around, or you can set individually for the top, bottom, left and right padding. If you are using a background for the element, the background will extend into the Padding Area.


![Padding Area Image](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/padding%20area.jpg)

Next, there is a **Border Area**. This creates a border around the element and its padding. You can set thickness, color, and style of the border. Style options include none, solid, dashed, dotted and several others. (see note below regarding `box-sizing`)


![Border Area Image](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/border%20area.jpg)

Finally, there is the **Margin Area**. This creates clear space around the element, padding, and border.  Again you can individually set top, bottom, left and right margins. Under certain circumstances margin collapsing occurs and the margins between adjacent elements may be shared.


![Margin Area Image](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/margin%20area2.jpg)

**`Box-Sizing` Property**
The default for this property is `content-box`.  If you use the default then the box model will allow the author to specify the size of the content area. However, it is possible to use these to instead specify the size of the border area.  This is done by changing `box-sizing` property to `border-box`.  This can sometimes make layouts easier.  You can set the `box-sizing` property per element as desired.

#### More Information:

