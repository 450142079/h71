<?php /*21.06.16
file_open.php?s=pass~url
$file = 'k_chat.txt'; 
$tt = file_get_contents($file); 
file_put_contents($file, $tt); 
*/

if(!file_exists('./p.php')){exit('[X] Not Exist Pass');}
if(!isset($_GET['s'])){exit('[X] Not Exist GET S');}
$s0=explode('*/',file_get_contents('./p.php'));
$s0=explode('/*',$s0[0]);$s=explode('~',$_GET['s']); 
if(md5($s[0])!=$s0[1]){exit('[X] Pass');}

if(!file_exists($s[1])){exit('[X] file_open: not exist ('.$s[1].')');}
if(is_dir($s[1])){exit('[X] file_open: is dir ('.$s[1].')');}

echo file_get_contents($s[1]);

?>
