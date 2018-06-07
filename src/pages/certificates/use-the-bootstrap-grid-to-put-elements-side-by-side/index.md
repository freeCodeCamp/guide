---
title: Use the Bootstrap Grid to Put Elements Side by Side
---
Bootstrap uses a responsive grid system that makes it easier to put elements into rows and tell each element's relative width.

![Bootstrap 12 column grid layout](https://www.evernote.com/shard/s116/sh/f0944d97-08b8-4615-8273-a327bf41fb05/de1a3acbceef89ae/deep/0/)

Note that in this illustration, the `col-md-_` class is being used. Here, md means medium, and _ is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

```html
<div class="row">
  <div class="col-xs-4"><button class="btn btn-block btn-primary">Like</button></div>
  <div class="col-xs-4"><button class="btn btn-block btn-info">Info</button></div>
  <div class="col-xs-4"><button class="btn btn-block btn-danger">Delete</button></div>
</div>
```
