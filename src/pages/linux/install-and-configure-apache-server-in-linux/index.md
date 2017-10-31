---
title: Install and Configure Apache Server in Linux
---

Apache HTTP Server, colloquially called Apache, is free and open-source 
cross-platform web server software.
Apache is developed and maintained by an 
open community of developers under the auspices of the Apache Software Foundation.</div>

## Install and Configure Apache Server in Linux

Step 1: Install Apache Server<br>
`yum install httpd`

Step 2: Starting Apache Server<br>
`systemctl start httpd.service`

Step 3: Automatically Start Apache Server when Operating System start.<br>
`systemctl enable httpd.service`
