---
title: "Prefilter JSON"
parent: "certificates-guide"
---

The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.

So when you don't want to work with all the elements from the array then you can use filter.

Let's filter out the cat who's "id" key has a value of 1.

Here's the code to do this:

    json = json.filter(function(val) {

      return(val.id !== 1);

    });
