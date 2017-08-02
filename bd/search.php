<?php /*07.10.16
$_POST['search'] - что будем искать
*/

if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if($_POST['search']==''){$_POST['search']='*';}

$str='[';
$d = glob('./'.$_POST['search'].'.json');
//echo count($d);
for($i=0;$i<count($d);$i++){
	if(!is_dir($d[$i])){
		//echo file_get_contents('./55.txt');
		$str .= file_get_contents($d[$i]);
		if($i+1<count($d)){$str.=',';}
	}

}
$str.=']';

echo $str;
?>