---
title: Setting Up Software Repositories
---

<div class="para">Repositories are warehouses of Linux software (deb, RPM package files).</div>

## Red Hat 
RPM package file is a Red Hat Package Manager file and enables quick and easy software installation on Red Hat/CentOS Linux.

# Setting Up Yum Repositories in RedHat CentOS Linux
Step1: Check if there is an existing repo or not<br>
```#yum repolist```
<br>You will find there are no repositories<br>
Step2: Change Directory to-><br>
```#cd /etc/yum.repos.d```
<br>Step3: Create new file<br>
```#vim myrepo.repo```
<br>Step4: Type following lines in file<br>
```
[file-name]
name=filename
baseurl="location of yum repositories"
gpgcheck=0
```
Step5: Save and Exit<br>
Step2: Repeat Step 1<br>
```You Will find repositories```

## Debian / Ubuntu
Deb package file is used by Debian distributions based on it.

The files used to track repositories are located in /etc/apt/ and vary slightly by distribution on how they are divided. The entries in the file(s) however, stays the same.
The following example is from /etc/apt/sources.list.d/official-package-repositories.list on a Linux Mint system, which is based off Ubuntu.
```shell
deb http://packages.linuxmint.com sonya main upstream import backport #id:linuxmint_main
```
The first part, "deb", specifies the type of repository. Another option would be "src" if the repository contained software source packages.
The second part is the server where the software is located.
The entries after the server, such as "sonya", "main", et al., are for the distribution's version, the specific repository, and other information.

Entries can be manually added to these files, and in the case of Ubuntu and its derivatives, you can also add repositories called Personal Package Archives (PPA). These archives usually contain single pieces of software, and are often modified or updated versions compared to the versions in the standard repositories. Adding a PPA is easy, but you should be warned that adding untrusted repositories can decrease the security of your system.
```shell
$ sudo add-apt-repository ppa:<ppa_name>
```
After adding the repository, you must update your repository before installing the new software.
```shell
$ sudo apt-get update
```
