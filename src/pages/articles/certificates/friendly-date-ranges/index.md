---
title: Friendly Date Ranges
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

Create a program that will take two dates and convert them into a more easy to understand date such as `January 1st, 2017`. It will also check the difference between them, and handles cases with no difference, more than a day, more than a month, more than a year, and more than a month and less than a year respectively.

#### Relevant Links

*   [Global Object Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Split the string into an array where you get "YYYY", "MM", "DD".

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

You need to handle the case for "st", "nd", and "th". Note that 13 is "th" not "rd".

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

If you are using `Date()` to create instances of dates to work with, then use UTC time to avoid errors due to time zone difference between servers.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function makeFriendlyDates(str) {

      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      // Convert a YYYY-MM-DD string into a date object.
      function convertDate(str) {
        // Split the dates to work independently.
        var dateStr = str.split('-');

        // Force the dates into Universal time to avoid issues due to timezones.
        return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

      }

      // Handles the case of the day's endings.
      function dateEnding(val) {
        switch (val) {
          case 1:
          case 21:
          case 31:
            return val + 'st';
          case 2:
          case 22:
            return val + 'nd';
          case 3:
          case 23:
            return val + 'rd';
          default:
            return val + 'th';
        }
      }

      // Checks for the real difference in months to avoid errors
      function monthDiff(date1, date2) {
        var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
        var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
        return month2 - month1;
      }

      //day diff
      function dayDiff(date1, date2) {
        if(date2.getUTCMonth() === date1.getUTCMonth()){
          return date1.getUTCDate()-date2.getUTCDate();
        }
        return 0;
      }

      // Get's the right month string.
      function getMonth(date) {
        return months[date.getUTCMonth()];
      }

      function displayDate() {

        // Handles same day
        if (date2.getTime() - date1.getTime() === 0) {
          return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
        }

        // Handles same month
        if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
          return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
        }

        // Handles more than a month of difference, but less than 12 months and different year
        if (monthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear() ) {
          return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
        }

        // Handles same month but different year
        if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
          return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
        }

        // Handles more than a month of difference, but less than 12 months and same year
        if (monthDiff(date1, date2) < 12) {
          return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
        }

        // Handles cases with more than 12 months apart.
        return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
      }

      var date1 = convertDate(str[0]);
      var date2 = convertDate(str[1]);

      return displayDate();

    }

    // test here
    makeFriendlyDates(['2016-07-01', '2016-07-04']);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") [Run Code](https://repl.it/CLos/0)

### Code Explanation:

*   The function `convertDate()` converts a string in the format YYYY-MM-DD to a date object.
    *   `split()` the dates on **-** to work independently.
    *   Force the dates into universal time to avoid timezone issues.
*   The function `dateEnding()` handles day's ending i.e., appending **st**, **nd**, **rd** or **th**.
*   The function `monthDiff()` checks the real difference in month to avoid errors.
*   The function `dayDiff()` checks the real difference in day to avoid errors.
*   The function `getMonth()` returns month string for particular date.
*   The function `displayDate()` displays the date correctly. Following provisions are made:
    *   Handles same day.
    *   Handles same month.
    *   Handles more than a month of difference, but less than 12 months and different year.
    *   Handles same month but different year.
    *   Handles more than a month of difference, but less than 12 months and same year.
    *   Handles cases with more than 12 months apart.

#### Relevant Links

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Date.UTC()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)
*   [Date.prototype.getUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
*   [Date.prototype.getUTCMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
*   [Date.prototype.getUTCDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
*   [Date.prototype.getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.