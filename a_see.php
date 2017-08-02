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


$str='[';

$d = glob('./a/a'."*".'.json');
for($i=0;$i<count($d);$i++){
	if(!is_dir($d[$i])){
		$str.=file_get_contents($d[$i]);
	}
	if($i+1<count($d)){
		$str.=',';
	}
}
$str.=']';

echo $str;

?>