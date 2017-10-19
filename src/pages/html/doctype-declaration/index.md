---
title: Doctype Declaration
---
## Doctype Declaration

A doctype declaration is a statement added to the top of an HTML document. Its purpose is to instruct the web browser how to render that document.

## History

During the formative years of HTML, web standards were not agreed upon yet. Browser vendors would build new features in whatever way they wanted. There was little concern for competing browsers. The result was that web developers had to choose a browser to develop their sites for. This meant that sites would not render well in unsupported browsers. This situation could not continue.

The W3C (World Wide Web Consortium) wrote a set of web standards to handle this situation. All browser vendors and web developers should adhere to these standards. This would ensure that websites would render well across browsers. The changes required by the standards were quite different from some existing practices. Adhering to them would break existing non standards compliant websites.

To handle this problem, vendors began programming rendering modes in to their browsers. Web developers would need to add a doctype declaration to the top of an HTML document. The doctype declaration would tell the browser which rendering mode to use for that document. Three separate rendering modes were generally available across browsers. **Full standards mode** renders pages according to the W3C web standards. **Quirks mode** renders pages in a non standards compliant way. **Almost standards mode** is close to full standards mode, but features support for a small number of quirks.

In the modern age of HTML5, web standards are fully implemented in all major browsers. Web sites are generally developed in a standards compliant way. Because of this the HTML5 doctype declaration only exists to tell the browser to render the document in full standards mode.

## Usage

The Doctype Declaration must be the very first line of code in an HTML document, aside from comments, which can go before it if needed. For modern HTML5 documents the doctype declaration should be as follows:

`<!DOCTYPE html>`

#### More Information:

While no longer in general use, there are several other doctype declaration types from previous versions of HTML. There are also specific versions for XML documents. To read more about these, and to see code examples for each, take a look at the [Wikipedia article](https://en.wikipedia.org/wiki/Document_type_declaration).


