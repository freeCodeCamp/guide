---
title: PHP XML Parsers
---

### What is XML?

The XML language is a way to structure data for sharing across websites.

Several web technologies like RSS Feeds and Podcasts are written in XML.

XML is easy to create. It looks a lot like HTML, except that you make up your own tags.

If you want to learn more about XML, please visit our XML tutorial.

###What is an XML Parser?

To read and update, create and manipulate an XML document, you will need an XML parser.

In PHP there are two major types of XML parsers:

* Tree-Based Parsers
* Event-Based Parsers
* Tree-Based Parsers
* Tree-based parsers holds the entire document in Memory and transforms the XML document into a Tree structure. It analyzes the whole document, and provides access to the Tree elements (DOM).

This type of parser is a better option for smaller XML documents, but not for large XML document as it causes major performance issues.

Example of tree-based parsers:

* SimpleXML
* DOM
* Event-Based Parsers
* Event-based parsers do not hold the entire document in Memory, instead, they read in one node at a time and allow you to interact with in real time. * Once you move onto the next node, the old one is thrown away.

This type of parser is well suited for large XML documents. It parses faster and consumes less memory.

Example of event-based parsers:

* XMLReader
* XML Expat Parser
