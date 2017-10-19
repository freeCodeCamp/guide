---
title: Doctype Declaration
---
## Doctype Declaration

The HTML document type declaration, also known as `DOCTYPE`, is the first line of code required in every HTML or XHTML document. The `DOCTYPE` declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.

In HTML 4.01, the `DOCTYPE` declaration refers to a document type definition (DTD). A DTD defines the structure and the legal elements of an XML document. Because HTML 4.01 was based on the Standard Generalised Markup Language (SGML), referring to a DTD in the `DOCTYPE` declaration was necessary.

Additionally, doctypes for HTML 4.01 required the declaration of either `strict`, `transitional`, or `frameset` DTD, each with a different use case as outlined below.

- **Strict DTD**: Used for web pages that *exclude* attributes and elements that W3C expects to phase out as CSS support grows
- **Transitional DTD**: Used for web pages that *include* attributes and elements that W3C expects to phase out as CSS support grows
- **Frameset DTD**: Used for web pages with frames

In contrast, the declaration of HTML5 `DOCTYPE` is much simpler: it no longer requires a reference to DTDs as it is no longer based on SGML. See the examples below for a comparison between HTML 4.01 and HTML5 `DOCTYPE`s.

### Examples

Doctype syntax for HTML5 and beyond:
```
<!DOCTYPE html>
```

Doctype syntax for strict HTML 4.01:
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Doctype syntax for transitional HTML 4.01:
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

Doctype syntax for frameset HTML 4.01:
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```
