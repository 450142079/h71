<?php /*25.08.16
Скачать файлы download.php?s=pass~url
*/
exit('[X] <a href="http://www.gst-samara.ru/hamster/" target="_blank">Update HAMSTER7</a>');

if(!file_exists('./p.php')){exit('[X] PASS Not Exist');}
if(!isset($_POST['s'])){exit('[X]');}
$d=explode('*/',file_get_contents('./p.php'));
$d=explode('/*',$d[0]);$s=explode('~',$_POST['s']); 
if(md5($s[0])!=$d[1]){exit('[X] PASS');}$d = array();


if(!isset($s[1])){exit('[X] download: not url');}
if(!file_exists($s[1])){exit('[X] download: not exist file ('.$s[1].')');}
if(is_dir($s[1])){exit('[X] download: url is dir ('.$s[1].')');}

$file = $s[1];

file_force_download($file);
/*
function file_force_download($file) {
  if (file_exists($file)) {
    // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
    // если этого не сделать файл будет читаться в память полностью!
    if (ob_get_level()) {
      ob_end_clean();
    }
    // заставляем браузер показать окно сохранения файла
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    // читаем файл и отправляем его пользователю
    readfile($file);
    exit;
  }
}





function file_force_download($file) {
  if (file_exists($file)) {
    header('X-SendFile: ' . realpath($file));
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    exit;
  }
}
*/

function file_force_download($file) {
  if (file_exists($file)) {
    header('X-Accel-Redirect: ' . $file);
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    exit;
  }
}






/*
$file = $s[1];
    if (ob_get_level()) {
        ob_end_clean();
    }
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
exit;





header ("Content-Type: application/octet-stream");
header ("Accept-Ranges: bytes");
header ("Content-Length: ".filesize($file));
header ("Content-Disposition: attachment; filename=".$file);  
readfile($file);


Header("HTTP/1.1 200 OK");
Header("Connection: close");
Header("Content-Type: application/octet-stream");
Header("Accept-Ranges: bytes");
Header("Content-Disposition: Attachment; filename=filename.dat");
Header("Content-Length: 50000");
 
readfile($file);

file_force_download_ngix($file);
function file_force_download_ngix($file) {
    if (file_exists($file)) {
        header('X-Accel-Redirect: ' . $file);
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($file));
        exit;
    }
}



$content = 'Содержимое файла';
$filename = 'my_super_file.txt';
header ("Content-Type: application/octet-stream");
header ("Accept-Ranges: bytes");
header ("Content-Length: " . strlen($content));
header ("Content-Disposition: attachment; filename=" . $filename);  
*/


?>



