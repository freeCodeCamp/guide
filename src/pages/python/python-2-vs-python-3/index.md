---
title: Python 2 Vs Python 3
---
We won't be taking sides in the debate over whether Python 2 or Python 3 is ultimately better. The differences are nuanced and if you are interested in knowing more about it for academic purposes, you can read this helpful <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>wiki</a>.

But we must be aware that programmers use two major flavors of Python. We care because code written in Python 2 would likely result in syntax errors if interpreted as Python 3. 

The following is a valid `print` statement in Python 2, but would not work on Python 3 -

    print "Hello World"

In Python 3, this would throw an error somewhat like this:

    >>> print "hello"
      File "<stdin>", line 1
        print "hello"
                    ^
    SyntaxError: Missing parentheses in call to 'print'

We won't be diverted in our discussion any further trying to document all these differences - but <a href='http://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html' target='_blank' rel='nofollow'>this</a> might of interest to you, if you are into it.

Both Python 2 and Python 3 are widely used. Most Linux and OSX distributions come pre-installed with Python 2 as the default Python. The <a href='https://www.python.org/psf/' target='_blank' rel='nofollow'>Python Sofware Foundation</a> values backwards compatibility in their updates to the programming language but felt that these updates to python were numerous and important enough to break compatibility. 

If you are new to Python then you need to consider which version of Python to invest your time learning. Yes, it takes time to become familiar with most common aspects with either Python; and your time is important. So, invest your time and effort wisely!


Soon after the release of Python 3 there were few libraries to suppot it compared to Python 2. The newer version of Python did not have a robust ecosystem that made it easy for programmers which resulted in most programmers sticking to Python 2. But as the years passed there are more libraries written for Python 3 and the number of Python 3 coders is steadily rising. Django officially <a href='https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support' target='_blank' rel='nofollow'>recommends</a> Python 3\. Flask and all its dependencies are also <a href='http://flask.pocoo.org/docs/0.10/python3/#python3-support' target='_blank' rel='nofollow'>supported</a> on Python 3.
