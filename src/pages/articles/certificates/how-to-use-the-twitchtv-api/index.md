---
title: How To Use the Twitchtv Api
---
Update September 29, 2016: Twitch has changed their API and now requires an API key in order to run queries. If you are using CodePen or GitHub pages to build these, we do not recommend adding an API key to your project for security reasons.

Instead of using Twitch's API, we recommend hard-coding [this JSON](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8) into your app as a variable. It is a series of responses for different accounts from Twitch.

* * *

If you're trying to tackle this challenge with jQuery's `$.getJSON()` method, chances are you'll get an error message concerning Cross-Origin Resource Sharing (CORS).

The easiest way to resolve this is to use jQuery's JSONP capabilities. From the Twitch API's [readme page](https://github.com/justintv/Twitch-API#json-p):

> All API methods support JSON-P by providing a callback parameter with the request.

Also the [jQuery documentation](http://api.jquery.com/jQuery.getJSON/) states:

> If the URL includes the string "callback=?" (or similar, as defined by the server-side API), the request is treated as JSONP instead.

Here's an example call to fetch Free Code Camp's Twitch channel data:

    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
      console.log(data);
    });

JSONP is considered insecure [according to Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP), but should be sufficient for our purposes. For a detailed discussion on Twitch's CORS restriction, please read [issue <span class="hashtag">#133</span>](https://github.com/justintv/Twitch-API/issues/133) on the Twitch-API repository.