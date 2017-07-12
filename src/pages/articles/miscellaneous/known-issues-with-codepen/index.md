---
title: Known Issues with Codepen
---
Free Code Camp learners are encouraged to use [Codepen.io](http://www.codepen.io/) to put together projects, and Codepen is a fantastic resource for quickly putting together useable code. However, Codepen does introduce an additional level of abstraction into the process of debugging code. Here are some known issues that can trip you up in Codepen, if you're not aware of them:

1.  **URL issue with anchor tags:** CodePen overrides `<a href='URL'>` anchor elements, which means that you have to add a `target='_blank'` to your anchor elements - otherwise they won't work.
2.  **https plugin issue:** The Chrome extension "HTTPS Everywhere" (created by the [Electronic Frontiers Foundation](http://www.eff.org/)) has been known to interfere with AJAX calls. Because the extension automatically uses HTTPS, it can cause a "mixed content" error that prevents the JSON/XML data from being loaded. If you encounter such an error, make sure that your plugins are not the culprit. Optionally you could use [crossorigin.me](http://crossorigin.me) as a proxy.
3.  **imgur hotlinking:** If you use images from [http://imgur.com](http://imgur.com) they will not show up most of the time, this is due to their TOS. A way to solve this is to use an alternate service like [http://postimg.org](http://postimg.org)
4.  **auto reload:** By default, everytime you make changes in the HTML or JS editor windows, the preview window refreshes. You can turn this off and enable a "Run Button", by going to Settings > Behaviour > "Want a Run Button?" and unticking the box.
5.  **location.reload:** If you run into an issue of your code working in the debug view or in JSFiddle, but not in Codepen editor view or full page view, double check if you used `location.reload()`. If you did, you have to find another way to achieve desired, because Codepen will strip `location.reload` and leave only `()` in your code. Read more [here:](https://blog.codepen.io/documentation/editor/things-we-strip/)
6.  **display images, add css/js files, hosted on Github:** You may want to include in your Codepen project stylesheet, image or js file hosted on a Github. If you add Github link of your file to your settings in Codepen, or to your html/css it will not work out of box. What you need to do is:
    1.  Go to the "Raw" version of the file
    2.  Copy the URL
    3.  Change `raw.githubusercontent.com` to `rawgit.com`
    4.  use that URL to link to a files hosted on a github