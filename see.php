<?php /* 23.06.16 Н
Просмотр того, что в папке
/s7/see.php?s=admin~./
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

$d = array_merge(glob($s[1].'/'.".*"), glob($s[1].'/'."*"));
for($i=0;$i<count($d);$i++){
	if(is_dir($d[$i])){
		echo 'h';
	}else{
		echo 'f';
	}
	echo $d[$i].'~';
}
?>