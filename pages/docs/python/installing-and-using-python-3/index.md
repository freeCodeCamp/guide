---
title: "Installing and Using Python 3"
parent: "python"
---

You can download Python from this official [link](https://www.python.org/downloads/). Based on your OS (Windows or Linux or OSX), you might want to install Python 3 following [these instructions](http://docs.python-guide.org/en/latest/starting/installation/).

It is always a great idea to [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) your Python installation; and keeping it separate from your _System Python_. The _System Python_ is the path to Python interpreter, which is used by other modules installed along with your OS.

It's **not safe** to install Python Web-frameworks or libraries directly using _System Python_. Instead, you can use [Virtualenv](https://virtualenv.readthedocs.org/en/latest/) to create and spawn a separate Python process when you are developing Python applications.

The [Virtualenvwrapper module](https://virtualenvwrapper.readthedocs.org/en/latest/) makes it easy for you to manage and sandbox multiple Python sandboxed environments in one machine; without corrupting any modules or services written in Python and used by your machine.

Of course, most cloud hosted development environment such as [Nitrous](https://www.nitrous.io/) or [Cloud9](https://c9.io/) also comes with these pre-installed and ready for you to get coding! You can quickly pick a box from your dashboard, and start coding after activating a Python 3 environment.

In [Cloud9](https://c9.io/), you need to select the Django box while creating a new development environment.

A few shell command examples would follow. If you wish to copy-paste, do note that the `$` sign is a shorthand for the terminal prompt, it's not part of the command. My terminal prompt looks something like this:

    alayek:~/workspace (master) $

And, an `ls` would look like

    alayek:~/workspace (master) $ ls

But, while writing the same in this documentation, I would be writing it as

    $ ls

Getting back to our discussion, you can create a Python 3 interpreter-included sandbox on Cloud9 by running on your cloud terminal:

    $ mkvirtualenv py3 --python=/usr/bin/python3

You have to run it only once after creating a new box for your project. Once executed, this command would create a new sandboxed virtualenv ready for you to use, named `py3`.

To view available virtual environments, you can use

    $ workon

To activate `py3`, you can use the `workon` command with the name of the environment:

    $ workon py3

All three terminal commands above would also work on local Linux machines or OSX machines. These are [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction) commands; so if you are planning on using them, make sure you have this module installed and added to `PATH` variable.

If you are inside a virtual environment; you can easily find that out by checking your terminal prompt. The environment name would be clearly shown in your terminal prompt.

For instance, when I am inside the `py3` environment; I would be seeing this as my terminal prompt:

    (py3)alayek:~/workspace (master) $

Notice the `(py3)` in braces! If for some reason, you are not seeing this, even if you are inside a virtual env; you can try doing one of the things [mentioned here](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv).

To get out of a virtual environment; or to deactivate one - use the command

    $ deactivate

Again, this works only with virtualenvwrapper module.
