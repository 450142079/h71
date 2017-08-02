<?php /*10.10.2016
pass  pass~newpass~whom 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if($s[2]==''){
	$whom='./p.php';
}else{
	$whom='./'.$s[2].'/p.php';
}

if(file_exists($whom)){
	if(unlink($whom)){echo '[V]';}else{echo '[X]';} 
	echo ' DelPass; '; 
}
	$fp = fopen($whom, "w");
		fwrite($fp,'<? /*'.md5($s[1]).'*/ ?>' );
		fclose($fp);
		if(file_exists($whom)){
			echo '[V]';			
		}else{
			echo '[X]';
		}	
		echo ' newPass!';

?>