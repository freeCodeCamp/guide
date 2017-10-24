---
title: Basic Syntax
---
## PHP Tags

When PHP parses a file, it looks for opening and closing tags, which are `<?php` and `?>` which tell PHP to start and stop interpreting the code between them. Parsing in this manner allows PHP to be embedded in all sorts of different documents, as everything outside of a pair of opening and closing tags is ignored by the PHP parser.

```php
<?php
echo "Hello world";

// ... more code

echo "Last statement";

?>
```

## Escaping from HTML

Everything outside of a pair of opening and closing tags is ignored by the PHP parser which allows PHP files to have mixed content. This allows PHP to be embedded in HTML documents, for example to create templates.

```php
<p>This is going to be ignored by PHP and displayed by the browser.</p>
<?php echo 'While this is going to be parsed.'; ?>
<p>This will also be ignored by PHP and displayed by the browser.</p>
```

## Instruction Separation

As in C or Perl, PHP requires instructions to be terminated with a semicolon at the end of each statement. The closing tag of a block of PHP code automatically implies a semicolon; you do not need to have a semicolon terminating the last line of a PHP block. The closing tag for the block will include the immediately trailing newline if one is present.

```php
<?php
    echo 'This is a test';
?>

<?php echo 'This is a test' ?>

<?php echo 'We omitted the last closing tag';
```

NOTE: The closing tag of a PHP block at the end of a file is optional.

## Comments

PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments. For example:

```php
<?php
    echo 'This is a test'; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo 'This is yet another test';
    echo 'One Final Test'; # This is a one-line shell-style comment
?>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


