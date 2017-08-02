<?php /*23.08.2016 
h papka
f file
new.php?s=pass~url~type~prav 
*/
if(!file_exists('./p.php')){exit('[X] Not Exist Pass');}
if(!isset($_GET['s'])){exit('[X] Not Exist GET S');}
$s0=explode('*/',file_get_contents('./p.php'));
$s0=explode('/*',$s0[0]);$s=explode('~',$_GET['s']); 
if(md5($s[0])!=$s0[1]){exit('[X] Pass');}

$url=$_POST['url'];
$txt=$_POST['txt'];
$dd=date("Ymd_His");
$otvet='';

if(substr($url, 0, 2)=='..'){

	$url = 'git'.substr($url, 2, strlen($url));
	
	$s0=explode('/',$url);
	//print_r($s0);
	
	$str='.';
	
	/*Создаем папку*/
	for($i=0;$i<count($s0);$i++){
		//$otvet.=' '.$i;
		$str.='/'.$s0[$i];
		if(file_exists('./'.$str)){
			if(!is_dir($str)){
				$otvet.=$str.' - NOT DIR!';
			}
		}else{
			if(mkdir('./'.$str, 0777)){
				
			}else{ 
				$otvet.='[X] mkdir '.$str;
			}
		}
		
	}
	
	$str.='/';
	$rand=rand();

	$fp = fopen($str.$dd.'_'.$rand.'.txt' , "w");
		fwrite($fp, $txt);
		fclose($fp);
		chmod($str.$dd.'_'.$rand.'.txt', 0755);

$comment='{"comment":"'.$_POST['comment'].'","ip":"'.$_SERVER['REMOTE_ADDR'].'","time":"'.date("H:i.s d.m.Y").'","url":"'.$str.$dd.'_'.$rand.'.txt","urli":"'.$str.$dd.'_'.$rand.'.json"}';
	$fp = fopen($str.$dd.'_'.$rand.'.json' , "w");
		fwrite($fp, $comment);
		fclose($fp);
		chmod($str.$dd.'_'.$rand.'.json', 0755);

		if((file_exists($str.$dd.'_'.$rand.'.json'))&&(file_exists($str.$dd.'_'.$rand.'.txt'))){
			echo '[V]';			
		}else{
			echo '[X]';
		}
echo ' GIT SAVE '.$str.$dd.'_'.$rand.'.txt';		

	
}else{ echo '[X] ERR GIT';}


echo $otvet;

?>