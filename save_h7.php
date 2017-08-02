<?php /*05.10.16


*/

if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

//set_time_limit (60*15);

$zz=array();/*массив для путей к файлам*/
$not=array('./h7.zip', './p.php', './git');/*массив для исключений*/

if(file_exists('./h7.zip')){
	if(unlink('./h7.zip')){echo'[V]';}else{echo'[X]';}
	echo 'del; ';
}

/*Название архива*/
$ZipName= 'h7.zip';
/*Исключения*/
$not[count($not)]='./'.$ZipName;
//$not[count($not)]='io.php';
//$not[count($not)]='admin';

wfold('./');/*С какой папки тащим*/
function wfold($url){
	global $zz;/*добавляем массивы в функцию*/
	global $not;
	$mm = glob($url ."*");/*в массив список, что в папке*/
	for($i=0;$i<count($mm);$i++){/*Идем по всему массиву*/
		$nn=0;/*Счетчик исключений*/
		for($i2=0;$i2<count($not);$i2++){/*Есть ли он в исключении?*/
			if($mm[$i] == $not[$i2]){$nn=1;}
		}
		if($nn==0){
			if(is_dir($mm[$i])){/*Если это папка*/
				wfold($mm[$i] . '/');/*Рекурсивно запускаем эту же функцию*/
  			}else{/*это файл*/
				$zz[count($zz)]=$mm[$i];/*добавляем в массив*/
 			}
		}

 	}
}

$zip=new ZipArchive();/*Подключаем библиотеку архива*/
if($zip->open($ZipName, ZipArchive::CREATE)!==TRUE){/*Удачное ли создание*/
	exit('CreateZIP[X]');
}
for($i=0;$i<count($zz);$i++){/*Из массива в архив*/
	$zip->addFile($zz[$i]);
}
/*Показ размерности и закрытие*/
echo $ZipName.'[FileKol=' . $zip->numFiles . ';FileSize=';
$zip->close(); 
echo (filesize($ZipName))/1000000 . 'mb;]';

?>
