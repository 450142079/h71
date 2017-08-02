<?php
if(!isset($title)){$title='HAMSTER7';}
if(!isset($description)){$description=$title;}
if(!isset($keywords)){$keywords='HAMSTER7, хомяк 7, HAMSTER на сервер, хомяка на сервер, файл менеджер хомяк, файл менеджер h7';}
$jsontxt = file_get_contents($_SERVER["DOCUMENT_ROOT"].'/h7/site/data.json');
//$json = json_decode($jsontxt, true);
//echo 'Текущая версия PHP: ' . phpversion();
//print_r($json);



$json = '{"number": 12345678901234567890}';
print_r(json_decode($jsontxt));






?><!DOCTYPE html>
<html lang="ru">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<meta name="robots" content="index, follow" />
		<meta name="author" content="gst-samara.ru" />
		<meta name="publisher" content="GST Samara" />
		
		<meta name="description" content="<? echo $description; ?>" />
		<meta name="keywords" content="<? echo $keywords; ?>" />
		<meta name="generator" content="HAMSTER7 CMS" />
		
		<link rel="icon" type="image/x-icon" href="/hamster/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<title><? echo $title; ?></title>
		<link rel="stylesheet" type="text/css" href="/h7/site/css/index.css" />
	</head>
	<body>
		<header>
			<nav class="top-line">
				     <!--<ul>
                                <li>Ваше меню</li>
                     </ul>-->
                
			    <img href="/" src="/hamster/gst.png" alt="GST" class="logo_gst" onclick="window.open('/');" />
				<a href="/hamster/" >HAMSTER7</a>
				<a href="/hamster/install/" >УСТАНОВКА</a>
                <a href="/hamster/instructions/" >ИНСТРУКЦИЯ</a>
                <a href="/hamster/api/" >API</a>
                <a href="/hamster/help/" class="top-right" >ПОМОЩЬ</a>
                <!--<a href="/hamster/order/" >Заказать</a>
                <img src="/hamster/gst.png" alt="GST" class="logo_gst" />-->
			</nav>
		</header>