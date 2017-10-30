---
title: Manipulating Cookies
---
## Manipulating Cookies

Getting or setting cookies is a straightforward operation that can be achived by accessing the cookie property on the browser's document object.

### Getting the cookies

You can only read the entire cookies string. Each cookie in the string will be separated with a semi-colon. If you want to read a single cookie at a time, you would have to split the cookies string and find the cookie you are looking for.

```javascript
// Getting the cookies string
const cookiesString = document.cookie;

// Creating an array of cookies
const cookiesList = cookiesString.split(';');

// Logging each cookie in the cookies array
cookiesList.forEach(cookie => console.log(cookie));
```

### Setting a cookie

You can only set a cookie at a time. Even though the syntax you will use to set a new cookie looks like it will override the whole cookie string, it will not. `document.cookie = newCookie` will only append the new cookie to the existing cookie string. A cookie, beside being a key=value pair, can also contain a **domain**, a **path**, a **secure** flag and an **expire** date.

```javascript
setCookie(name, value, days, domain, path, secure) {
  let date;
  let expires = '';
  let cookieString = '';

  if (days > 0) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = date.toGMTString();
  }

  cookieString = name + '=' + value + ';';
  cookieString += ' expires=' + expires + ';';
  cookieString += ' domain=' + domain + ';';
  cookieString += ' path=' + path + ';';
  cookieString += secure;
  document.cookie = cookieString;
}
```


#### More Information:

[HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
[Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

