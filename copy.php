<?php /*24.08.16
copy.php?s=pass~url~in 
*/
if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();

if(!isset($s[1])){exit('[X] COPY not url');}
if(!isset($s[2])){exit('[X] COPY not url in');}
if(!file_exists($s[1])){exit('[X] COPY url notExist ('.$s[1].')');}
if(file_exists($s[2])){exit('[X] copy: url in Exist ('.$s[1].')');}

if(is_dir($s[1])){
	recurse_copy($s[1],$s[2]);
	if(file_exists($s[2])){
		echo '[V]';
	}else{
		echo '[X]';
	}
}else{
	if(copy($s[1],$s[2])){
		echo '[V]';
	}else{
		echo '[X]';
	}
}

echo ' copy';
for($i=1;$i<count($s);$i++){
    echo '~'.$s[$i];
}

function recurse_copy($src,$dst) { 
    $dir = opendir($src); 
    @mkdir($dst); 
    while(false !== ( $file = readdir($dir)) ) { 
        if (( $file != '.' ) && ( $file != '..' )) { 
            if ( is_dir($src . '/' . $file) ) { 
                recurse_copy($src . '/' . $file,$dst . '/' . $file); 
            } 
            else { 
                copy($src . '/' . $file,$dst . '/' . $file); 
            } 
        } 
    } 
    closedir($dir); 
} 

?>