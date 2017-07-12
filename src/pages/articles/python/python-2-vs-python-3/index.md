---
title: Python 2 Vs Python 3
---
No, we wouldn't be taking a side in the debate. If you are interested in knowing more about it for academic purposes, perhaps [this](https://wiki.python.org/moin/Python2orPython3) would intrigue you.

But; we cannot also be ignorant of the fact that there are two major flavors of Python out there. Why do we care, you ask? Well, because code written adhering to one style; would simply result in syntax error in interpreter of other flavor of Python.

The following is a valid `print` statement in Python 2, but would not work on Python 3 -

    print "Hello World"

In Python 3, this would throw an error somewhat like this:

    >>> print "hello"
      File "<stdin>", line 1
        print "hello"
                    ^
    SyntaxError: Missing parentheses in call to 'print'

We won't be diverted in our discussion any further trying to document all these differences - but [this](http://spartanideas.msu.edu/2014/06/01/the-key-differences-between-python-2-7-x-and-python-3-x-with-examples/) might of interest to you, if you are into it.

Both Python 2 and Python 3 are cool. Most Linux and OSX distributions come pre-installed with Python 2 as the default Python. And Python 3 was born out of the insatiable quest of more readable, more beautiful language construct.

So, the only question you need to concern yourself with right now; is which one you should pick. Yes, it takes time to even get familiar with most common aspects with either Python; and your time is important. So, invest your time and effort wisely!

If you are new to Python; you should pick Python 3\. While Python 2 is well-supported and popular; most common libraries and frameworks in Python prefer Python 3\. Django officially [recommends](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) Python 3\. Flask and all its dependencies are also [supported](http://flask.pocoo.org/docs/0.10/python3/#python3-support) on Python 3.

This article would use Python 3 to set up the web-frameworks in your development environment. But before that, let's ensure we have Python 3 and we know how to use it!