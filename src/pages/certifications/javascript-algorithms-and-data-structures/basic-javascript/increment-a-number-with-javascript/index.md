---
title: Increment a Number with JavaScript
---
## Increment a Number with JavaScript

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

You can easily increment (add one) to a number variable by using the '++' increment operator. For example:
    
    var a = 6;
    a++; // Now, 'a' is equal to 7

Now, it is important to remember that the computer reads code from left to right. So placement of the increment operator can affect the way your variable increments. For example:

    var b = 5;
    var c = b++;

Once this code is run, 'b' is equal to 6, but 'c' is equal to 5. This is because the computer first assigns the original value of 'b' (which was 5) to 'c', then increments 'b'. This is called <strong>postfixing</strong> the operator. Now check out the next example:

    var d = 5;
    var e = ++d;
    
When this is run, both 'd' and 'e' are equal to 6. The computer first increments the original value of 'd', then assigns it to 'e'. This is called <strong>prefixing</strong>. 
