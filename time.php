<?php /*24.08.16
	time.php?s=pass~url
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] time_change: not url');}
if(!file_exists($s[1])){exit('[X] time_change: not exist');}

echo ' Time creature: '. date("d.m.Y H:i:s", filectime($s[1]));

?>
