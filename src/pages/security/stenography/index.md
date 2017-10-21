---
title: Stenography
---
## Stenography

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/security/stenography/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

 **Steganography** 

Steganography is  the practice of hiding secret text messages inside non-secret messages. For example hiding a message in innocuous-looking blocks of text or images 

 Stegcontainers are the objects in which the secret is concealed - can take many forms, audio files, text files, and image files. (There have even been instances of hiding data in domain names). 

 The only one limitation on what  can or cannot hide using steganography is the size of the Stegcontainer. This is because you won’t be able to hide a lot of information in a container without visual or audio distortion.”

** Example**

One approach is to hiding data within an image file. A popular technique is called _least significant bit (LSB) insertion_. In this method, you can take the binary representation of the "hidden data" and overwrite the LSB of each byte within the selected image. If your stegcontainer is a picture using 24-bit color. Then the amount of change will be indiscernible to the human eye.

E.g. suppose that we have three adjacent pixels (nine bytes) with the following RGB encoding:

    10010101   00001101   11001001
    10010110   00001111   11001010
    10011111   00010000   11001011

Now suppose we want to "hide" the following 9 bits of data: 101101101\. If we overlay these 9 bits over the LSB of the 9 bytes above, we get the following:

    10010101   00001100   11001001
    10010111   00001110   11001011
    10011111   00010000   11001011

Note that we have hidden 9 bits but at a cost of only changing 4, or roughly 50%, of the LSBs.

**References:**

http://searchsecurity.techtarget.com/definition/steganography

https://en.wikipedia.org/wiki/Steganography
