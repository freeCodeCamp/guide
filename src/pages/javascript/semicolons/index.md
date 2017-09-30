---
title: Semicolons
---
Semicolons are not required in Javascript. This is because Javascript has a feature called "Automatic Semicolon Insertion," or ASI for short. ASI puts semicolons in your Javascript for you. It is active by default and always active, it's a part of the language and can not be disabled.

ASI has a set of rules it uses to determine where it should insert semicolons. If there is already a semicolon in place, it won't change anything. See <a href='http://stackoverflow.com/a/2846298/3467946' target='_blank' rel='nofollow'>this StackOverflow answer</a> for more information on how ASI works.

There is only one case where ASI fails: when a line starts with an opening bracket `(` or `<a href='http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding' target='_blank' rel='nofollow'>`. To avoid this causing errors, when a line starts with an opening bracket, you can put a semicolon at the beginning of the line that has the opening bracket:

    ;(function() {
      console.log('Hi!')
    })

Note that this is only required if you don't use semicolons.

A consistent coding style makes code more readable. Decide whether you will or won't use semicolons, and do so everywhere.

### Other resources

<aside class="onebox whitelistedgeneric">

<header class="source">[blog.izs.me</a></header>

<article class="onebox-body">![](http://assets.tumblr.com/images/og/fb_landscape_share.png)

### <a href='http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding' target='_blank' rel='nofollow'>An Open Letter to JavaScript Leaders Regarding Semicolons</a>

I got this email last night from Sean Silva: “ I was browsing the code for your npm.js project (this file in particular: https://github.com/isaacs/npm/blob/master/lib/npm.js), and noticed you using a...

</article>

</aside>
