---
title: Python virtualenv
---
[virtualenv](https://virtualenv.pypa.io/en/stable/) is a tool to create isolated Python environments. [virtualenv](https://virtualenv.pypa.io/en/stable/) creates a folder which contains all the necessary executables to use the packages that a Python project would need.

## Installation
Install virtualenv via [pip](https://pypi.python.org/pypi/pip):  
```bash
pip install virtualenv
```

Test your installation
```bash
virtualenv --version
```

## Usage
1. Create a virtual environment for a project:
```bash
cd my_project_folder
virtualenv my_project
```

`virtualenv my_project` will create a folder in the current directory which will contain the Python executable files, and a copy of the pip library which you can use to install other packages. The name of the virtual environment (in this case, it was my_project) can be anything; omitting the name will place the files in the current directory instead.

This creates a copy of Python in whichever directory you ran the command in, placing it in a folder named `my_project`.

You can also use the Python interpreter of your choice (like python2.7).
```bash
virtualenv -p /usr/bin/python2.7 my_project
```
or change the interpreter globally with an env variable in ~/.bashrc:
```bash
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python2.7
```
2. To begin using the virtual environment, it needs to be activated:
```bash
source my_project/bin/activate
```
The name of the current virtual environment will now appear on the left of the prompt (e.g. `(my_project)Your-Computer:your_project UserName$)` to let you know that it’s active. From now on, any package that you install using pip will be placed in the my_project folder, isolated from the global Python installation.   
Install packages as usual, for example:
```bash
pip install requests
```
3. If you are done working in the virtual environment for the moment, you can deactivate it:
```bash
deactivate
```

This puts you back to the system’s default Python interpreter with all its installed libraries.

To delete a virtual environment, just delete its folder. (In this case, it would be `rm -rf my_project`.)

After a while, though, you might end up with a lot of virtual environments littered across your system, and its possible you’ll forget their names or where they were placed.

Running `virtualenv` with the option `--no-site-packages` will not include the packages that are installed globally. This can be useful for keeping the package list clean in case it needs to be accessed later. [This is the default behavior for `virtualenv` 1.7 and later.]

In order to keep your environment consistent, it’s a good idea to “freeze” the current state of the environment packages. To do this, run
```bash
pip freeze > requirements.txt
```

This will create a `requirements.txt` file, which contains a simple list of all the packages in the current environment, and their respective versions. You can see the list of installed packages without the requirements format using “pip list”. Later it will be easier for a different developer (or you, if you need to re-create the environment) to install the same packages using the same versions:

```bash
pip install -r requirements.txt
```

This can help ensure consistency across installations, across deployments, and across developers.

Lastly, remember to exclude the virtual environment folder from source control by adding it to the ignore list.




