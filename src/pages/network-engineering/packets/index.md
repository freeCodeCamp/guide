---
title: Packets
---
## Packets

**Introduction**
Internet revolves around packets. A network packet is a formatted unit of data carried by a packet-switched network. A packet consists of control information and user data, which is also known as the payload. Control information provides data for delivering the payload, for example: source and destination network addresses, error detection codes, and sequencing information. Typically, control information is found in packet headers and trailers.

![Packet Structure](http://books.msspace.net/mirrorbooks/snortids/0596006616/images/0596006616/figs/snrt_0202.gif)

**Packet Basics in Simple terms**

 - Another name for a packet is a datagram.
 - Data transferred over the Internet is sent as one or more packets. The most common packet sent is the TCP packet.
 - The size of a packet is limited, so most data sent over a network is broken up into multiple packets before being sent out and then put back together when received.
 - When a packet is transmitted over a network, network routers and switches examine the packet and its source to help direct it to the correct location.
 - During its transmission, network packets can be dropped. If a packet
   is not received or an error occurs, it is sent again.

**Playing with packets**

Network engineering has got do with network analysis, a good tool to use will be a [Wireshark][1], to capture packets in real-time traffic.


### Reference

- [Lecture notes](http://www.iitg.ernet.in/cse/ISEA/isea_PPT/ISEA_02_09/Analysis%20of%20Network%20Packets.pdf) from IIT, in-depth analysis of network packets.

- [Examples](https://en.wikipedia.org/wiki/Network_packet) basic terminology, packet structure and examples.

- [Wireshark](https://cs.gmu.edu/~astavrou/courses/ISA_674_F12/Wireshark-Tutorial.pdf) tutorial that covers from installation to basic packet-sniffing.

  [1]: https://www.howtogeek.com/104278/how-to-use-wireshark-to-capture-filter-and-inspect-packets/
