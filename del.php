<?php /*24.08.16 
del.php?s=pass~url 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] DEL Url');}
if(!file_exists($s[1])){exit('[X] DEL no exist ('.$s[1].')');}

if(is_dir($s[1])){
  rmdir1($s[1]);rmdir($s[1]);
  if(file_exists($s[1])){echo'[X]';}else{echo'[V]';}
}else{
  if(unlink($s[1])){echo'[V]';}else{echo'[X]';}
}

echo ' del';
for($i=1;$i<count($s);$i++){
  echo '~'.$s[$i];
}

function rmdir1($url){
 $f=array_merge(glob($url.'/'.".*"), glob($url.'/'."*"));
 
 foreach($f as $el){
  if( (($el[strlen($el)-1]=='.')&&($el[strlen($el)-2]=='.')&&($el[strlen($el)-3]=='/'))||(($el[strlen($el)-1]=='.')&&($el[strlen($el)-2]=='/')) ){}else{
   if(is_dir($el)){
    rmdir1($el);
   }else{
    unlink($el);
   }
   if(is_dir($el)){rmdir($el);}
  }
 }
}

?>

