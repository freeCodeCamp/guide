---
title: Manipulating Cookies
---
## Manipulating Cookies

Cookies let you store small piece of data in user's hard drive.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# Creating Cookies
We store cookies as name - value pairs.

We can assing expiry time to our cookie with help  of `expires` field. `expires` stores a date when the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.

With help of path field you can give path location where the cookie will be stored.

### Example

```javascript
   document.cookie = "username=Vicky; expires=Fri, 25 Nov 2017 20:47:11 UTC; path=/"
```

In the simple example above, we created a cookie which stores username of the site visitor in his computer. We gave 25th Nov 2017 as expiry date of the cookie. We also mentioned the path where the cookie will be stored.

# Modifiying Cookies:

You can modify a previously defined cookie by simply overwriting it.

### Example

```javascript
   document.cookie = "username=Vishal; expires=Fri, 28 Nov 2017 20:47:11 UTC; path=/"
```

In the example above , we midified the username and also changed the expiry date of the cookie.

# Reading Cookies:

Cookies are stored as string of `;` (semi-colon) separated key value pairs.
By spliting the string we can get key and value of each cookies.

### Example

```javascript
   // getting array of cookies by spliting the string
   var cookiesArray = documnet.cookies.split(';');
   // retriving username from the cookie
   var u_name = cookiesArray[0].split('=')[1]; 
```
In the example above , after spliting the cookie string we got cookies array. In that array we have only one cookie which is stored as string of `key=value` form.
We splited that string using `=` as separator and got a array having two elements. Second element has the value of username cookie.We stored that value in a variable named `u_name`.

# Deleting Cookies:

To delete a cookie, you just need to set the expiry date to a time in the past.

### Example

```javascript
   // By setting expiry date as a tine in the past we deleted the cookie
   document.cookie = "username=Vishal; expires=Fri, 28 Nov 2016 20:47:11 UTC; path=/"
```

# Other Resources:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

