---
title: PHP - Loops - Foreach
---

## PHP Foreach Introduction


### Simple Foreach
Look at it! So easy!
```php
$a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa'];

foreach($a_lot_of_names as $the_simpsons) {
  echo $the_simpsons . '<br>';
}
```

### Let's add the Status!
```php
$a_lot_of_names = [
'Husband' => 'Homer',
'Wife' => 'Marge',
'Child' => 'Bart',
'Child' => 'Lisa',
'Child/Baby'=>'Maggy'];

foreach($a_lot_of_names as $status => $the_simpsons) {
  echo $status . ' -> ' . $the_simpsons . '<br>';
  }
```

### Push a item to array and let's try!
```php
$a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa'];
array_push($a_lot_of_names, 'Moe?');
foreach($a_lot_of_names as $the_simpsons) {
  echo $the_simpsons . '<br>';
  }
```
