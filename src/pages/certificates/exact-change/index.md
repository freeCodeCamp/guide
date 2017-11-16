---
title: Exact Change
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/" rel="help">**`Read-Search-Ask`**</a> if you get stuck. Try to pair program![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation: ###

Design a cash register algorithm that accepts purchase price as the first argument, payment as the second argument, and a two-dimensional listing of available currency as the third argument.

Return the `Insufficient Funds` if cash-in-drawer is less than the change due. Return the `Closed` if cash-in-drawer is equal to the change due. Otherwise, return change in coins and bills, sorted in highest to lowest order.

#### Relevant Links ####

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" rel="nofollow">JavaScript Object</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1 ##

* Determine whether the total value of coins and bills in the cash-in-drawer (third argument) is sufficient to return the change due - If the total is less than or equal to the change due return respective values instead of proceeding with any computations.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2 ##

* The cash-in-drawer array consists only of denomination's language representation and its corresponding aggregate. Hence, construct an associate between denomination value and its language representation to determine the number of coins/notes that each denomination holds.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3 ##

* Attain as mush as change from one denomination before moving to the next smaller denomination - start from highest denomination.

> _try to solve the problem now_

## Spoiler Alert! ##

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":warning:")

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution: ##

```javascript
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

      // Handle obvious insufficient funds
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

          // Round change to the nearest hundredth deals with precision errors
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
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/CLoj/0" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

First, the CID array is transformed into a drawer object. Then we handle the conditions of exact change and insufficient funds. Then we loop through the denomination array and update the change and values while there is still money of this type in the drawer and while the denomination is larger than the change remaining. Then we add this denomination to the output only if any was used. Finally, if there are no elements in *change_arr* or we have leftover change, return the string "Insufficient Funds".

#### Relevant Links ####

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="nofollow">JavaScript Array.prototype.reduce()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements#Iterations" target="_blank" rel="nofollow">JavaScript Iterators</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank" rel="nofollow">JavaScript Array.prototype.push()</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution: ##

```javascript
    function checkCashRegister(price, cash, cid) {

      // Here is your change, ma'am.
      const change = [];

      // denomination map
      const map = {
        'ONE HUNDRED' : 100,
        'TWENTY'      : 20,
        'TEN'         : 10,
        'FIVE'        : 5,
        'ONE'         : 1,
        'QUARTER'     : 0.25,
        'DIME'        : 0.10,
        'NICKEL'      : 0.05,
        'PENNY'       : 0.01
      };

      const total = cid.reduce((aggregate, counter) => aggregate + counter[1], 0);

      const drawer = Array.prototype.concat.apply([], cid);

      let balance = cash - price;

      if (total < balance) {
        return 'Insufficient Funds';
      }

      if (total === balance) {
        return 'Closed';
      }

      Object.keys(map).forEach(key => {

        const counter = drawer[drawer.indexOf(key) + 1];
        const reduction = Math.floor(balance / map[key]) * map[key];

        if (reduction >= counter) {
          change.push([key, counter]);
          balance = Math.round((balance - counter) * 100) / 100;
        } else if (reduction > 0) {
          change.push([key, reduction]);
          balance = Math.round((balance - reduction) * 100) / 100;
        }

      });

      return (balance === 0) ? change : 'Insufficient Funds';

    }

    // test here
    checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="hhttps://repl.it/@ashenm/Exact-Change-Intermediate" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

* A constructed mapping of denomination's language representation to its numeric value is stored in *map*.
* The variable *total* hold the computed sum of all coins and bills.
* The two-dimensional *cid* array is converted to an one-dimensional array and the result is stored in *drawer*.
* The balance due stored in *balance* is checked against the the total cash-in-drawer *total* and terminated early returning respective return values if it's less than or equal to the *total*.
* Compute the maximum attainable change value for each denomination in *map* looping through the same order *map* was initialised (highest to lowest) while deducting the attained change from *balance*.

#### Relevant Links ####
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="nofollow">JavaScript Array.prototype.reduce()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" rel="nofollow">JavaScript Array.prototype.concat()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="nofollow">JavaScript Object.keys()</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution: ##

```javascript
    function checkCashRegister(price, cash, cid) {

      // Here is your change, ma'am.
      const change = [];

      // the drawer
      const drawer = {
        TOTAL: 0
      };

      // currency map
      const map = {
        'ONE HUNDRED' : 100,
        'TWENTY'      : 20,
        'TEN'         : 10,
        'FIVE'        : 5,
        'ONE'         : 1,
        'QUARTER'     : 0.25,
        'DIME'        : 0.10,
        'NICKEL'      : 0.05,
        'PENNY'       : 0.01
      }

      // balance due
      let balance = cash - price;

      // initialise cid as an object
      cid.forEach(element => {
        drawer.TOTAL += element[1];
        drawer[element[0]] = element[1];
      });

      if (drawer.TOTAL < balance) {
        return 'Insufficient Funds';
      }

      if (drawer.TOTAL === balance) {
        return 'Closed';
      }

      Object.keys(map).forEach(key => {

        const reduction = Math.floor(balance / map[key]) * map[key];

        if (reduction >= drawer[key]) {
          change.push([key, drawer[key]]);
          balance = Math.round((balance - drawer[key]) * 100) / 100;
        } else if (reduction > 0) {
          change.push([key, reduction]);
          balance = Math.round((balance - reduction) * 100) / 100;
        }

      });

      return (balance === 0) ? change : 'Insufficient Funds';

    }

    // test here
    checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href="https://repl.it/@ashenm/Exact-Change-Advanced" target="_blank" rel="nofollow">Run Code</a>

### Code Explanation: ###

* A constructed mapping of denomination's language representation to its numeric value is stored in *map*.
* Construct a hash map (JavaScript Object) from *cid* with supplementary property *TOTAL* - total cash-in-drawer - and store it in *drawer*.
* The balance due stored in *balance* is checked against the the total cash-in-drawer *drawer.TOTAL* and terminated early returning respective return values if it's less than or equal to the total cash-in-drawer.
* Compute the maximum attainable change value for each denomination in *map* looping through the same order *map* was initialised (highest to lowest) while deducting the attained change from *balance*.

#### Relevant Links ####
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="nofollow">JavaScript Array.prototype.reduce()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" rel="nofollow">JavaScript Array.prototype.concat()</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="nofollow">JavaScript Object.keys()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS: ##

* ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
* Add an explanation of your solution.
* Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
* Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272" target="_blank" rel="nofollow">**`Wiki Challenge Solution Template`**</a> for reference.