---
title: Ports
---
## Ports
A port is a logical channel and an essential component of internet protocol, It identifies a specific application running on an internet host machine.
A port number is a 16-bit unsigned integer ranging from 0 to 65535.
The port numbers are divided into three categories: the well-known ports, the registered ports, and the dynamic or private ports.

For example, Computers have multiple processes trying to access the internet at a time. When the computer receives a message from an another source the ports will help in determining which process is expecting that message. For example when you open your browser and type a website browser use its own port identifier to transmit the HTTP request. So when it recieves a message back with browser's port number it will know that the data is meant for the browser. Port number 25 is used for mail and 80 is used for HTTP requests.

Some common port number.

.20,21 : FTP
.22    : SSH
.23    : TELNET
.25    : SMTP
.53    : DNS
.67,68 : DHCP
.80    : HTTP
.443    :HTTPS
