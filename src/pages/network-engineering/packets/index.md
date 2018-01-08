---
title: Packets
---
## Packets

A packet is a basic unit of communication over a digital network. A packet is also called a **datagram, a segment, a block, a cell or a frame,** depending on the protocol used for the transmission of data. When data has to be transmitted, it is broken down into similar structures of data before transmission, called packets, which are reassembled to the original data chunk once they reach their destination.

Packet switched networks are generally more efficient compared to circuit switched networks. Circuit switched network needs to reserve resources for the duration of communication. Packet switched networks can send packets on demand.

In the OSI model, packets correspond to layer 3, the Network Layer.
  
## Structure of a Data Packet
  The structure of a packet depends on the type of packet it is and on the protocol. Read further below on packets and protocols. Normally, a packet has a header and a payload.

  The header keeps overhead information about the packet, the service, and other transmission-related data. For example, data transfer over the Internet requires breaking down the data into IP packets, which is defined in IP (Internet Protocol), and an IP packet includes:
  
  * The source IP address, which is the IP address of the machine sending the data.
  * The destination IP address, which is the machine or device to which the data is sent.
  * The sequence number of the packets, a number that puts the packets in order such that they are reassembled in a way to get the original data back exactly as it was prior to transmission.
  * The type of service.
  * Flags.
  * Some other technical data.
  * The payload, which represents the bulk of the packet (all the above is considered as overhead), and is actually the data being carried.
  
## Packets and Protocols
  Packets vary in structure and functionality depending on the protocols implementing them. VoIP uses the IP protocol, and hence IP packets. On an Ethernet network, for example, data is transmitted in Ethernet frames.
  
  In the IP protocol, the IP packets travel over the Internet through nodes, which are devices and routers (technically called nodes in this context) found on the way from the source to the destination.
  
  Each packet is routed towards the destination based on its source and destination address. At each node, the router decides, based on calculations involving network statistics and costs, to which neighboring node it is more efficient to send the packet.
  
  This selected node is more efficient to send the packet. This is part of packet switching which actually flushes the packets on the Internet and each of them finds its own way to the destination. This mechanism uses the underlying structure of the Internet for free, which is the main reason for which VoIP calls and Internet calling are most free or very cheap.
  
  Contrary to traditional telephony where a line or circuit between the source and destination has to be dedicated and reserved (called circuit switching), hence the heavy cost, packet switching exploits existing networks for free.
  
  Another example is the TCP (Transmission Control Protocol), which works with IP in what we call the TCP/IP suite. TCP is responsible for ensuring that data transfer is reliable. To achieve that, it checks whether the packets have arrived in order, whether any packets are missing or have been duplicated, and whether there is any delay in packet transmission. It controls this by setting a timeout and signals called acknowledgments.
  
## How does Packet Loss happen?
  **Packet Loss** is a phenomenon that happens when packets sent across a computer network fail to reach their intended destination. They can be lost on their way, more often, intentionally dropped. The latter happens because packets sent through a *router* or a *network segment* arrive at a greater rate than the router is able to process. As a consequence, there is no other option than to *drop* them.
  **Packet Loss** is also used as a relevant metric for the performance of a network, measured as the *percentage of the packets lost* with respect to packets sent.
  
  The causes of the packet loss may vary, yet the most common ones are:
  - ```link congestion```-network devices intentionally drop packets.
  - ```device performance```-Routers, switches and other hardware devices can't physically keep up.
  - ```software issues```-as software written for the network devices is not perfect, bugs might occur undetected. 
  - ```faulty hardware or cabling.```  
  
 ## Conclusion
  Data travels in packets over digital networks and all of the data we consume, whether it be text, audio, images or video, come broken down into packets which are reassembled in our devices or computers. This is why, for instance, when a picture loads over a slow connection, you see chunks of it appearing one after the other. 
  
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[All Networking concepts in brief details](https://www.lifewire.com/what-is-a-data-packet-3426310 "Lifewire's Article about Data Packets")

