---
title: Python 2 vs Python 3
---
We aren't taking a side in the debate. If you are interested in knowing more about it for academic purposes, perhaps <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>this</a> would intrigue you.

But, we cannot also be ignorant of the fact that there are two major flavors of Python out there. Why shoud you care, you ask? Because code written for one version of Python can result in a syntax error in another version of Python.

The following is a valid `print` statement in Python 2, but does not work on Python 3:

    print "Hello World"

In Python 3, the same statement throws an error like this:

    >>> print "hello"
      File "<stdin>", line 1
        print "hello"
                    ^
    SyntaxError: Missing parentheses in call to 'print'
    
In Python 2, “print” is treated as a statement rather than a function. There is no need to wrap the text you want to print in parentheses, although you can if you want.
Python 3 explicitly treats “print” as a function, which means you have to pass the items you need to print to the function in parentheses in the standard way, or you will get a syntax error

Using the `print()` function is 'safe' in both Python 2 and 3:

```python
print("Hello World")
```

We won't be diverted in our discussion any further trying to document all these differences, but <a href='http://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html' target='_blank' rel='nofollow'>this</a> might be of interest to you, if you are interested.

Both Python 2 and Python 3 are cool. Most Linux and macOS distributions come pre-installed with Python 2 as the default version of Python. And Python 3 was born out of the insatiable quest for more readable and more beautiful language constructs.

The only question you need to concern yourself with right now is, which one you should pick? Yes, it takes time to even get familiar with the most common aspects with either version Python, and your time is important, so invest your time and effort wisely!

If you are new to Python, you should pick Python 3\. Python 2 will <a href='https://www.python.org/dev/peps/pep-0373/#release-schedule' target='_blank' rel='nofollow'>not</a>be supported past 2020\.
While Python 2 is well-supported and popular, most common libraries and frameworks in Python prefer Python 3\. Django officially <a href='https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support' target='_blank' rel='nofollow'>recommends</a> Python 3\. Flask and all its dependencies are also <a href='http://flask.pocoo.org/docs/0.10/python3/#python3-support' target='_blank' rel='nofollow'>supported</a> on Python 3.

This article uses Python 3 to set up the web-frameworks in your development environment. But before that, you need to ensure you have Python 3 and know how to use it!



#### More Information:

- <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>Additional Reference</a>
