---
title: Manipulating Cookies
---
## Manipulating Cookies

A common task in Javascript is getting and setting cookies in the browser. Cookies allow you to store simple key value pairs of information in the browser in a persistent manner. One advantage of using cookies is they can be both accessed by server-side scripts and Javascript to determine their value.

You can access cookie information using the `document.cookie` object. This object contains all the cookies in the string format `name=value; name=value;`...

## Setting a Cookie

To add a new cookie for your web site, set `document.cookie = "name=value; expireDate; path;";`. The expire date needs to be a valid date, you can use GMT format by converting your date object using `.toGMTString()`, and the path is the path on your web site that the cookie applies to.

### Example

With JavaScript, a cookie can be created like this:  

`document.cookie = "username=Dorell James";`

You can also add an expiry date (in GMT time). By default, the cookie is deleted when the browser is closed:  

`document.cookie = "username=Dorell James; expires=Thu, 18 Dec 2090 12:00:00 GMT";`

With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page: 

`document.cookie = "username=Dorell James; expires=Thu, 18 Dec 2090 12:00:00 GMT; path=/";`

## Getting a Cookie

To get the value of the cookie, split the `document.cookie` value using the `;` character, and then iterate through the resulting array until you find the name you are looking for.

### Example

`var x = document.cookie;`
`document.cookie` will return all cookies in one string much like: `cookie1=value; cookie2=value; cookie3=value;`

## Change a Cookie

You can change a cookie the same way as you create it:
`document.cookie = "username=Dorell Gwapo; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";`

## Delete a Cookie

Deleting a cookie is very simple. You don't have to specify a cookie value when you delete a cookie. Just set the expires parameter to a passed date:

`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";`

NOTE: You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don't specify the path.

#### More Information:
[Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)


