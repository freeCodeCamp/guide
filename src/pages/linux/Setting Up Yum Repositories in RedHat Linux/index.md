---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
---
<div class="para">YUM Repositories are warehouses of Linux software (RPM package files). 
RPM package file is a Red Hat Package Manager file and enables quick and easy software installation on Red Hat/CentOS Linux.
</div>

# Setting Up Yum Repositories in RedHat CentOS Linux
Step1: Check if there exixt repo or not<br>
```#yum repolist```
<br>You will find there is no repositories<br>
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
