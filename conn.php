<?php

    /* Connect to a MySQL database using driver invocation */
    $dsn = 'mysql:dbname=xtrasell_app;host=172.93.99.178';
    $user = 'xtrasell_1413914';
    $password = 'xtrasell_1413914';
    
    try {
        $conn = new PDO($dsn, $user, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // sql to create table
        // $sql = "CREATE TABLE employees (
        //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        //     firstname VARCHAR(30) NOT NULL,
        //     lastname VARCHAR(30) NOT NULL,
        //     email VARCHAR(50),
        //     reg_date TIMESTAMP
        // )";
        // // use exec() because no results are returned
        // $conn->exec($sql);
        // echo "Table employees created successfully";

    } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }

?>