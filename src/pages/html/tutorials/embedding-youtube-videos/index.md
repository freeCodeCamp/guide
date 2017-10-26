---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

Youtube makes it pretty easy to embed videos on your own webpage - they even provide the code!

To find the code, go to the video you wish to share, and click on the "Share" button. This will drop down a box with three tabs at the top. Go to the middle tab, "Embed". There is a line of code that is already highlighted. Copy that line of code. This is pictured below:

![Showing the Share options underneath a Youtube video](https://pbs.twimg.com/media/DM7wCg3W4AEazen.jpg)

Now you can paste that line of code wherever in your HTML you want the video to be embedded. For example: 

```html
<div id="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Grg3461lAPg" frameborder="0" allowfullscreen></iframe>
</div>
```

Youtube uses iframes for embedding videos. An iframe is often used to insert content from another source; it is kind of like a mini-HTML document embedded in your own HTML. The attributes in Youtube's iframe element set the height and width of the video, the url of the video as the source, whether or not to put a border around the iframe element, and whether or not the video can be expanded to full-screen. Because Youtube uses an iframe, the styles on things within the iframe, such as the play button and player controls, cannot be changed.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
 - <a href="https://www.w3schools.com/tags/tag_iframe.asp"> iframes on W3Schools </a>
 - <a href="https://support.google.com/youtube/answer/171780?hl=en"> Youtube Help tutorial for Embedding Video and Playlists </a>

