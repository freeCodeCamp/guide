---
title: "Python Using Pip"
parent: "python"
---

We have seen how to use `import` statements to `import` various modules and to use them in our programs. Python itself comes with several built-in modules, but the python community has more to offer.

> Its the modules that makes python so powerful!

Third party modules add so much more functionality to Python. Now we would learn how to install these modules so that we can use those in our programs.

The simplest way is to use `pip`

    pip install <module_name>

If you have used `npm`, then you can think of it as _npm_ of python.

Last time, in <a>`import-statements`</a> wiki we used `requests` module as an example. As it is a third party module we have to install it separately after installing python.

Installing it would be as simple as `pip install requests` . You can even pass various arguments along with it. The one that you'll come across more often is `--upgrade`. You can upgrade a python module by :

    pip install <module_name> --upgrade

For example, to upgrade the requests module to its latest version would be as simple as `pip install requests --upgrade`.

Before using `pip`, you will need to install it (it's quite simple). You can install it from [here](https://bootstrap.pypa.io/get-pip.py)

Just click on the link. And save the file as`get-pip.py` _Please don't forget the `.py` extension._ And run it.

An alternative to using pip would be to try [`easy_install`](https://bootstrap.pypa.io/ez_setup.py).

Using `easy_install` is also simple. The syntax is:

    easy_install <module_name>

However, `pip` is more popular than using `easy_install`.
