---
title: PHP XML DOM Parser
---

The built-in DOM parser makes it possible to process XML documents in PHP.

### The XML DOM Parser

The DOM parser is a tree-based parser.

Look at the following XML document fraction:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<from>Jani</from>
```

The DOM sees the XML above as a tree structure:

* Level 1: XML Document
* Level 2: Root element: <from>
* Level 3: Text element: "Jani"

### Installation

The DOM parser functions are part of the PHP core. There is no installation needed to use these functions.

### The XML File

The XML file below ("note.xml") will be used in our example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

### Load and Output XML

We want to initialize the XML parser, load the xml, and output it:

#### Example
```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

print $xmlDoc->saveXML();
?>
```

The output of the code above will be:

```
Tove Jani Reminder Don't forget me this weekend!
```

If you select "View source" in the browser window, you will see the following HTML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

The example above creates a DOMDocument-Object and loads the XML from "note.xml" into it.

Then the saveXML() function puts the internal XML document into a string, so we can output it.

### Looping through XML

We want to initialize the XML parser, load the XML, and loop through all elements of the <note> element:

#### Example
```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

$x = $xmlDoc->documentElement;
foreach ($x->childNodes AS $item) {
  print $item->nodeName . " = " . $item->nodeValue . "<br>";
}
?>
```

The output of the code above will be:

```
#text = 
to = Tove
#text = 
from = Jani
#text = 
heading = Reminder
#text = 
body = Don't forget me this weekend!
#text =
```

In the example above you see that there are empty text nodes between each element.

When XML generates, it often contains white-spaces between the nodes. The XML DOM parser treats these as ordinary elements, and if you are not aware of them, they sometimes cause problems.
