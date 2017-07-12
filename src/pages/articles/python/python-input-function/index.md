---
title: Python Input Function
---
Many a time, in a program we need some input from the user. Taking inputs from the user makes the program feel interactive. In Python 3, to take input from the user we have a function `input()`. Let's see some examples:

1.  When we just want to take the input:

    # This will just give a prompt without any message
    inp = input()

[Run Code](https://repl.it/CUqX/0) ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:")

1.  To give a prompt with a message:

    prompt_with_message = input('<Your prompt message should appear here>')
    # <Your prompt message should appear here> _
    # The '_' in the output is the prompt

[Run Code](https://repl.it/CUqX/1) :rocket: 3\. When we want to take an integer input:  

    number = int(input('Please enter a number: '))

[Run Code](https://repl.it/CUqX/2) :rocket: If you enter a non integer value then Python will throw an error `ValueError`. **So whenever you use this, please make sure that you catch it too.** Otherwise, your program will stop unexpectedly after the prompt.  

    number = int(input('Please enter a number: '))
    # Please enter a number: as
    # Enter a string and it will throw this error
    # ValueError: invalid literal for int() with base 10 'as'

4\. When we want a string input:  

    string = str(input('Please enter a string: '))

[Run Code](https://repl.it/CUqX/3) ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:")

Though, inputs are stored by default as a string. Using the `str()` function makes it clear to the code-reader that the input is going to be a 'string'. It is a good practice to mention what type of input will be taken beforehand.

[Official Docs](https://docs.python.org/3/library/functions.html#input)