<article id="wikiArticle">

The **`test()`** method executes a search for a match between a regular expression and a specified string. Returns `true` or `false`.

## Syntax

    regexObj.test(str)

### Parameters

`str`

The string against which to match the regular expression.

### Returns

`true` if there is a match between the regular expression and the specified string; otherwise, `false`.

## Description

Use `test()` whenever you want to know whether a pattern is found in a string. `test()` returns a boolean, unlike the [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "The search() method executes a search for a match between a regular expression and this String object.") method, which returns the index (or -1 if not found). To get more information (but with slower execution), use the [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null.") method (similar to the [`String.prototype.match()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match "The match() method retrieves the matches when matching a string against a regular expression.") method). As with [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null.") (or in combination with it), `test()` called multiple times on the same global regular expression instance will advance past the previous match.

## <span class="highlight-span">Examples</span>

### Using `test()`

Simple example that tests if "hello" is contained at the very beginning of a string, returning a boolean result.

    var str = 'hello world!';
    var result = /^hello/.test(str);
    console.log(result); // true

The following example logs a message which depends on the success of the test:

    function testinput(re, str) {
      var midstring;
      if (re.test(str)) {
        midstring = ' contains ';
      } else {
        midstring = ' does not contain ';
      }
      console.log(str + midstring + re.source);
    }

### Using `test()` on a regex with the global flag

If the regex has the global flag set, `test()` will advance the `[lastIndex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)` of the regex. A subsequent use of `test()` will start the search at the substring of `str` specified by [`lastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.") ([``exec()``](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec "The exec() method executes a search for a match in a specified string. Returns a result array, or null.") will also advance the [`lastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.") property).

The following example demonstrates this behaviour:

    var regex = /foo/g;

    // regex.lastIndex is at 0
    regex.test('foo'); // true

    // regex.lastIndex is now at 3
    regex.test('foo'); // false

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
