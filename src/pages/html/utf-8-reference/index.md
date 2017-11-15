---
title: Utf 8 Reference
---
## Utf 8 Reference

The Unicode Standard has become a success and is implemented in HTML, XML, Java, JavaScript, E-mail, ASP, PHP, etc. The Unicode standard is also supported in many operating systems and all modern browsers.

The charset attribute specifies the type of character-set encoding that this page uses. You should always define the character set.
Because rather than letting the browser auto-detect the charset from the code, we can supply it directly within the code. So occasions where browser making incorrect charset detections can be avoided.
However, this is particularly important if your page needs to display nonstandard characters.

`<meta charset="utf-8" />`  and `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`
**In HTML5, they are equivalent**. Use the shorter one, it is easier to remember and type. [Browser support](https://code.google.com/archive/p/doctype-mirror/wikis/MetaCharsetAttribute.wiki) is fine since it was designed for backwards compatibility.
[more details](https://www.w3.org/International/questions/qa-html-encoding-declarations)
