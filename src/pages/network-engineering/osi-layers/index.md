---
title: OSI Layers 
---
## The OSI Layers


### Introduction


Have you ever wondered how data is sent through the network from one machine to another? If yes, then the Open System Interconnected model is what you are looking for. 

The OSI model is used to help standardise and characterise how data should flow from sender to receiver without the taking into consideration the underlying internal structure of the endpoint (sender, receiver).

The organisation that came up with this model is the **International Standardisation Organisation** and hence this model is formally referred to as **ISO - OSI**.


### Architecture 


As in the figure below the model divides the network into **7 layers**. Data communication in the OSI model starts with the top layer ( Application Layer ) of the stack at the sending side, travels down the stack to the sender's lowest layer ( Physical Layer ), then traverses the physical network connection to the bottom layer on the receiving side, and up its OSI model stack. 

We go for a layered approach because it is easy to design independent layers with dedicated functions which interact with each other as compared to a single complex model.


<p align = "center"> 
  <br></br>
  <img src="https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg"/>
  <br></br>
</p>


### **Important Observations**


* **End-to-end layers**
Unlike the lower "subnet" layers whose protocol is between immediately adjacent nodes, the transport layer and the layers above are true "source to destination" or end-to-end layers, and are not concerned with the details of the underlying communications facility. Transport layer software (and software above it) on the source station carries on a conversation with similar software on the destination station by using message headers and control messages. Hence, there are no intermediary nodes between the transport layers(and layers above it) of the sender and receiver.

* **Unit of Data**
In the diagram above, to the extreme left is the unit of data that is used in each of the layer. The transport layer (and the layers below it) have a unique name for the unit of data being transferred from sender to receiver. 


### **Functions of Layers**


#### **Layer 7 - Application Layer**
The application layer serves as the window for users and application processes to access network services.This layer contains a variety of commonly needed functions, some of which are:

* Resource sharing and device redirection
* Remote file access
* Remote printer access
* Inter-process communication


#### **Layer 6 - Presentation Layer**
The presentation layer formats the data to be presented to the application layer. It can be viewed as the translator for the network.The presentation layer provides:

* **Character code translation:** for example, ASCII to EBCDIC.
* **Data conversion:** bit order, CR-CR/LF, integer-floating point, and so on.
* **Data compression:** reduces the number of bits that need to be transmitted on the network.
* **Data encryption:** encrypt data for security purposes. For example, password encryption.


#### **Layer 5 - Session Layer**
The session layer allows session establishment between processes running on different stations. It provides the following functionalities:

* **Session establishment, maintenance and termination:** allows two application processes on different machines to establish, use and terminate a connection, called a session.
* **Session support:** performs the functions that allow these processes to communicate over the network, performing security, name recognition, logging, and so on.


#### **Layer 4 - Transport Layer**
The transport layer ensures that messages are delivered error-free, in sequence, and with no losses or duplications. It relieves the higher layer protocols from any concern with the transfer of data between them and their peers. The transport layer provides:

* **Message segmentation:** accepts a message from the (session) layer above it, splits the message into smaller units and passes the smaller units down to the network layer. The transport layer at the destination station reassembles the message.
* **Message acknowledgment:** provides reliable end-to-end message delivery with acknowledgments.
* **Message traffic control:** tells the transmitting station to "back-off" when no message buffers are available.
* **Session multiplexing:** multiplexes several message streams, or sessions onto one logical link and keeps track of which messages belong to which sessions.


#### **Layer 3 - Network Layer**
The network layer controls the operation of the subnet, deciding which physical path the data should take based on network conditions, priority of service, and other factors. It provides:

* **Routing:** routes frames among networks.
* **Subnet traffic control:** routers (network layer intermediate systems) can instruct a sending station to "throttle back" its frame transmission when the router's buffer fills up.
* **Frame fragmentation:** if it determines that a downstream router's maximum transmission unit (MTU) size is less than the frame size, a router can fragment a frame for transmission and re-assembly at the destination station.
Logical-physical address mapping: translates logical addresses, or names, into physical addresses.
* **Subnet usage accounting:** has accounting functions to keep track of frames forwarded by subnet intermediate systems, to produce billing information.


#### **Layer 2 - Data Link Layer**
The data link layer provides error-free transfer of data frames from one node to another over the physical layer, allowing layers above it to assume virtually error-free transmission over the link. To do this, the data link layer provides:

* **Link establishment and termination:** establishes and terminates the logical link between two nodes.
* **Frame traffic control:** tells the transmitting node to "back-off" when no frame buffers are available.
* **Frame sequencing:** transmits/receives frames sequentially.
* **Frame acknowledgment:** provides/expects frame acknowledgments. Detects and recovers from errors that occur in the physical layer by retransmitting non-acknowledged frames and handling duplicate frame receipt.
* **Frame delimiting:** creates and recognizes frame boundaries.
* **Frame error checking:** checks received frames for integrity.
* **Media access management:** determines when the node has the right to use the physical medium.


#### **Layer 1 - Physical Layer**
The physical layer, the lowest layer of the OSI model, is concerned with the transmission and reception of the unstructured raw bit stream over a physical medium. It describes the electrical/optical, mechanical, and functional interfaces to the physical medium, and carries the signals for all of the higher layers.




 




