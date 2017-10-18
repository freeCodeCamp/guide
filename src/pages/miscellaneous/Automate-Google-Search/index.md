---
title: Automate Google Search
---
## Automate Google Search

This python script searches Google on your default web browser for the selected text selected by user.

It automates the task of 
1. copying the errors in terminal 
2. pasting,search them in browser search box.

This script works with Autokey application.Download Autokey application by following steps given [here](https://askubuntu.com/questions/801164/how-do-install-autokey)

1. Open Autokey application,click on "New" button,select "Script" option from it.Add desired name to script,click OK.
2. Now paste the script in textbox with comment "#Enter script code".
3. Select "Set" option for setting hotkey.Click on "Press to set" button and press desired set of keys(example <ctrl> + <e>).
4. You are good to go.Select text and press your hotkey and boom,your selected text will be searched on gooogle.Yayy!

Python script:

```
import os
import webbrowser

new = 2 # open in a new tab, if possible
var = os.popen('xsel').read()

url = "https://google.com/search?q=" + var
webbrowser.open(url,new=new)
```
