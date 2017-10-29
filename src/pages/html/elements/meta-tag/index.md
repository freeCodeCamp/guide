---
title: Meta Tag
---
## Meta Tag

The `<meta>` tag contains data relating to the HTML document (referred to as *metadata*). This may include the author, character encoding, description, keywords, and viewport scaling. The `<meta>` tag is self-closing, and must reside in the `<head>` section of the HTML document. The `<meta>` tag has no influence on the rendering of the HTML document, and is merely used by search engines and [user agents](https://guide.freecodecamp.org/user-agent/) for data collection tasks and directives.

### Examples:

#### Character Encoding:
Sets the character encoding of the HTML document, which must match the character encoding used during the save process to avoid character corruption. This is a recommended inclusion with the attribute typically being set to "utf-8".
```html
<meta charset="utf-8" />
```

#### Author:
Specifies the author of the HTML document.
```html
<meta name="author" content="Free Code Camp" />
```

#### Description:
Provides a brief (but accurate) description of the contents of the HTML document. This may be used by search engines in query results, or by user agents in bookmarks.
```html
<meta name="description" content="Learn all about meta tags." />
```

#### Keywords:
Provides a comma-delimited collection of words that relate to the contents of the HTML document. Although historically this was used by search engines for indexing, it has been phased out in favour of content scraping, and can be safely omitted.
```html
<meta name="keywords" content="Free, Code, Camp, Guide, Meta, Tags" />
```

#### Viewport:
Required for predictable rendering and scaling on mobile devices, and is a key facet of [Responsive Web Design](https://guide.freecodecamp.org/html/responsive-web-design/).
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

#### Template:
Copy, paste, and fill in the blanks.
```html
<head>
  <meta charset="utf-8" />
  <meta name="author" content="" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title></title>
</head>
```

### More Information:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
