﻿<?php /*25.06.16
6 weight ./s7/weight.php?s=pass~url
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] weight: not url');}
if(!file_exists($s[1])){exit('[X] weight: not exist ('.$s[1].')');}

$zz=0;
function sch($u){
	global $zz;
	$f = glob($u.'/' ."*");
	//print_r($f);
for($i=0;$i<count($f);$i++){
	//echo $f[$i] . ' ';
	if(is_dir($f[$i])){
		sch($f[$i]);
	}else{
		$zz+=filesize($f[$i]);
	}
}
}

if(is_dir($s[1])){
	sch($s[1]);
}else{
	$zz+=filesize($s[1]);
}

echo $zz/(1024*1024) .'mb';  

?>