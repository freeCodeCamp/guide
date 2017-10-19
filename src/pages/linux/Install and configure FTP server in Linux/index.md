---
title: Install and configure FTP server in Redhat/Centos Linux
---
<h1>Install and configure FTP server in Redhat/Centos Linux</h1>

<p>FTP stands for File Transfer Protocol. It was written by Abhay Bhushan and published as RFC 114 on 16 April 1971. 
It is supported by all operating system and browsers.<br>

It is built on a client-server architecture.</p>
<h3>Installing FTP server in Linux</h3>
<b>Step-1:</b> We will use localhost for our machine to setup ftp server.<br>

<b>Step-2:</b> Install vsftpd (very secure FTP daemon) package<br>
					#yum install -y vsftpd<br>
<b>Step-3:</b> Start FTP Server when system on.<br>
					#systemctl enable vsftpd.service<br>

<b>Step-4:</b> Checking the status of ftp server<br>
					#systemctl status vsftpd.service<br>

<b>Step-5:</b> Configure vsftpd package. We will edit<br>
	/etc/vsftpd/vsftpd.conf<br>
	Change the line which contain anonymous_enable=NO to anonymous_enable=YES<br> 
	This will give permit any one to access FTP server with authentication.<br>
	Change the following to YES<br>
	local_enable=YES<br>
	write_enable=YES<br>
<b>Step-6:</b> Start FTP Server<br>
					#systemctl start vsftpd.service<br>

<b>Step-7:</b> Install FTP Client<br>
					#yum install -y lftpd<br>

<b>Step-8:</b> Connect ftp to localhost<br>
					#lftp localhost<br>
