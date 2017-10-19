---
title: Ports
---
## Ports

### Ports, IP addresses and the basics of requests

You can think of an IP address kind of like the return address you write on an envelope when you want to send it through the mail: it specifies where you would like a response (or returned letter) to go. When someone receives a letter, they can look at the return address on the envelope to know where they should address the letter they will send back. When your computer sends a request for information to a server, it tags the request with its IP address so that the server will know where to send the response.

#### IP address formats

Your IP address is a long number, or rather a series of numbers, following a standard format. The most widely used IP (internet protocol) is IPv4, which might look like this:

172.16.254.1

There are four sets of numbers, each set having anywhere from one to three digits. The numbers in each set range from 0 to 255. You might also see an IPv6 address which looks like this:

2bbe:1850:3:300:h8gg:ba21:68ce

An IP address can be either static or dynamic. Static addresses stay the same every time a device accesses the Internet, while dynamic addresses change every time. A static address is kind of like your mobile phone number; your number stays the same every time you use your phone. A dynamic address is like using a pay phone: it’s possible to make phone calls using any one of a number of pay phones, but if someone wants to call you back, they have to know exactly which pay phone you’re standing in front of at that moment.

Right now, don’t worry about what exactly the numbers are doing or about the difference between static and dynamic addresses; it’s enough to understand that an IP address is used to mark a specific device, and that servers use IP addresses to know where they should send information. IP addresses are usually based on a physical location, so sometimes they can be used to get information about where your computer is located. For example, you might be able to get local weather information based on where your IP address is based. Proxy servers are often used to mask your IP address to mask your computer’s location.

### Ports

Ports allow computers to interact and communicate with networks and devices. You’re probably already familiar with physical ports; for example, you might use a USB port to insert a USB drive in order to allow your computer to access files stored on the USB.

Virtual ports have the same function and purpose as physical ones; they allow your computer to interact with networks and pass information back and forth wirelessly. Virtual ports are similar to physical ports in that only one device or network can use the port at once. Ports are associated with IP addresses, and you can think about it as a sort of add-on or extension to the IP address.

To extend our “return address” metaphor from before, if an IP address serves as a street address, a port number might be a mailbox number. Multiple mailboxes can be located at the same address; similarly, multiple port numbers can be associated with one IP address. This lets multiple applications on your computer use the same IP address at the same time. In other words, an IP address identifies a specific computer, while a port number identifies a specific application on that computer. When an application (for example, a web browser) makes a request to a server, the server sends back data through the same IP address and port that the request originated from. That way, you can be sure that the data is going to the correct application and not, for example, trying to send website data to Skype.

Port numbers also have other uses: for example, a network administrator may permit or restrict certain applications through their port numbers. In network security, it’s important to monitor which ports are open (or “listening” for requests to connect) and which are not. Hackers might try to find open ports that can be used to insert malware onto a system, so network professionals will often use a port scanner to identify and close non-essential open ports to minimize that risk.



#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://en.wikipedia.org/wiki/Port_(computer_networking' target='_blank' rel='nofollow'>Wikipedia: Port (computer networking)</a>)

<a href='https://www.lifewire.com/port-numbers-on-computer-networks-817939' target='_blank' rel='nofollow'>Lifewire: What are Port Numbers?</a>

<a href='https://www.lifewire.com/computer-port-usage-817366' target='_blank' rel='nofollow'>Lifewire: Computer Ports and Their Role in Computer Networking</a>

<a href='https://support.google.com/websearch/answer/1696588' target='_blank' rel='nofollow'>About IP addresses - Google Search Help</a>

<a href='http://searchwindevelopment.techtarget.com/definition/static-IP-address-dynamic-IP-address' target='_blank' rel='nofollow'>What is static IP address/dynamic IP address? - Definition from WhatIs.com</a>
