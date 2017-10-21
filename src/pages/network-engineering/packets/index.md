---
title: Packets
---
## Packets

A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network.
In the OSI model, packets are created at the network layer. A packet consists of control information and user data, which is also known as the payload. 
Control information provides data for delivering the payload, for example: source and destination network addresses, error detection codes, and sequencing information.

![TCP/IP Packet example](https://www.computerhope.com/jargon/p/packet.jpg)

###Network packet basics
* Another name for a packet is a datagram.
* Data transferred over the Internet is sent as one or more packets. The most common packet sent is the TCP packet.
* The size of a packet is limited, so most data sent over a network is broken up into multiple packets before being sent out and then put back together when received.
* When a packet is transmitted over a network, network routers and switches examine the packet and its source to help direct it to the correct location.
* During its transmission, network packets can be dropped. If a packet is not received or an error occurs, it is sent again.


