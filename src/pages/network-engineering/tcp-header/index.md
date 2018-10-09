---
title: TCP Header
---
## TCP Header Format

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/tcp-header/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

The Transmission Control Protocol (TCP) is is one of the most commonly used protocols in the Internet Protocol (IP) suite along with UDP and ICMP. TCP's defining features are that is a connection-oriented, reliable, error checked protocol. These features are facilitated through the TCP Header.

The TCP Header is made of the following ten fields: 

Source Port (16 bits)
    The port used on the senders computer for the TCP connection also refered to as the sending port. When combined with the senders IP it allows the sending computer to create multiple, separate connections (known as Multiplexing).
    
Destination Port (16 bits)
    The port used on the receiving computer for the TCP connection also refered to as the receiving port. When combined with the receivers IP it allows for multiplexing.
    
Sequence Number (32 bits)
    This number is used to keep track of the sent and received data and verify none have been missed. This feature helps provide reliability to TCP.
    
Acknowledgement Number (32 bits)
   The ACK number is incremented upon receipt of a packet. This feature helps provide reliability to TCP.
  
Data Offset (4 bits)
    Specificies the length of the TCP header.
    
Reserved (3 bits)
    For future use.
    
Flags (9 bits)
    Controls Bits - 9 single bit flags used for various TCP functions.
    
Window Size (16 bits)
    The number of windows and size of the windows to be recieved. This allows for Windowing.
    
Checksum (16 bits)
    The checksum is used for error checking the segment.
    
Urgent Pointer (16 bits)
    Offsets the from the sequence number to indicate urgent (URG).
    


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


