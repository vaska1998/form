<?php
if (isset($_POST["name"]) && isset($_POST["password"]) ) { 
    $result = array(
    	'name' => $_POST["name"],
    	'password' => $_POST["password"]
    ); 
    echo json_encode($result); 
}
if (isset($_POST["nameReg"]) && isset($_POST["email"]) && isset($_POST["passwordReg"]) ) { 
    $results = array(
    	'nameReg' => $_POST["nameReg"],
        'email' => $_POST["email"],
    	'passwordReg' => $_POST["passwordReg"]
    ); 
    echo json_encode($results);
}
?>