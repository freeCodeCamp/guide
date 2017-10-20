---
title: Data Frames
---
## Data Frames
A frame is data that is transmitted between network points as a unit complete with addressing and necessary protocol control information.
A frame is usually transmitted serial bit by bit and contains a header field and a trailer field that "frame" the data. 
In the OSI model, data frames are created at the data link layer.

The Data Link layer frame includes:
* Data - The packet from the Network layer
* Header - Contains control information, such as addressing, and is located at the beginning of the PDU (Package Data Unit)
* Trailer - Contains control information added to the end of the PDU
![A frame in data link layer](http://www.highteck.net/images/156-Datalink-PDU.jpg)


