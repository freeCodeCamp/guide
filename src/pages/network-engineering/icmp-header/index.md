---
title: ICMP Header
---
## ICMP Header Format

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/icmp-header/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

The Internet Control Messaging Protcol (ICMP) is is one of the commonly used protocols in the Internet Protocol (IP) suite along with TCP and UDP. Unlike TCP and UDP, ICMP is used by network devices to relay control information and messages. These features are facilitated through the ICMP Header.

The ICMP Header is made of the following four fields: 

Type (8 bits)
    The type of ICMP message (examples include Echo Reply, Echo Request, Destination Unreachable, etc)
    
COde (8 bits)
    The code of the ICMP message type. Code numbers are specific to the their type. 

Checksum (16 bits)
    Used for error checking. Created from the header and data.
    
Rest of Header (32 bits)
    Used for content that is specific to the ICMP message type.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


