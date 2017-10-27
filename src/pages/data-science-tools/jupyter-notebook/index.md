---
title: Jupyter Notebook
---
## Jupyter Notebook

The notebook is a web application that allows you to combine explanatory text, math equations, code, and visualizations all in one easily sharable document. basically the output is a html file.
You'll find them being used for data cleaning and exploration, visualization, machine learning, and big data analysis
Notebooks are also rendered automatically on GitHub. It’s a great feature that lets you easily share your work.


### How notebooks work
Jupyter notebooks grew out of the IPython project started by Fernando Perez. IPython is an interactive shell, similar to the normal Python shell but with great features like syntax highlighting and code completion. Originally, notebooks worked by sending messages from the web app (the notebook you see in the browser) to an IPython kernel (an IPython application running in the background). The kernel executed the code, then sent it back to the notebook.
![Notebook architecture](https://jupyter.readthedocs.io/en/latest/_images/notebook_components.png)

When you save the notebook, it is written to the server as a JSON file with a **.ipynb** file extension
The new name Jupyter comes from the combination of **Ju**lia, **Py**thon, and **R**. there are a lot of kernels for different languages to use Jupyter. you could check the [list of available Jupyter kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).

### Installing Jupyter Notebook
Jupyter notebooks automatically come with the distribution. You'll be able to use notebooks from the default environment.
To install Jupyter notebooks in a conda environment: **conda install jupyter notebook**
To install Jupyter notebooks with pip: **pip install jupyter notebook**


#### More Information:
<a href='http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html' target='_blank' rel='nofollow'>Jupyter/IPython Notebook Quick Start Guide</a>

