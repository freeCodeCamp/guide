---
title: Files and IO
---
## Files and IO
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
You can perform IO operations on a file with the ``` open('filename', 'mode') ``` method. The first argument ```'filename'``` is the name of the file you're trying to access, and the second argument ```'mode'``` describes how you want to use the file. 
#### Make sure your file is in the same directory as your python script!
When ```'mode'``` is ```'r'```, the file will only be read by your Python program, and won't be changed. When ```'mode'``` is ```'w'```, the file will be written to. Be careful when using this mode; Python will completely erase your file and your file will only include what you write to the file from your Python program. When ```'mode'``` is ```'a'```, the file will be appended to - this means that the file contents will be preserved, and your Python program will add whatever you write to the end of the file. If you don't provide the second ```'mode'``` argument, Python will assume the ```'mode'``` is ```'r'```. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://docs.python.org/3/tutorial/inputoutput.html
