---
title: Render Images From Data Sources
---
Obtaining image links from JSON objects has been explained already. However, how do you present that image as an actual image requires a bit of ingenuity, yet it is simple even if you don't figure it out yourself. You have to generate html using the variable to complete the link like this:

    html += "<img src = '" + val.imageLink + "'>";