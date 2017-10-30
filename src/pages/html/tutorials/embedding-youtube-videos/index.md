---
title: Embedding Youtube Videos
---


## Embedding Youtube Videos

To play your video on a web page, do the following:

- Upload the video to YouTube
- Take a note of the video id
- Define an <iframe> element in your web page
- Let the src attribute point to the video URL
- Use the width and height attributes to specify the dimension of the player 
 
## Example
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/XGSy3_Czz8k">
</iframe>
```
## YouTube Autoplay
You can have your video start playing automatically when a user visits that page by adding a simple parameter to your YouTube URL.
Value 0 (default): The video will not play automatically when the player loads.

Value 1: The video will play automatically when the player loads. 
 ```html
 <iframe width="420" height="315"
src="https://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
</iframe>
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
More Info: https://www.w3schools.com/html/html_youtube.asp

