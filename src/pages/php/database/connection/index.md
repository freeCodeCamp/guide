---
Title: DataBase Connection
---
## DataBase Connection

Connecting to a `MySQL` database with `PHP` is very easy. It can be done using a single function from the nice `array` of `MySQL` related `functions` in `PHP`, but in this article I'll teach for you `how establish the connection to MySQL` using a simple method:

Note: In this code you will find comments for help you in the connection structure.

Let's Go!

```PHP
<?php
	/* >> Required Vars << */
	$host = "localhost"; // Host (Ex: localhost)
	$user = "root"; // DataBase Login (Ex: root)
	$pass = ""; // DataBase Password (Ex: 1234)
	$dbnm = "test1"; // Table Name (Ex: test1)

	/* >> Initialize the Connection with DataBase << */

	/*
	 * The var $conexao contains the native function mysql_connect(),
	 * this function is responsible for creating a connection with the DataBase
	*/
	$conexao = mysql_connect($host, $user, $pass);

	/*
	 * Verify if the connection with the DataBase was established,
	 * If there is no connection, then an error message is displayed...
	*/
	if ($conexao)
	{
		
		/*
		 * If the connection is estabilshed with the DataBase, then we have to select a DataTable,
		 * and verify is the table is selected successfully.
		*/

		/*
		 * The var $conexao_db contains the native function mysql_select_db(),
		 * this function is responsible for establishing the DataTable selection,
		 * but it has some particularities, because we must pass the variable with the Table Name
		 * and add the var that contains the function for connecting with the DataBase:
		*/
		$conexao_db = mysql_select_db($dbnm, $conexao);

		/*
		 * Verify if the selection with DataTable was estabilshed
		 * If there is no connection, then an error message is displayed...
		*/
		if ($conexao_db)
		{
			echo "
				[SUCCESS] CONNECTION WITH THE DATABASE ESTABLISHED!!! ;)
			";
		}
		else
		{
			/*
			 * Display the error message if DataTable selection fails
			*/
			echo "
				[ERROR] SORRY :( ERROR IN SELECTING THE TABLE :(
			";
		}
	}
	else
	{
		/*
		 * Display the error message if DataBase fails in the connection
		*/
		echo "
			[ERROR] SORRY :( CONNECTION ERROR IN DATABASE :(
		";
	}

	/*
	 * Close the DataBase connection
	*/
	mysql_close($conexao);
?>
```

#### More Information:
<a href='http://webcheatsheet.com/php/connect_mysql_database.php' target='_blank' rel='nofollow'>PHP: Connect to MySQL</a>
