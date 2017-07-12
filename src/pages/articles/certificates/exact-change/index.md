---
title: Exact Change
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You have to create a program that will handle when the register does not have enough cash or will have no cash after the transaction. Other than that it needs to return an array of the change in the form of an array, so that will be a 2D array.

#### Relevant Links

*   <a>Data Structure Arrays</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   It is easier to handle if you have to close the register, or if you know how much money is in your register beforehand and you will not have enough money to complete the transaction. For this it is recommended to have a function to assign this information to a variable.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   Life is easier when you get to know the value of each currency type in the register instead of how much money is composed of that particular currency. So be sure to watch out for that.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   You will have to get as much change from one type before moving to the next from greater value to lesser, and keep going until you have covered the whole change.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Beginner Code Solution:

    // Create an object which hold the denominations and their values
    var denom = [
      { name: 'ONE HUNDRED', val: 100.00},
      { name: 'TWENTY', val: 20.00},
      { name: 'TEN', val: 10.00},
      { name: 'FIVE', val: 5.00},
      { name: 'ONE', val: 1.00},
      { name: 'QUARTER', val: 0.25},
      { name: 'DIME', val: 0.10},
      { name: 'NICKEL', val: 0.05},
      { name: 'PENNY', val: 0.01}
    ];

    function checkCashRegister(price, cash, cid) {
      var change = cash - price;

      // Transform CID array into drawer object
      var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      }, {total: 0});

      // Handle exact change
      if (register.total === change) {
        return 'Closed';
      }

      // Handle obvious insufficent funds
      if (register.total < change) {
        return 'Insufficient Funds';
      }

      // Loop through the denomination array
      var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change reminaing
        while (register[curr.name] > 0 && change >= curr.val) {
          change -= curr.val;
          register[curr.name] -= curr.val;
          value += curr.val;

          // Round change to the nearest hundreth deals with precision errors
          change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc; // Return the current Change Array
      }, []); // Initial value of empty array for reduce

      // If there are no elements in change_arr or we have leftover change, return
      // the string "Insufficient Funds"
      if (change_arr.length < 1 || change > 0) {
        return "Insufficient Funds";
      }

      // Here is your change, ma'am.
      return change_arr;
    }

    // test here
    checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLoj/0)

### Code Explanation:

First, the CID array is transformed into a drawer object. Then we handle the conditions of exact change and insufficient funds. Then we loop through the denomination array and update the change and values while there is still money of this type in the drawer and while the denomination is larger than the change reminaing. Then we add this denomination to the output only if any was used. Finally, if there are no elements in `change_arr` or we have leftover change, return the string "Insufficient Funds".

#### Relevant Links

*   [JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduce Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS Array Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.