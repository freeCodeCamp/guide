---
title: Embedding Youtube Videos
---
## Embedding Youtube Videos

To play a video on a web page you have to follow one of the two ways:

1. Upload the video to YouTube
2. Share an existing video from YouTube

### 1. Upload the video to YouTube

* Upload the video to YouTube.
* Take a note of the video id (like IO36s0FytI8).
* Define an <iframe> element in your web page.
* Let the src attribute point to the video URL.
* Use the width and height attributes to specify the dimension of the player.
* Add any other parameters to the URL (see below).
   
```html
<iframe width="500" height="400"
  src="https://www.youtube.com/embed/IO36s0FytI8">
</iframe>
```

### 2. Share an existing video from YouTube

* Find the video on YouTube.
* Click the 'Share' button below the video.
* Click the 'Embed' button next to the link they show you.
* Copy the iframe code given and paste it into the html of your web page.

### Autoplay

You can have your video start playing automatically when a user visits that page.

```html
<iframe width="500" height="400"
  src="https://www.youtube.com/embed/IO36s0FytI8?autoplay=1">
</iframe>
```

Value 0 (default): The video will not play automatically when the player loads.

Value 1: The video will play automatically when the player loads.

### Loop

You can have your video start again when its finished.

```html
<iframe width="500" height="400"
  src="https://www.youtube.com/embed/IO36s0FytI8?loop=1">
</iframe>
```

Value 0 (default): The video will play only once.

Value 1: The video will loop (forever).

### Controls

You can display controls on your video.

```html
<iframe width="500" height="400"
  src="https://www.youtube.com/embed/IO36s0FytI8?controls=0">
</iframe>
```

Value 0: Player controls does not display.

Value 1 (default): Player controls display.


**You can combain parameteres just like this**

```html
<iframe width="500" height="400"
  src="https://www.youtube.com/embed/IO36s0FytI8?autoplay=1&controls=0">
</iframe>
```



