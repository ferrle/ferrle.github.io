<?php
$arr = array("element1","element2",array("element31","element32"));
$arr['name'] = "response";
echo $_GET['callback']."(".json_encode($arr).");";
?>