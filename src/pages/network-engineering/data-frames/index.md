---
title: Data Frames
---
## Data Frames

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/data-frames/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

Data Frames (Frames) are data units that are switchable over packet switched networks. Frames are Open Systems Interconnection (OSI) Layer 2 Protocol Data Units (PDUs). Frames are addressed using Media Access Control (MAC) addresses. There are several different Layer 2 communications protocols, each with distinct control information, but most utilize a common format.

Frames are divided into control information and data (also called the 'payload'). Control information is contained in the frame header and trailer which encapsulate the payload. Encapsulation is the process by which a Layer 3 packet has a Layer 2 header added to the front and a Layer 2 trailer added at the end. This is the standard format for Data Frames: a header followed by the payload followed by a trailer.

The Data Frame header contains protocol specific information but all headers include the protocol being used and soure/destination MAC addresses. Common Layer 2 protocols include Ethernet and Point-to-Point Protocol (PPP). Data Frame trailers typically contain a Frame Check Sequence (FCS) that allows the receiving device to verify the integrity of the received frame.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


