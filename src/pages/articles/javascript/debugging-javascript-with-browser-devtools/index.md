---
title: Debugging javaScript with Browser Devtools
---
As a developer you will often want to debug code. You might have already used `console.log` in some of the challenges, which is the simplest way to debug.

In this article we will tell you some of the coolest tricks, to debug using the native debug-tools of the browsers.

## A brief insight into the FreeCodeCamp Code Editor:

Before jumping into debugging lets leak out some secret facts about that _awesome code checking engine_ at FCC.

We use a customized [CodeMirror](http://codemirror.net/mode/javascript/index.html), as the code editor. A [`eval()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) is used to evaluate the JavaScript code represented as a string from the editor. When `eval()` is called, browsers will natively execute your code. We will learn more why this secret is important in later sections of this article.

## Now moving on to the tricks:

## Google Chrome DevTools

Google Chrome is one of the most popular browsers with a built-in JavaScript engine called [V8](https://developers.google.com/v8/), and offers a great toolset for developers called [Chrome DevTools](https://developer.chrome.com/devtools). Visiting their [Complete JavaScript debugging guide](https://developer.chrome.com/devtools/docs/javascript-debugging) is highly recommended.

### 1 : Basics of DevTools

#### Launching the Chrome DevTools

Hit `F12`

. Alternatively you can press

`Ctrl` + `Shift` + `I`

on Windows and Linux or

`Cmd` + `Shift` + `I`

on Mac, or If you just love your mouse go to `Menu > More Tools > Developer Tools`.

#### Getting to know the `Sources` and the `console` tabs.

These two tabs are the perhaps going to be your best friends while debugging. The `Sources` tab can be used to visualize all the scripts that's on the webpage you are visiting. This tab has sections for the code window, file tree, call stack & watch windows, etc.

The `console` tab is where all of the log output goes. Additionally you can use the console tab's prompt to execute JavaScript code. Its kind of synonymous to the command prompt on Windows, or terminal on Linux.

_Tip : Toggle the console anytime in the DevTools using `Esc` key._

### 2 : Common Shortcuts and features

While you can visit the [complete list of shortcuts](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts), below are a few that are most used:

Feature Windows, Linux Mac  
Search for a keyword, regex is supported. `Ctrl`+`F``Cmd`+`F`  
Search and Open a file `Ctrl`+`P``Cmd`+`P`  
Jump to line `Ctrl`+`G`+`:line_no``Cmd`+`G`+`:line_no`  
Add a breakpoint `Ctrl`+`B`, or click on the line no.`Cmd`+`B`, or click on the line no.  
Pause / resume script execution `F8` `F8`  
Step over next function call `F10` `F10`  
Step into next function call `F11` `F11`

### 3 : Using a Source Map for our Code

One of the coolest feature that you will love is [debugging Dynamic Script](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript), on the fly, via [Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps).

Every script can be visualized in the Source tab of the DevTools. The source tab has all the JavaScript source files. But the code from the code editor is executed via `eval()`in a container simply called a virtual machine(VM) within the browser process.

As you might have guessed by now is that our code is actually a script that doesn't have a file name. So we don't see that in the Source tab.

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ":sparkles:") **_Here comes the hack!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ":sparkles:")

We must leverage `Source Maps` to assign a name to the JavaScript from our editor. Its pretty simple:

Lets say we are on the [Factorialize](http://www.freecodecamp.com/challenges/factorialize-a-number) challenge, and our code looks like this:

    function factorialize(num) {
      if(num <= 1){
      ...
    }
    factorialize(5);

All we need to do is add `//# sourceURL=factorialize.js` to the top of the code, i.e the first line:

    //# sourceURL=factorialize.js

    function factorialize(num) {
      if(num <= 1){
      ...

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ":sparkles:") **_And Eureka that's it!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ":sparkles:")

Now open up the DevTools and search for the file name. Add break points, Debug away and enjoy!