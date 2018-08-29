---
title: Mac OS Terminal
---


# Using the Terminal in Mac OS

Most of the time users interact through a Graphical User Interface to interact with the computer. You use the mouse to point and click to open, move, or create new files or open applications. But, you can also use the Terminal Application to interact with your machine through written commands. When you use the terminal, it allows you to dig deeper and customize in a way not possible through the GUI. 

### Opening the Terminal and Navigating Directories
Your terminal exists in the Applications directory. Open your Terminal app. You should see a prompt in the terminal window. it shoudl have the computer's name (ABC's Macbook), followed by the User name (ABC), and then a '$.' If you are in the root directory, the last character will be a '#.'

To see what directory you are working in, just type the command 

```pwd```

pwd stands for "Print Working Directory." Directory is another word for folder. 

If you want to list the contents of your directory use the command: 

```ls```

To switch to a new directory you use the command: 

```cd```

which stands for change directory. 

Here is a list of common commands:

Command | Usage
------------ | -------------
pwd | Print Working Directory (Where Am I? )
ls | List contents of current directory
mkdir | Create a new directory
touch | Create a new file
cp| Copy a file 
rm | Remove a file 
rm -rf | Remove a directory 

### Usage Examples

Some of the aforementioned commands aren't clear without examples. Below are a few usage examples to help provide you with some context. 

#### Making a Directory

```mkdir #YOUR-NEW-FOLDER-NAME-HERE```

#### Making a File 

``` touch YOUR-FILE-NAME.JS```

You can make a file with any extension you choose. As long as it is in an a format accepted by the folder or machine.

#### Copying a File 

Use the following syntax to copy a file from the terminal:

**cp _source_ _destination_**

For example, if we have a file, _'test.txt'_ that is stored in our _/Desktop_ directory and we want to copy it to the _/Documents_ folder, our command would look like this: 

    cp ~/Desktop/test.txt ~/Documents

#### Deleting a File 

Use the following syntax to delete a file 

**rm _#PATH_TO_FILE_**





