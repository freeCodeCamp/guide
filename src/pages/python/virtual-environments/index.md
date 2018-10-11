---
title: Virtual Environments
---

## Virtual Environemnts

Virtual environments can be described as isolated installation directories. This isolation allows you to localized the installation of your project's dependencies, without forcing you to install them system-wide.

Imagine you have two applications App1 and App2. Both require the package Pak, but with different versions. If you install Pak version 2.3 for App1, you would not be able to run App2, because it requires version 3.1. Here is when virtual environments come in handy.

Benefits:
* You can have multiple environments, with multiple sets of packages, without conflicts among them. This way, different projects' requirements can be satisfied at the same time.
* You can easily release your project with its own dependent modules.

Here are two ways you can create Python virtual environments.

## Virtualenv

[`virtualenv`](https://virtualenv.pypa.io/en/stable/) is a tool used to create isolated Python environments. It creates a folder which contains all the necessary executables to use the packages that a Python project would need.

You can install it with `pip`:
```
pip install virtualenv
```

Verify the installation with the following command:
```
virtualenv --version
```

### Create an Environemnt

To create a virtual environment use:
```
virtualenv --no-site-packages my-env
```

This creates a folder in the current directory with the name of the environment (`my-env/`). This folder contains the directories for installing modules and Python executables.

You can also specify the Python version you want to work with. Just use the argument `--python=/path/to/python/version`. For instance, `python2.7`:
```
virtualenv --python=/usr/bin/python2.7 my-env
```

### List Environments

You can list the available environments with:
```
lsvirtualenv
```

### Activate an Environment

Before you can start using the environment you need to activate it:
```
source my-env/bin/activate
```

This ensures that only packages under `my-env/` are used.

You will notice that the name of the environment is shown on the left of the prompt. This way you can see which is the active environment.

### Install Packages

You can install packages one by one, or by setting a `requirements.txt` file for your project.
```
pip install some-package
pip install -r requirements.txt
```

If you want to create a `requirements.txt` file from the already installed packages, run the following command:
```
pip freeze > requirements.txt
```

The file will contain the list of all the packages installed in the current environment, and their respective versions. This will help you release your project with its own dependent modules.


### Deactivate an Environment

If you are done working with the virtual environment you can deactivate it with:
```
deactivate
```

This puts you back to the system’s default Python interpreter with all its installed libraries.

### Delete an Environment

Simply delete the environment folder.


## Conda

[`Conda`](https://conda.io/docs/index.html) is a package, dependency and environment management for many languages, including Python.

To install Conda, follow these [instructions](https://conda.io/docs/user-guide/install/index.html).

### Create an Environment

To create a virtual environment use:
```
conda create --name my-env
```

Conda will create the corresponding folder inside the Conda installation directory.

You can also specify which version of Python you want to work with:
```
conda create --name my-env python=3.6
```

### List Environments

You can list all the available environments with:
```
conda info --envs
```

### Activate an Environment

Before you can start using the environment you need to activate it:
```
source activate my-env
```

### Install Packages

The same as with `virtualenv`.

### Deactivate an Environment

If you are done working with the virtual environment you can deactivate it with:
```
source deactivate
```

### Remove an Environment

If you want to remove an environment from Conda use:
```
conda remove --name my-env
```

#### More Information:
* `virtualenv` [official website](https://virtualenv.pypa.io/en/stable/)
* `Conda` [official website](https://conda.io/docs/index.html)
* `The Hitchhicker's Guide to Python` - [Pypenv & Virtual Environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
