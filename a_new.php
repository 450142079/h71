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




$name='./a/a_('.date("d_m_y)(H_i_s").')'.rand(5, 15).'.json';


$url_img='1';


if(!isset($_POST['url'])){ $url_img='1'; }

$url_k = './k.php'; 
$k = file_get_contents($url_k ); 
$k++;
file_put_contents($url_k , $k); 



if(copy('http://mini.s-shot.ru/1024/100/jpeg/?'.$_POST['url'], './a/img/scrin_'.$k.'.jpg')){ $url_img=$k; }else{ $url_img='1'; }





$str='{
	"url":"'.$_POST['url'].'",
	"n":"'.$_POST['n'].'",
	"sort":"1000",
	"url_img":"./a/img/scrin_'.$url_img.'.jpg",
	"id_url":"'.$name.'"

	}';

	

	/*,
	"h7":{
		"id":"'.$k.'",
		"time":"'.date("d.m.y H:i").'",
		"ip":"'.$_SERVER['REMOTE_ADDR'].'",
		"url":"'.$_SERVER['REQUEST_SCHEME'].'",
		"from_url":"'.$_SERVER['HTTP_REFERER'].'"
		}*/



		
		





		



		$fp = fopen($name, "w");
		fwrite($fp, $str);
		fclose($fp);

		if(file_exists($name)){
			echo '[V]';			
		}else{
			echo '[X]';
		}	
echo ' a_new '.$_POST['url'];



?>