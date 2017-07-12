---
title: "JavaScript Array.prototype.map()"
parent: "javascript"
---

The method `map` of the Array prototype allows you to grab a hold of each element inside an array and apply a function to them. After **map** finishes iterating through the array, it will return a **new array** with the results of applying the function to the aforementioned elements.

## The syntax is as follows:

`myAwesomeArray.map(myAwesomeFunction)`

Since **map** doesn't mutate the original array, it should be used as a value, stored inside a variable, passed in as a **returned value** inside a function (the most common case) and many other things. Let's learn a little bit of what this powerful function can do! Say we have an array of names and we want to create a new array with these names but **UPPERCASED**.

    var names = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
    var uppercaseNames = names.map(function(name) {
      return name.toUpperCase();
    };

Now if we `console.log(uppercaseNames)` we will get this:

`Array(4) -> ["LEIA", "ANAKIN", "LUKE", "OBI WAN KENOBI"]`

But how does it work? Let's dive more into it.

## Let's talk about the callback parameters

The callback is the function that the Array.map() method accepts, it can be an anonymous function or an already declared function with the following parameters which, by the way, you can name as you please:

1- **currentValue**: As the name suggest, it's the current element of the array being evaluated and waiting for your function to replace it with a new value in the new array (same index of course).

2- **index**: It equals to the numeric index of currentValue, say you are in "Anakin", that means index, at the time, will equal to **1**.

3- **array**: The array that's calling the method, in this case, it's referring to **names**.

Examples work better than loose explanations, now we can make our callback function turn.

`["Leia", "Anakin", "Luke", "Obi Wan Kenobi"]` into `["My name is Leia, I'm #1", "My name is Anakin, I'm #2", "My name is Luke, I'm #3", "And last but not less important, I'm #4 Obi Wan Kenobi"]`

Sounds interesting and complex huh? It's actually not if you put the first two parameters to use.

    var jediMasters = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
    var jediMastersSayHi = jediMasters.map(function(jediName, jediIndex) {
      if (jediName === "Obi Wan Kenobi") {
        return "And last but not less important, I'm #" + (jediIndex + 1) + " " + jediName;
      } else {
        return "My name is " + jediName + ", I'm #" + (jediIndex + 1);
      }
    }); // We're done mapping, now console.log the whole thing.

If we now console out the values of the two arrays, we get this:

![Map in action](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4aa89d7b3d1df11e84f95035a1c05f9680111775.png)

If you are asking why one of the values in the string concatenation is `(jediIndex + 1)`, that's because **indices are 0-based**, we would get 0, 1, 2 and 3 for our Jedi's and that's not cool. Check that IF statement just sitting there, what does it do? Simple, it checks if the current Jedi is Obi Wan, if it is, then the new value of that element of the array (the new one) should be different from the rest.

It's important to note that **we can write the function outside the map method** and call it with the name's function. Let's one more time re-write our code and see how we can achieve this (I think it's cleaner):

    function sayHi(jedi, index) {
      if (jedi === "Obi Wan Kenobi") {
        return "And last but not less important, I'm #" + (index + 1) + " " + jedi;
      } else {
        return "My name is " + jedi + ", I'm #" + (index + 1);
      }
    }

    var jediMasters = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
    var jediMastersSayHi = jediMasters.map(sayHi); // We're done mapping, now console.log the whole thing.

We can use map in strings and other types of objects if we use `Array.prototype.call(objectToBeMapped, callbackFunction)`, for more examples, go look other sites and practise it.
