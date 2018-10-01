---
title: Certbot
---
## Certbot

### Introduction

Let's Encrypt is a Certificate Authority (CA) that provides an easy way to obtain and install free TLS/SSL certificates, thereby enabling encrypted HTTPS on web servers. It simplifies the process by providing a software client, Certbot, that attempts to automate most (if not all) of the required steps. Currently, the entire process of obtaining and installing a certificate is fully automated on both Apache and Nginx.

In this tutorial, you will use Certbot to obtain a free SSL certificate for Apache on Ubuntu 18.04 and set up your certificate to renew automatically.

This tutorial will use a separate Apache virtual host file instead of the default configuration file. We recommend creating new Apache virtual host files for each domain because it helps to avoid common mistakes and maintains the default files as a fallback configuration.

<pre style="background-color: #66ff66">
Note: This Tutorial is also valid for Ubuntu 14.04 and 16.04
</pre>
<pre style="background-color: #fedee1">
Warning: This Tutorial is not valid for all Debian version
</pre>

<br>

### Prerequisites

To follow this tutorial, you will need:

*One Ubuntu 18.04 server including a sudo non-root user and a firewall.

*A fully registered domain name. This tutorial will use example.com throughout. You can purchase a domain name on Strato, get one for free on NoIP, or use the domain registrar of your choice.

*The following DNS records set up for your server.
**An A record with <span style="color: red; background-color: rgba(0,0,0,.05)">example.com</span> pointing to your server's public IP address.

*Apache installed. Be sure that you have a virtual host file for your domain. This tutorial will use /etc/apache2/sites-available/<span style="color:red">example.com</span>.conf as an example.

<br>

### 1. Installing Certbot
The first step to using Let's Encrypt to obtain an SSL certificate is to install the Certbot software on your server.

Certbot is in very active development, so the Certbot packages provided by Ubuntu tend to be outdated. However, the Certbot developers maintain a Ubuntu software repository with up-to-date versions, so we'll use that repository instead.

First, add the repository:
<pre style="background-color: rgba(0,0,0,.05)">
$ sudo add-apt-repository ppa:certbot/certbot
</pre>

You'll need to press <span style="background-color: rgba(0,0,0,.05)">ENTER</span> to accept.

Install Certbot's Apache package with <span style="background-color: rgba(0,0,0,.05)">apt</span>:
<pre style="background-color: rgba(0,0,0,.05)">
$ sudo apt install python-certbot-apache
</pre>

Certbot is now ready to use, but in order for it to configure SSL for Apache, we need to verify some of Apache's configuration.

<br>

### 2. Set Up the SSL Certificate

Certbot needs to be able to find the correct virtual host in your Apache configuration for it to automatically configure SSL. 

Specifically, it does this by looking for a <span style="background-color: rgba(0,0,0,.05)">ServerName</span> directive that matches the domain you request a certificate for.

You should have a VirtualHost block for your domain at <span style="background-color: rgba(0,0,0,.05)">/etc/apache2/sites-available/<span style="color:red">example.com</span>.conf</span> with the <span style="background-color: rgba(0,0,0,.05)">ServerName</span> directive already set appropriately.

To check, open the virtual host file for your domain using <span style="background-color: rgba(0,0,0,.05)">nano</span> or your favorite text editor:

<pre style="background-color: rgba(0,0,0,.05)">
$ sudo nano /etc/apache2/sites-available/example.com.conf
</pre>

Find the existing <span style="background-color: rgba(0,0,0,.05)">ServerName</span> line. It should look like this:

<pre style="background-color: rgba(0,0,0,.07);>
...
ServerName example.com;
...
</pre>

If it does, exit your editor and move on to the next step.

If it doesn't, update it to match. Then save the file, quit your editor, and verify the syntax of your configuration edits:

<pre style="background-color: rgba(0,0,0,.05)">
$ sudo apache2ctl configtest
</pre>

If you get an error, reopen the virtual host file and check for any typos or missing characters. Once your configuration file's syntax is correct, reload Apache to load the new configuration:


<pre style="background-color: rgba(0,0,0,.05)">
$ sudo systemctl reload apache2
</pre>

Certbot can now find the correct VirtualHost block and update it.

Next, let's run Certbot and fetch our certificates.

<br>

#### Obtaining an SSL Certificate

Certbot provides a variety of ways to obtain SSL certificates through plugins. The Apache plugin will take care of reconfiguring Apache and reloading the config whenever necessary. To use this plugin, type the following:

<pre style="background-color: rgba(0,0,0,.05)">
$ sudo certbot --apache -d example.com -d www.example.com
</pre>

This runs <span style="background-color: rgba(0,0,0,.05)">certbot</span> with the <span style="background-color: rgba(0,0,0,.05)">--apache plugin</span>, using <span style="background-color: rgba(0,0,0,.05)">-d</span> to specify the names you'd like the certificate to be valid for.

If this is your first time running <span style="background-color: rgba(0,0,0,.05)">certbot</span>, you will be prompted to enter an email address and agree to the terms of service. After doing so, <span style="background-color: rgba(0,0,0,.05)">certbot</span> will communicate with the Let's Encrypt server, then run a challenge to verify that you control the domain you're requesting a certificate for.

If that's successful, certbot will ask how you'd like to configure your HTTPS settings:

<pre style="background-color: rgba(0,0,0,.05)">
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
-------------------------------------------------------------------------------
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
</pre>

Select your choice then hit <span style="background-color: rgba(0,0,0,.05)">ENTER</span>. The configuration will be updated, and Apache will reload to pick up the new settings. <span style="background-color: rgba(0,0,0,.05)">certbot</span> will wrap up with a message telling you the process was successful and where your certificates are stored:


<pre style="background-color: rgba(0,0,0,.05)">
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/example.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/example.com/privkey.pem
   Your cert will expire on 2018-07-23. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
</pre>

Your certificates are downloaded, installed, and loaded. Try reloading your website using https:// and notice your browser's security indicator. It should indicate that the site is properly secured, usually with a green lock icon. If you test your server using the SSL Labs Server Test, it will get an A grade.

Let's finish by testing the renewal process.

<br>

#### Verifying Certbot Auto-Renewal

Let's Encrypt's certificates are only valid for ninety days. This is to encourage users to automate their certificate renewal process. The <span style="background-color: rgba(0,0,0,.05)">certbot</span> package we installed takes care of this for us by adding a renew script to <span style="background-color: rgba(0,0,0,.05)">/etc/cron.d</span>. This script runs twice a day and will automatically renew any certificate that's within thirty days of expiration.

To test the renewal process, you can do a dry run with <span style="background-color: rgba(0,0,0,.05)">certbot</span>:

<pre style="background-color: rgba(0,0,0,.05)">
$ sudo certbot renew --dry-run
</pre>

If you see no errors, you're all set. When necessary, Certbot will renew your certificates and reload Apache to pick up the changes. If the automated renewal process ever fails, Let’s Encrypt will send a message to the email you specified, warning you when your certificate is about to expire.

#### Conclusion

In this tutorial, you installed the Let's Encrypt client certbot, downloaded SSL certificates for your domain, configured Apache to use these certificates, and set up automatic certificate renewal. If you have further questions about using Certbot, their https://certbot.eff.org/docs/ documentation is a good place to start.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://certbot.eff.org/
Automatically enable HTTPS on your website with EFF's Certbot, deploying Let's Encrypt certificates.
