<?php /* 16.09.16 
git_see.php
*/
if(!file_exists('./p.php')){exit('[X] Not Exist Pass');}
if(!isset($_GET['s'])){exit('[X] Not Exist GET S');}
$s0=explode('*/',file_get_contents('./p.php'));
$s0=explode('/*',$s0[0]);$s=explode('~',$_GET['s']); 
if(md5($s[0])!=$s0[1]){exit('[X] Pass');}

$url=$s[1];

if(substr($url, 0, 2)=='..'){

	$url = 'git'.substr($url, 2, strlen($url));
	
	$f=glob($url.'/'."*".'.json');
	$str='{';
	for($i=0;$i<count($f);$i++){
		if(!is_dir($f[$i])){
		$str.='"'.$i.'":'.file_get_contents($f[$i]);
			if($i+1<count($f)){$str.=',';}
		}
	}
	$str.='}';
	echo $str;
}else{ echo '[X] ERR GIT';}


?>