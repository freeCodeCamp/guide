---
title: How to install Java development Kit (JDK) 8 in Ubuntu Linux
---

# How to install Java development Kit (JDK) 8 in Ubuntu Linux


You’ve probably decided to learn [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) programming language, or want to test programming Java applications on a Linux platform. But before your write any code in Java you must fist get you tools together. 

Aside from a Java text editor or integrated development environment (IDE), and the most important one the Java development kit (JDK). The JDK is essential for developing and testing Java programs.


In this post you'd would be installing the latest version of the JDK (jdk 8). Lets Go!

### STEP 1 – Downloading Java.


Get the JDK from Oracle's website; download the Java JDK [Here](https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html).

Please download or move the downloaded file to your home directory, for easy installation.

### STEP 2 – Extracting

Run the following commands in a terminal – note that installing softwares in Linux is a serious matter so there is need to use the “sudo” command to be able to install Java.

   * Make a “jvm” directory in the libraries folder;

     ```linux
     sudo mkdir -p /usr/lib/jvm/
     ```



 * Move the JDK file from your home directory to the “jvm” folder just created;

   ```linux
   sudo mv jdk-8u112-linux-i586.tar.gz /usr/lib/jvm/
   ```
   

  * Change to the “/usr/lib/jvm” directory;

    ```linux
    cd /usr/lib/jvm/
    ```

  * You should now be in the “/usr/lib/jvm” directory, then extract the java JDK package archive.

    ```linux
    sudo tar zxvf jdk-8u112-linux-i586.tar.gz
    ```

### STEP 3 – Installing and testing Java

Now enable Java (by running the following commands - individually):

```linux
sudo update-alternatives –install “/usr/bin/java” “java” “/usr/lib/jvm/oracle_jdk8/bin/java” 1
```

```linux
sudo update-alternatives –install “/usr/bin/javac” “javac” “/usr/lib/jvm/oracle_jdk8/bin/javac” 1
```

```linux
sudo update-alternatives –install “/usr/bin/javaws” “javaws” “/usr/lib/jvm/oracle_jdk8/bin/javaws” 1
```

Java is now installed! To test that the installation was successful, type this at the command terminal;

```linux
java -version
```

After all the steps properly done, you should get this output:


> java version “1.8.0_112“
> Java(TM) SE Runtime Environment (build 1.8.0_112-b15)
> Java HotSpot(TM) Server VM (build 25.112-b15, mixed mode)



#### Congratulations!!!
