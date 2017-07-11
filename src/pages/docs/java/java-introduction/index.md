---
title: "Java Introduction"
parent: "java"
---

# Java Introduction

**What is Java?**

[Java](https://www.oracle.com/java/index.html) is a programming language developed by [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) in 1995, which got later acquired by [Oracle](http://www.oracle.com/index.html). It's now a full platform with lots of standard APIs, open source APIs, tools, huge developer community and is used to build the most trusted enterprise solutions by big and small companies alike. [Android](https://www.android.com/) application development is done fully with Java and its ecosystem. To know more about Java, read [this](https://java.com/en/download/faq/whatis_java.xml) and [this](http://tutorials.jenkov.com/java/what-is-java.html).

## Version

The latest version is [Java 1.8](http://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html) or Java 8, which was released in 2014 with [various improvements](http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html) over the previous version, Java 7\. This year, Oracle has a target to release Java 9\. But for all intents and purposes, we will use Java 8 in this wiki for all tutorials.

Java is also divided into several "Editions" :

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - Standard Edition - for desktop and standalone server applications
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - for developing and executing Java components that run embedded in a Java server
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - for developing and executing Java applications on mobile phones and embedded devices

## Installation : JDK or JRE ?

Download the latest Java binaries from the [official website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Here you may face a question, which one to download, JDK or JRE? JRE stands for Java Runtime Environment, which is the platform dependent Java Virtual Machine to run Java codes, and JDK stands for Java Development Kit, which consists of most of the development tools, most importantly the compiler `javac`, and also the JRE. So, for an average user JRE would be sufficient, but since we would be developing with Java, we would download the JDK.

## Platform specific installation instructions

### Windows

*   Download the relevant [.msi](https://en.wikipedia.org/wiki/Windows_Installer) file (x86 / i586 for 32bits, x64 for 64bits)
*   Run the .msi file. Its a self extracting executable file which will install Java in your system!

### Linux

*   Download the relevant [tar.gz](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/) file for your system and install :

`bash  
$ tar zxvf jdk-8uversion-linux-x64.tar.gz`   
* [RPM based Linux platforms](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based) download the relevant [.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager) file and install :

`bash  
$ rpm -ivh jdk-8uversion-linux-x64.rpm`   
* Users have the choice to install an open source version of Java, OpenJDK or the Oracle JDK. While OpenJDK is in active development and in sync with Oracle JDK, they just differ in [licensing](http://openjdk.java.net/faq/) stuff. However few developers complain of the stability of Open JDK. Instructions for **Ubuntu** :

Open JDK installation :  
`bash  
sudo apt-get install openjdk-8-jdk` 

Oracle JDK installation :  
`bash  
sudo add-apt-repository ppa:webupd8team/java  
sudo apt-get update  
sudo apt-get install oracle-java8-installer` 

### Mac

*   Either download Mac OSX .dmg executable from Oracle Downloads
*   Or use [Homebrew](http://brew.sh/) to [install](http://stackoverflow.com/a/28635465/2861269) :

`bash  
brew tap caskroom/cask  
brew install brew-cask  
brew cask install java` 

### Verify Installation

Verify Java has been properly installed in your system by opening Command Prompt (Windows) / Windows Powershell / Terminal (Mac OS and *Unix) and checking the versions of Java runtime and compiler :

    $ java -version
    java version "1.8.0_66"
    Java(TM) SE Runtime Environment (build 1.8.0_66-b17)
    Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode)

    $ javac -version
    javac 1.8.0_66

**Tip** : If you get an error such as "Command Not Found" on either `java` or `javac` or both, dont panic, its just your system PATH is not properly set. For Windows, see [this StackOverflow answer](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command) or [this article](http://javaandme.com/) on how to do it. Also there are guides for [Ubuntu](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu) and [Mac](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/) as well. If you still can't figure it out, dont worry, just ask us in our [Gitter room](https://gitter.im/FreeCodeCamp/java)!

## JVM

Ok now since we are done with the installations, let's begin to understand first the nitty gritty of the Java ecosystem. Java is an [interpreted and compiled](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language) language, that is the code we write gets compiled to bytecode and interpreted to run . We write the code in .java files, Java compiles them into [bytecodes](https://en.wikipedia.org/wiki/Java_bytecode) which are run on a Java Virtual Machine or JVM for execution. These bytecodes typically has a .class extension.

Java is a pretty secure language as it doesn't let your program run directly on the machine. Instead, your program runs on a Virtual Machine called JVM. This Virtual Machine exposes several APIs for low level machine interactions you can make, but other than that you cannot play with machine instructions explicitely. This adds a huge bonus of security.

Also, once your bytecode is compiled it can run on any Java VM. This Virtual Machine is machine dependent, i.e it has different implementations for Windows, Linux and Mac. But your program is guranteed to run in any system thanks to this VM. This philosophy is called ["Write Once, Run Anywhere"](https://en.wikipedia.org/wiki/Write_once,_run_anywhere).

## Hello World!

Let's write a sample Hello World application. Open any editor / IDE of choice and create a file `HelloWorld.java`.

    public class HelloWorld {

        public static void main(String[] args) {
            // Prints "Hello, World" to the terminal window.
            System.out.println("Hello, World");
        }

    }

**N.B.** Keep in mind in Java file name should be the **exact same name of the public class** in order to compile!

Now open the terminal / Command Prompt, and compile the file :

    $ javac HelloWorld.java

Now run the file using `java` command!

    $ java HelloWorld
    Hello, World

Congrats! Your first Java program has run successfully. Here we are just printing a string passing it to the API `System.out.println`. We will cover all the concepts in the code, but you are welcome to take a [closer look](https://docs.oracle.com/javase/tutorial/getStarted/application/)! If you have any doubt or need additional help, feel free to contact us anytime in our [Gitter Chatroom](https://gitter.im/FreeCodeCamp/java)!

## Documentation

Java is heavily [documented](https://docs.oracle.com/javase/8/docs/), as it supports huge amounts of API's. If you are using any major IDE such as Eclipse or IntelliJ IDEA, you would find the Java Documentation included within.
