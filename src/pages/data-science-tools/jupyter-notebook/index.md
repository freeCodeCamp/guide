---
title: Jupyter Notebook
---
# Jupyter Notebook


![Jupyter Notebook](http://jupyter.org/assets/jupyterpreview.png)

The Jupyter Notebook App is a server-client application that allows editing and running notebook documents via a web browser. The Jupyter Notebook App can be executed on a local desktop requiring no internet access or can be installed on a remote server and accessed through the internet.

## Features
* The Notebook has support for over 40 programming languages, including Python, R, Julia, and Scala.
* Notebooks can be shared with others using email, Dropbox, GitHub and the Jupyter Notebook Viewer.
* Your code can produce rich, interactive output: HTML, images, videos, LaTeX, and custom MIME types.
* Leverage big data tools, such as Apache Spark, from Python, R and Scala. Explore that same data with pandas, scikit-learn, ggplot2, TensorFlow.

Its two main components are the kernels and a dashboard.

* A kernel is a program that runs and introspects the user’s code. The Jupyter Notebook App has a kernel for Python code, but there are also kernels available for other programming languages.

* The dashboard of the application not only shows you the notebook documents that you have made and can reopen but can also be used to manage the kernels: you can which ones are running and shut them down if necessary.


## Installing Jupyter Notebook
Prerequisite: Python

While Jupyter runs code in many programming languages, Python is a requirement (Python 3.3 or greater, or Python 2.7) for installing the Jupyter Notebook.

### Installing Jupyter using Anaconda and conda
Anaconda conveniently installs Python, the Jupyter Notebook, and other commonly used packages for scientific computing and data science.

Use the following installation steps:

1.Download [Anaconda](https://www.anaconda.com/download/).

2.Install the version of Anaconda which you downloaded, following the instructions on the download page.

You have installed Jupyter Notebook.

### Installing Jupyter with pip
Jupyter installation requires Python 3.3 or greater, or Python 2.7. IPython 1.x, which included the parts that later became Jupyter, was the last version to support Python 3.2 and 2.6.

First, ensure that you have the latest pip; older versions may have trouble with some dependencies:

```pip3 install --upgrade pip```

Then install the Jupyter Notebook using:

```pip3 install jupyter```

(Use pip if using legacy Python 2.)

## Running the Notebook

Start the notebook server from the command line:

```jupyter notebook```

You should see the notebook open in your browser.

![](https://jupyter.readthedocs.io/en/latest/_images/tryjupyter_file.png)

The "Files" tab is where all your files are kept, the "Running" tab keeps track of all your processes and the third tab, "Clusters", is provided by IPython parallel, IPython's parallel computing framework. It allows you to control many individual engines, which are an extended version of the IPython kernel.

You can make a new notebook by clicking on the "New button" in the "Files tab". You see that you have the option to make a regular text file, a folder, and a terminal. Lastly, you will also see the option to make a Python 3 notebook.
Note that this last option will depend on the version of Python that you have installed

To run Python code

Click on the cell to select it.

Press ```SHIFT+ENTER``` on your keyboard or press the play button in the toolbar above.
![](https://i.imgur.com/CPCgnBh.png)
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html' target='_blank' rel='nofollow'>Jupyter/IPython Notebook Quick Start Guide</a>

<a href='https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook' target='_blank' rel='nofollow'>Jupyter Notebook Tutorial: The Definitive Guide</a>


=======
The Jupyter Notebook helps you create and share documents containing live code, equations, visualizations and rich text.   
 
You can use it for:
* data cleaning and transformation
* numerical simulation
* statistical modeling
* data visualization
* machine learning

The Jupyter notebook combines two components:

### A web application:  

The Jupyter Notebook App helps to edit and run notebook documents in a web browser,  combining explanatory text, mathematics, computations and rich media.

### Notebook document:

The Jupyter Notebook App can create a 'Notebook document' containing both code and rich text elements. A Notebook document can be both readable and executable.

These documents are produced by the Jupyter Notebook App.

## Jupyter Notebook App
As a server-client application, the Jupyter Notebook App allows you to edit and run your notebooks via a web browser.  
The application can be executed on a PC without Internet access or it can be installed on a remote server, where you can access it through the Internet.  

Its two main components are the kernels and a dashboard.

### Kernels
A kernel is a program that runs and introspects the user’s code. The Jupyter Notebook App has a kernel for Python code, but there are also kernels available for other programming languages.

### Dashboard
The dashboard of the application not only shows you the notebook documents that you have made and can reopen but can also be used to manage the kernels: you can which ones are running and shut them down if necessary.

### How notebooks work
Jupyter notebooks grew out of the IPython project started by Fernando Perez. IPython is an interactive shell, similar to the normal Python shell but with great features like syntax highlighting and code completion. Originally, notebooks worked by sending messages from the web app (the notebook you see in the browser) to an IPython kernel (an IPython application running in the background). The kernel executed the code, then sent it back to the notebook.
![Notebook architecture](https://jupyter.readthedocs.io/en/latest/_images/notebook_components.png)

When you save the notebook, it is written to the server as a JSON file with a **.ipynb** file extension
The new name Jupyter comes from the combination of **Ju**lia, **Py**thon, and **R**. there are a lot of kernels for different languages to use Jupyter. you could check the [list of available Jupyter kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).

### Installing Jupyter Notebook
Jupyter notebooks automatically come with the distribution. You'll be able to use notebooks from the default environment.
To install Jupyter notebooks in a conda environment: `conda install jupyter notebook`
To install Jupyter notebooks with pip: `pip install jupyter notebook`

#### More Information:
* [Jupyter/IPython Notebook Quick Start Guide](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
* [What is Jupyter Notebook by codebasics, duration 8:24](https://www.youtube.com/watch?v=q_BzsPxwLOE)
* [Jupyter Notebook Tutorial / Ipython Notebook Tutorial, by codebasics, duration 24:07](https://www.youtube.com/watch?v=EEEZX_0FMEc)
* [More Information](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)

