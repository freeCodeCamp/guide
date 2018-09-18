---
title: How to Redirect a Web Page
---
## How to Redirect a Web Page

Redirecting a webpage is easy! You can copy this code into your html file's(with a few minor changes) head.

`<meta http-equiv="Refresh" content="5;url=https://stevencopeland.github.io/new-website/">` Replace `content=5` with number of seconds until the website changes. Replace https://stevencopeland.github.io/new-website/ with what website you want. Rember to place this code in your head: `<meta http-equiv="Refresh" content="5;url=https://stevencopeland.github.io/new-website/">`

OR, there is another option if you jus want to change the page as soon as they reach that page:

```
window.location.assign("https://www.yournewwebsite.fakewebsite");
```

Replacing the website with your website. The one should go inside of a javascript file.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


