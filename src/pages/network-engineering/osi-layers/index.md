---
title: OSI Layers 
---
## The OSI Layers
<br></br>
### Introduction


Have you ever wondered how data is sent through the network from one machine to another? If yes, then the Open System Interconnected model is what you are looking for. 

The OSI model is used to help standardise and characterise how data should flow from sender to receiver without taking into consideration the underlying internal structure of the endpoint (sender, receiver).

The organisation that came up with this model is the **International Standardisation Organisation** and hence this model is formally referred to as **ISO - OSI**.

<br></br>
### Architecture 


As in the figure below the model divides the network into **7 layers**. Data communication in the OSI model starts with the top layer ( Application Layer ) of the stack at the sending side, travels down the stack to the sender's lowest layer ( Physical Layer ), then traverses the physical network connection to the bottom layer on the receiving side, and up its OSI model stack. 

We go for a layered approach because it is easy to design independent layers with dedicated functions which interact with each other as compared to a single complex model.


<p align = "center"> 
  <br></br>
  <img src="https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg"/>
  <br></br>
</p>


### **Important Observations**


* _**End-to-end layers:**_
In the diagram above, you would notice that the upper layers of the protocol (Application - Transport), the sender's and receiver's layers are directly connected via arrows. This is because these layers are not aware of intermediate devices that are used to transport data (such as switches and routers). These layers appear to communicate directly with each other.

* _**Unit of Data:**_
In the diagram above, to the extreme left is the unit of data that is used in each of the layer. The transport layer (and the layers below it) have a unique name for the unit of data being transferred from sender to receiver. 

<br></br>
### **Functions of Layers**


#### **1. Layer 1 - Physical Layer**

The physical layer, the lowest layer of the OSI model, is concerned with the transmission and reception of the unstructured raw bit stream over a physical medium. It describes the electrical/optical, mechanical, and functional interfaces to the physical medium, and carries the signals for all of the higher layers.


#### **2. Layer 2 - Data Link Layer**

The data link layer provides error-free transfer of data frames from one node to another over the physical layer, allowing layers above it to assume virtually error-free transmission over the link. 


#### **3. Layer 3 - Network Layer**

The network layer controls the operation of the sub-network (subnet), deciding which physical path the data should take based on network conditions, priority of service, and other factors. 


#### **4. Layer 4 - Transport Layer**

The transport layer ensures that messages are delivered error-free, in sequence, and with no losses or duplications. It relieves the higher layer protocols from any concern with the transfer of data between them and their peers.


#### **5. Layer 5 - Session Layer**

The session layer allows session establishment between processes running on different stations. 


#### **6. Layer 6 - Presentation Layer**

The presentation layer formats the data to be presented to the application layer. 


#### **Layer 7 - Application Layer**

The application layer serves as the window for users and application processes to access network services.














 




