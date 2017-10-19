 function get($key)
 {
 	if (array_key_exists($key,$_POST))
 		return $_POST[$key];
 	else
 		 return "";
 }
 $SUBJECT=get('subject');
 $FROM=get('from');
 $MESSAGE=get('message');
 $SIGNED=get('signed');