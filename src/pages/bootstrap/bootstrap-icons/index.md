---
title: Bootstrap Icons
---
## Bootstrap Icons

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

With Bootstrap 4 (still in beta at the time of writing), all previously available icons are dropped. The only one available is a utilitarian "Close" icon intended for modals. You can, of course, still use any icon library of your choice, but you'll need to check its documentation and add any necessary files to your project. Some popular icon libraries are listed at the bottom of this entry.

If you're using v4 and are interested in the close icon, it's very straightforward to use. Just add a button with the following code:

```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

Notice the aria-hidden attribute, which ensures that the icon will not confuse screen readers. It's a very simple way to increase the accesibility of your page.

If you plan on using version 3, you'll be glad to know that previous versions of Bootstrap have included over 250 glyphs in font format from the Glyphicon Halflings set. They are useful as buttons, toolbars and menus, and can be invoked with a simple span tag with the corresponding icon name and 'glyphicon' as classes, as follows:

`<span class="glyphicon glyphicon-exclamation-sign"></span>`

Adding an icon to a button is, as we've seen with the close icon, as simple as using a span inside of the button tag. Here, a button with a star next to the word "Star":

```html
<button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Version 4 dropping icon library: https://getbootstrap.com/docs/4.0/migration/
Information on the "Close" icon in v4: https://getbootstrap.com/docs/4.0/utilities/close-icon/
List of icons available on v3: https://getbootstrap.com/docs/3.3/components/

A few icon libraries, in case you're using v4:
http://fontawesome.io/
https://glyphicons.com
https://octicons.github.com
http://www.entypo.com/
