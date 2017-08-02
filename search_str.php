<?php /* 16.09.16 
1 url, 2 str
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

$m_format=explode('~', $_POST['f']);
//$m_format=Array('txt','php');

if(!isset($s[1])){exit('[X] weight: not url');}
if(!file_exists($s[1])){exit('[X] weight: not exist ('.$s[1].')');}

$txt='';
$kol='';

function search_str($u){
	global $txt, $kol, $m_format, $s;
	$f = glob($u.'/' ."*");
	for($i=0;$i<count($f);$i++){
	//echo $f[$i] . ' ';
	if(is_dir($f[$i])){
		search_str($f[$i]);
	}else{
		//Это файл, если формат тот для поиска
		$m_s3=Array();
		$m_s3 = explode('.',$f[$i]);
		if(in_array($m_s3[count($m_s3)-1], $m_format)==1){
			if(strpos(file_get_contents($f[$i]), $s[2])){
				$txt.='f'.$f[$i] . '~';
			}
		}
	}
}
}

if(is_dir($s[1])){
	search_str($s[1]);
}else{
	if(strpos(file_get_contents($s[1]), $s[2])){
		$txt.=$s[1];
	}
}

echo $txt; 

?>



