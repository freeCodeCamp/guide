---
title: javaScript Isloggedinasync
---
Let's say you have a public page, but if the user is logged in you want to show special information to them. You'll need to detect if a user is logged in before you make an _$http_ call, right? It's not guaranteed that this will work, because _isLoggedIn()_ is actually an async call. If you want to force something to wait until after _isLoggedIn()_ is successful before it gets called, you should include _Auth.isLoggedInAsync_:

    $scope.isLoggedInAsync = Auth.isLoggedInAsync;

_isLoggedInAsync_ takes a callback function as an input, and passes the callback function a _true_ boolean if the user is logged in, and a _false_ if the user is not. You can call it like so:

    $scope.isLoggedInAsync(callback(bool) {
        if (bool) { /** do thing if they’re logged in **/ }
        else { /** do different thing if they’re not logged in **/ }
    });