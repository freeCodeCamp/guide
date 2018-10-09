---
title: Ethernet Header
---
## Ethernet Header Format

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/ethernet-header/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

The Layer 2 Ethernet header is used to route frames between network devices on the same subnet. It consists of the following six parts:

Preamble (7 octets)
    The Preamble is used to provide bit level synchronization.
    
Start of Frame Delimiter (SFD) (1 octects)
    Marks the start of a new ethernet frame.

Destiantion MAC Address (4 octets)
    The 48 bit MAC address of the destination device.
    
Sender MAC Address (4 octets)
    The 48 bit MAC address of the sending device.
    
802.1q Tag (4 Octets) (Optional)
    This field is used for 802.1q trunking. By adding this field to the header the sender informs the receiver this is frame is from a VLAN specified by the VLAN number in the field.
    
Length (2 octets)
    The length of the header and payload.
    
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


