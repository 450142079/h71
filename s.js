/*


m['tm'] - вторичное время(для функций, работающих со временем)
m['pass_v']==1  - когда пароль верный
b_m('pass') - запрос пароля
wind_add('тип');
otch_see() - показать отчет в пуске

*/



/*Создание основы==============================================================================================================*/
var m={};
m['v']='13.10.2016 Ссылки'; //версия

m['new_file_access']=0755; //Стандарт права при создании файла
m['new_dir_access']=0777; //Стандарт права при создании папки
m['otch']=''; //отчет
m['vid_papok']=0; //Вид папок блоки
m['pusk']=0; //пуск стандартно закрыт

var wind=[]; //для окон
var pam=[]; //для ссылок

/* /Создание основы==============================================================================================================*/





































































  
  
/*Пуск ====================================================================================================================================*/


//открыт закрыт
function pusk(n){
	if(n==1){m['pusk']=0;}
	if(n==0){m['pusk']=1;}
	
    if(m['pusk']==0){//если пуск закрыт
      document.getElementById('pusk').style.cssText=' ';
      m['pusk']=1;
    }else{
      document.getElementById('pusk').style.cssText='display:none;';
      m['pusk']=0;
    }
  }






//Выход с сайта
function exit(){
	var thisWindow = window.open(" ",'_self');
	thisWindow.close();
}




/*Время*/
var timer = setInterval(function() {
	var z0 = new Date();
	if(z0.getHours()<10){m[25]='0' + z0.getHours();}else{m[25]=z0.getHours();}
	if(z0.getMinutes()<10){m[26]='0' + z0.getMinutes();}else{m[26]=z0.getMinutes();}
	if(z0.getSeconds()<10){m[27]='0' + z0.getSeconds();}else{m[27]=z0.getSeconds();}
	document.getElementsByTagName("time")[0].innerHTML = m[25] + ':' + m[26] + ':' + m[27];
}, 1000);













/*кнопки в пуск*/
function pusk_el(){
  document.getElementById('pusk0').innerHTML+='\
  <!--<ul onClick="b_pusk_apps()"><i class="ico ico-all"  ></i><li>Программы</li></ul>-->\
  \
  <ul onClick="wind_add(\'ftp\');otch_see();"><i class="ico ico-home"></i><li>Мой HAMSTER7</li></ul>\
  \
  <ul onClick="b_pusk_pam();"><i class="ico ico-pam" ></i><li>Выделенное</li></ul>\
  \
  <ul onClick="otch_see();"><i class="ico ico-otch"></i><li>Отчёты</li></ul>\
  \
  <ul onClick="b_mail();"><i class="ico ico-mail"></i><li>Отправить почту</li></ul>\
  \
  <ul onClick="b_pusk_settings()"><i class="ico ico-settings" ></i><li>Настройки S7</li></ul>';
}
pusk_el();











/*Приложения в пуск*/
function b_pusk_apps(){
  document.getElementById('pusk_see').innerHTML='<h1>Программы</h1>\
  <button onClick="wind_add(\'ftp\')">Файл менеджер</button>\
  <button onClick="wind_add(\'browser\' ,\'./help.php\')">Browser</button>';
}

/*Настройки в пуск*/
function b_pusk_settings(){
   document.getElementById('pusk_see').innerHTML='<h1>Настройки S7<br/><br/>' + m['v'] + '</h1><h1><button onClick="b_save_h7()">Сохранить в h7.zip</button>\
   <br/>\
   <button onClick="b_desk_all_save()">Сохранить обстановку</button><br/>\
   <button onClick="wind_add(\'ftp\' ,\'../h7/i\', 262 ,271 ,597 ,446);alert(\'Для установки фона загрузите bg.jpg в папку ../h7/i \')">Установить фон</button><br/>\
   <button onClick="m[\'pass\']=\'\';m[\'pass_v\']=0;b_m(\'pass\');">Отойти</button><button onClick="exit()">Выход</button></h1><hr/>\
  <h1><img src="./i/gst.png" /><br/>Cделано в  GST Samara<br/>\
  <a href="http://gst-samara.ru" target="_blanck">О компании</a>\
  <a href="http://gstsamara.ru" target="_blanck">Интернет-магазин</a>\
  <a href="http://gst-samara.ru" target="_blanck">Заказать сайт</a>\
   </h1><br/>\
   Разработчик: Ивлев Евгений Александрович<hr/><br/>';

 }

function b_pusk_hid(){
  var str='';
  for(i=0;i<wind.length;i++){
    if(wind[i]['status']!='del'){
      str+='<button class="wind_pusk_' + wind[i]['status'] + '" onclick="wind_hid(' + i + ');b_pusk_hid();">' + wind[i]['name'] + '</button>';
    }
  }
  document.getElementById('wind_hid_see').innerHTML= str;
}
function b_pusk0_hid(){
	
}




function b_pusk_pam(){
  var str='<h1>Выделенное</h1>\
  <h1><button onClick="pam_clear();b_pusk_pam();">Убрать выделение</button><button onClick="pam_del();b_pusk_pam();">УДАЛИТЬ</button></h1>';
  for(i=0;i<pam.length;i++){
    str+='<div class="pusk_el"><ul><i class="ico ico-otch"></i>\
			<li>\
				<button onClick="b_m(\'' + s1(pam[i]) + '\', \'' + s4(pam[i]) + '\', 0, event)">Меню</button>\
				<button onClick="pam_add(\'' + pam[i] + '\');b_pusk_pam();">Убрать выделение</button>\
			</li>\
		</ul>\
	<b>' + s2(pam[i]) + '</b>' + pam[i] + '</div>';
  }
  document.getElementById('pusk_see').innerHTML=str;
}



m['search']='';
function b_pusk_search_str(){
  var str='<h1>Выделенное</h1>\
  <h1><button onClick="pam_clear();b_pusk_pam();">Убрать выделение</button><button onClick="pam_del();b_pusk_pam();">УДАЛИТЬ</button></h1>';
  for(i=0;i<pam.length;i++){
    str+='<div class="pusk_el"><ul><i class="ico ico-otch"></i>\
      <li>\
        <button onClick="b_m(\'' + s1(pam[i]) + '\', \'' + s4(pam[i]) + '\', 0, event)">Меню</button>\
        <button onClick="pam_add(\'' + pam[i] + '\');b_pusk_pam();">Убрать выделение</button>\
      </li>\
    </ul>\
  <b>' + s2(pam[i]) + '</b>' + pam[i] + '</div>';
  }
  document.getElementById('pusk_see').innerHTML=str;
}
































function alert2(){
	alert(5);
}



















































/*Всё с окнами=======================================================================*/


/*Создаем окно
Мод, доп текст, x, y, w, h*/

function wind_add(mod ,txt, x ,y ,w ,h, status){
  if(x==undefined){x=b_random_int(444,500);}
  if(y==undefined){y=b_random_int(50,200);}
  if(w==undefined){w=b_random_int(400,700);}
  if(h==undefined){h=b_random_int(300,500);}
  
  
  if(mod==undefined){mod='ftp';}
  if(txt==undefined){txt='Seven7';}

  var n = wind.length;
  wind[n]={};
  if(status==undefined){wind[n]['status']='open';}else{ wind[n]['status']=status;}
  wind[n]['mod'] = mod;
  wind[n]['obj'] = document.createElement('article');
  wind[n]['data'] = '';
  
  wind[n]['x']=x;
  wind[n]['y']=y;
  wind[n]['w']=w;
  wind[n]['h']=h;
  wind[n]['full']=0;

 
 wind[n]['obj'].style.cssText = 'left:' + x + 'px;top:' + y + 'px;';
 wind[n]['obj'].onmousedown=function(){ highlight(n); };

 /*Создаем*/ document.body.appendChild(wind[n]['obj']);
 highlight(n);


switch(mod){
   case 'ftp':{

if(txt=='Seven7'){txt='..';}
	wind[n]['name'] ='FM w' + n;
	
    wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
<div class="see_bg_menu">\
	<ul onclick="b_back(' + n + ')"><i class="ico ico-back"></i></ul>\
    <ul><i class="ico ico-new"></i><li>Создать<br/>\
	<button onClick="h7_new(document.getElementById(\'in_' + n + '\').value, \'f\');b_f5(' + n + ');">Файл</button>\
    <button onClick="h7_new(document.getElementById(\'in_' + n + '\').value, \'h\');b_f5(' + n + ');">Папку</button>\
	</li></ul>\
	<ul><i class="ico ico-download"></i><li>Загрузить<br/>\
		<input id="file_' + n + '" type="file" name="myfile" />\
		<button onclick="b_upload(' + n + ')">Загрузить выбр</button>\
    <button onClick="b_urlins7(' + n + ');">Загрузить с URL</button>\
	</li></ul>\
	<ul><i class="ico ico-pam"></i><li>Выделенное<br/>\
    <button onClick="b_pusk_pam();pusk(1);">Смотреть</button>\
	<button onClick="pam_copypast(' + n + ');b_f5(' + n + ');">Копировать сюда</button>\
    <button onClick="pam_cutpast(' + n + ');b_f5(' + n + ');">Переместить сюда</button>\
	<button onClick="pam_clear();b_f5(' + n + ');">Отменить</button>\
	<button onClick="b_archive(' + n + ');">Архивировать</button>\
    <button onClick="pam_del();b_f5(' + n + ');">Удалить</button>\
    <button onClick="pam_mark(' + n + ', \'h\')">Выделить папки</button>\
	<button onClick="pam_mark(' + n + ', \'f\')">Выделить файлы</button>\
	<button onClick="pam_mark_all(' + n + ')">Выделить всё</button>\
	<button onClick="pam_mark_all_not(' + n + ')">Отменить в папке</button>\
    <button onClick="b_mail();"><img scr="./i/in.png" />Отправить на почту</button>\
	</li></ul>\
	<ul><i class="ico ico-all"></i><li>Прочее<br/>\
	<button onclick="b_search_str(' + n + ')">Искать строку</button>\
	<button onclick="b_desk_mark(' + n + ');">В закладки</button>\
    <button onClick="wind_add(\'ftp\', document.getElementById(\'in_' + n +'\').value, 444,494,600,400);b_m();"><img scr="" />Дублировать окно</button>\
	<button onClick="b_f5(' + n + ')">Обновить данные</button>\
	<button onclick="b_back(' + n + ')">Перейти обратно</button>\
	<button onclick="document.getElementById(\'see_' + n + '\').className=\'see_bg bg_2\'">Вид список</button>\
	<button onclick="document.getElementById(\'see_' + n + '\').className=\'see_bg bg_1\'">Вид блоки</button>\
	</li></ul>\
</div>\
<div class="bl_bg" id="bl_' + n + '" style="width:' + w + 'px;height:' + h + 'px;">\
<i class="ico ico-5" onclick="b_f5(' + n + ')"></i>\
<input id="in_' + n + '" type="text" value="' + txt + '" />\
<div  class="see_bg bg_1" id="see_' + n + '"></div>\
<i class="ico ico-4" onmousedown="wind_size(' + n + ',event); return false;"></i>\
</div>'; 
ajax_see(n,document.getElementById('in_' + n).value);




break;}

   case 'edit':{
	   wind[n]['name'] ='Edit w' + n + ' ' + s2(txt);
	   wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
	   <div class="see_bg_menu">\
<ul><i class="ico ico-file"></i><li>Файл<br/>\
  <button onClick="b_file_save(' + n + ')">Сохранить</button>\
  <button onClick="b_file_save(' + n + ');wind_del(' + n + ');">Сохранить и выйти</button>\
  <button onclick="ajax(\'weight~\' + document.getElementById(\'in_' + n + '\').value);b_m();">Размер</button>\
</li></ul>\
<ul><i class="ico ico-git"></i><li>Откат<br/>\
	<button onClick="b_git_save(' + n + ')">Сохранить</button>\
	<button onClick="b_git_see(' + n + ')">Список версий</button>\
</li></ul>\
<ul><i class="ico ico-all"></i><li>Прочее<br/>\
<button onclick="b_desk_mark(' + n + ');">В закладки</button>\
</li></ul>\
</div>\
<div class="bl_bg" id="bl_' + n + '" style="width:' + w + 'px;height:' + h + 'px;">\
<input id="in_' + n + '" type="text" value="' + txt + '" />\
<textarea class="see_bg" id="see_' + n + '" style="background:#333;" > </textarea>\
<i class="ico ico-4" onmousedown="wind_size(' + n + ',event); return false;"></i>\
</div>';

break;}

   case 'edit2':{
	   wind[n]['name']='EDIT2 w' + n + ' ' + s2(txt);
	   wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');edit_mm[' + n + '].resize();" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
<div class="see_bg_menu">\
<ul><i class="ico ico-file"></i><li>Файл<br/>\
	<button onClick="b_file_save2(' + n + ')">Сохранить</button>\
	<button onClick="b_file_save2(' + n + ');wind_del(' + n + ');">Сохранить и выйти</button>\
	<button onclick="ajax(\'weight~\' + document.getElementById(\'in_' + n + '\').value);b_m();">Размер</button>\
</li></ul>\
<ul><i class="ico ico-git"></i><li>Откат<br/>\
	<button onClick="b_git_save(' + n + ',\'edit2\')">Сохранить</button>\
	<button onClick="b_git_see(' + n + ',\'edit2\')">Список версий</button>\
</li></ul>\
<ul><i class="ico ico-all"></i><li>Прочее<br/>\
	<button onclick="b_desk_mark(' + n + ');">В закладки</button>\
    <button onClick="edit_mm[' + n + '].resize();">Обновить размер</button>\
	<button onClick="b_m(\'edit2_them\',0,' + n + ', event);">Тема</button>\
	<button onClick="b_m(\'edit2_lang\',0,' + n + ', event);">Язык</button>\
	<button onClick="b_m(\'edit2_fontsize\',0,' + n + ', event);">Размер шрифта</button>\
</li></ul>\
</div>\
<div class="bl_bg" id="bl_' + n + '" style="width:' + w + 'px;height:' + h + 'px;">\
<input id="in_' + n + '" type="text" value="' + txt + '" disabled />\
<div id="see_' + n + '"  class="edit2_0" > </div>\
<i class="ico ico-4" onmousedown="wind_size(' + n + ',event); return false;" onmouseup="edit_mm[' + n + '].resize();"></i>\
</div>'; 

break;}

   case 'browser':{
	   wind[n]['name']='Browser w' + n + ' ' + s2(txt);
	   wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
	   <input id="in_' + n + '" type="text" value="' + txt + '" />\
<button onClick="b_frame_go(' + n + ')"><img src="./i/gt.png" /></button>\
<br/>\
<iframe src="' + txt + '"; style="background:#eee;width:' + w + 'px;height:' + h + 'px;" id="see_' + n + '" class="see_bg" frameborder="0px" scrolling="yes">iframe</iframe>\
<i class="ico ico-4" onmousedown="wind_size(' + n + ',event); return false;" ></i>\
';


 break;}



case 'mp3':{
	wind[n]['name']='Music w' + n + ' ' + s2(txt);
	wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
<audio controls="controls" autoplay="autoplay" loop="loop"><source src="' + txt + '" type="audio/mpeg"><a href="' + txt + '" target="_blanck">Скачать</a></audio><br/>';


 break;}


  
   case 'mail':{
     wind[n]['name'] ='Mail w' + n;
     wind[n]['obj'].innerHTML='<h6  style=" cursor: move; " onmousedown="wind_move(' + n + ',event); return false;" >' + wind[n]['name'] + '<i onClick="wind_del(' + n + ')" class="ico ico-3"></i><i onClick="wind_size_full(' + n + ');" class="ico ico-2"></i><i onclick="wind_hid(' + n + ');b_pusk_hid();" class="ico ico-1"></i></h6>\
<div class="see_bg_menu">\
<ul onclick="b_mail_go(' + n + ');"><i class="ico ico-mail"></i><li>Отправить</li></ul>\
<ul onclick="b_pusk_pam();"><i class="ico ico-file"></i><li>Просмотреть прикрепленные файлы</li></ul>\
</div>\
<div class="bl_bg" id="bl_' + n + '" style="width:' + w + 'px;height:' + h + 'px;">\
<input id="in_' + n + '" type="text" value="k5pr@ya.ru" />\
<input id="in0_' + n + '" type="text" value="Seven7@' + window.location.hostname + '" />\
<input id="in1_' + n + '" type="text" value="Тема" />\
<textarea class="see_bg" id="see_' + n + '" style="background:#333;" ><h1 style="background:#999;color:#fff;">HAMSTER7</h1></textarea>\
<i class="ico ico-4" onmousedown="wind_size(' + n + ',event); return false;"></i>\
</div>';

break;}



   default:{
    wind[n]['obj'].innerHTML='<h6 id="wind_' + n + '" style=" cursor: move; " onmousedown = "mouse_in(' + n + ');" onmouseup="mouse_out(' + n + ');" >Seven7<button onClick="wind_del(' + n + ')">x</button><button>o</button><button>-</button></h6>\
<div style="background:#eee;width:' + w + 'px;height:' + h + 'px;">' + txt + '</div>';
   }
}

b_pusk_hid();
return n;

}


/*удаляем окно*/
function wind_del(n){
  wind[n]['obj'].parentNode.removeChild(wind[n]['obj']);
  wind[n]['status'] ='del';
  b_pusk_hid();
}



/*Двигаем окна*/
function wind_move(n,e){

	var mX = document.body.scrollLeft + e.clientX;
	var mY = document.body.scrollTop + e.clientY;
	
	var wX = wind[n]['obj'].style.left;
	var wY = wind[n]['obj'].style.top;
	
	var stop=0;
//console.log(wX + 'w' + wY + ';' + mX + 'm' + mY);

document.onmousemove=drag3;
function drag3(e){
	if(stop==0){ 
	
	var wXn= +s6(wX) +(document.body.scrollLeft + e.clientX - mX);
	var wYn= +s6(wY) +(document.body.scrollTop + e.clientY - mY);

	if(wXn<0){wXn=0;}
	if(wYn<0){wYn=0; }

	wind[n]['obj'].style.left = wXn + 'px';
	wind[n]['obj'].style.top = wYn + 'px';
	}
}
document.onmouseup=function(){	
if(s6(wind[n]['obj'].style.left)<=0){
	//document.getElementById('bl_' + n).style.width = document.documentElement.clientWidth/2 + 'px';
	//document.getElementById('bl_' + n).style.height = document.documentElement.clientHeight - 100 + 'px';
	wind[n]['obj'].style.top='1px';
}

if(s6(wind[n]['obj'].style.top)<=0){
	//wind_size_full(1);
	//document.getElementById('bl_' + n).style.width = document.documentElement.clientWidth - 50 + 'px';
	//document.getElementById('bl_' + n).style.height = document.documentElement.clientHeight - 100 + 'px';
	//wind[n]['obj'].style.left='1px';
	//wind[n]['obj'].style.top='5px';
}


stop=1; document.onmousemove=''; document.onmouseup='';

 };
}


/*
function mouse_agent(v){ return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0)); }
function mouse_xy(e,v){ return(v?(mouse_agent('msie')?event.clientY+document.body.scrollTop:e.pageY):(mouse_agent('msie')?event.clientX+document.body.scrollTop:e.pageX)); }
function mouse_OBJ(d,e,n){
  //wind[n]['obj'].style.cssText='z-index:100;top:0px;left:0px;';
    highlight(n);
    function drag(e){ if(!stop){ 
      wind[n]['obj'].style.top=(tX=mouse_xy(e,1)+oY-eY+'px'); 
      wind[n]['obj'].style.left=(tY=mouse_xy(e)+oX-eX+'px'); } 
    }
    var oX=parseInt(wind[n]['obj'].style.left),oY=parseInt(wind[n]['obj'].style.top),eX=mouse_xy(e),eY=mouse_xy(e,1),tX,tY,stop;
    document.onmousemove=drag; document.onmouseup=function(){ stop=1; document.onmousemove=''; document.onmouseup=''; };
}
*/



/*Меняем размер*/
function wind_size(n,e){

	wind[n]['full']=0;

	var mX = document.body.scrollLeft + e.clientX;
	var mY = document.body.scrollTop + e.clientY;
	
	var wX = document.getElementById('bl_' + n).style.width;
	var wY = document.getElementById('bl_' + n).style.height;

	var wXmin = 250;
	var wYmin = 270;
	
	var stop=0;
//console.log(wX + 'w' + wY + ';' + mX + 'm' + mY);

document.onmousemove=drag2;
function drag2(e){
	if(stop==0){ 
	
	var wXn= +s6(wX) +(document.body.scrollLeft + e.clientX - mX);
	var wYn= +s6(wY) +(document.body.scrollTop + e.clientY - mY);

	if(wXn<wXmin){wXn=wXmin;}
	if(wYn<wYmin){wYn=wYmin;}

	document.getElementById('bl_' + n).style.width = wXn + 'px';
	document.getElementById('bl_' + n).style.height = wYn + 'px';
	}
}
document.onmouseup=function(){ stop=1; document.onmousemove=''; document.onmouseup=''; };
}








/*Выделяем окна*/
function highlight(n){
  var ind=wind[n]['obj'].style.zIndex;
  if(ind!=1){
    for(i=0;i<wind.length;i++){
      if(wind[i]['status'] !='del'){
        wind[i]['obj'].className=' ';
        if(wind[i]['obj'].style.zIndex>ind){
          wind[i]['obj'].style.zIndex=wind[i]['obj'].style.zIndex-1;
        }
      }
    }
    wind[n]['obj'].style.zIndex=1;
    wind[n]['obj'].className='wind_select';
  }
}


/*Размер окна*/
function wind_size2(n,w,h){
document.getElementById('bl_' + n).style.cssText ='background:#eee;width:' + w + 'px;height:' + h + 'px;';
b_m();
}




/*Размер во всё окно
номер окна, развернуть свернуть 1/0 */
function wind_size_full(n, d){
	if(d==1){wind[n]['full']=0;}
	if(d==0){wind[n]['full']=1;}
	
	if(wind[n]['full']==1){//если открыт, закрываем
		wind[n]['obj'].style.left=wind[n]['x'];
		wind[n]['obj'].style.top=wind[n]['y'];
		document.getElementById('bl_' + n).style.width=wind[n]['w'];
		document.getElementById('bl_' + n).style.height=wind[n]['h'];
		wind[n]['full']=0;
	}else{//если закрыт, открываем
		wind[n]['x']=wind[n]['obj'].style.left;
		wind[n]['y']=wind[n]['obj'].style.top ;
		wind[n]['w']=document.getElementById('bl_' + n).style.width;
		wind[n]['h']=document.getElementById('bl_' + n).style.height;

		wind[n]['obj'].style.left='20px';
		wind[n]['obj'].style.top='60px';
		document.getElementById('bl_' + n).style.width=(document.documentElement.clientWidth-90) + 'px';
		document.getElementById('bl_' + n).style.height=(document.documentElement.clientHeight-150) + 'px';
		wind[n]['full']=1;	
	}
}






/*Свернутые окна*/
function wind_hid(n){
  if(wind[n]['status']=='open'){
    wind[n]['status']='hid';
    wind[n]['obj'].style.display='none';
  }else{
    if(wind[n]['status']=='hid'){
     wind[n]['status']='open';
     wind[n]['obj'].style.display='inline-block';
	 highlight(n);
    }
  }

}



















































/*Все запросы =====================================================================================*/


function ajax(z){
  m['z'] = z.split('~'); 
  z='';
  for(ij=1;ij<m['z'].length;ij++){
    z+='~' + m['z'][ij];
  }
   otchet('[i] ' + m['z'][0] + z);

  var w = new XMLHttpRequest();
  w.open('POST', './' + m['z'][0] + '.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + z);
          var str = w.responseText;
          otchet(str);
          //return str;
} 







/*Просмотр   номер окна выоыода, адрес, принудительно*/
function ajax_see(n, url, cash0){

 if(n==undefined){n=0;}
 if(url==undefined){url='..';}
 if(cash0==undefined){cash0=0;}


 document.getElementById('in_' + n).value=url;

 //alert('Кеш ' + cash0)
if(cash0 == 1){
	ftp_see(n, wind[n]['data']);
}else{

	var w = new XMLHttpRequest();
	w.open('POST', './see.php', true);
	w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	w.send('s=' + m['pass'] + '~'+ url);
    w.onreadystatechange = function(){
        if(w.readyState != 4) return;
        if(w.status != 200){
           alert(w.status + ': ' + w.statusText);
        } else {
			 setTimeout(function() { wind[n]['data']=w.responseText; ftp_see(n, wind[n]['data']); }, 0);
			
		}
	}
	
}
	
	
}



function ftp_see(n,str){
	
	//alert(str);
          if(str.length>1){//если строка нормальная недоработка
            m[0]=[];
            m[0] = str.split('~'); 
            str=''; 

        var pam_class='';   
		   
        for(i=0;i<m[0].length;i++){
            if(pam_isset(m[0][i])){
                pam_class='pam_class';
                  }else{
                pam_class='';
            }
            if(s1(m[0][i])=='h'){
				if(s2(m[0][i])!='.'){ 
					if(s2(m[0][i])=='..'){ /*Если обратно*/
						str+='<div class="el color_dir" ><button onClick="b_back(' + n + ')"><i class="ico ico-back"></i>Назад</button></div>';
					}else{
						str+='<div class="el color_dir" oncontextmenu="b_m(\'h\', \'' + s4(m[0][i]) + '\', ' + n + ', event);return false;"><button onClick="b_folder(' + n + ', \'' + s4(m[0][i]) + '\', event)"><i class="ico img_dir"></i>' + s2(m[0][i]) + '</button><i class="bt ico ico-menu2" onClick="b_m(\'h\', \'' + s4(m[0][i]) + '\', ' + n + ', event)"></i><i class="bt ico ' + pam_class + ' ico-pam2 " onClick="pam_add(\'' + m[0][i] + '\');b_f5_cash(' + n + ');"></i></div>';
					}
				}
			}
        }
            for(i=0;i<m[0].length;i++){

			  if(pam_isset(m[0][i])){
                pam_class='pam_class';
                  }else{
                pam_class='';
              }
              if(s1(m[0][i])=='f'){
				str+='<div class="el color_' + s3(m[0][i]) + '" oncontextmenu="b_m(\'h\', \'' + s4(m[0][i]) + '\', ' + n + ', event);return false;"><button onClick="b_file(\'' + s4(m[0][i]) + '\', event, ' + n + ')"><i class="ico img_' + s3(m[0][i]) + '"></i>' + s2(m[0][i]) + '</button><i class="bt ico ico-menu2" onClick="b_m(\'f\', \'' + s4(m[0][i]) + '\', ' + n + ', event)"></i><i class="bt ico ' + pam_class + ' ico-pam2" onClick="pam_add(\'' + m[0][i] + '\');b_f5_cash(' + n + ');"></i></div>';
				
				}
            }



          }else{
            str='NO';
          }



     document.getElementById('see_' + n).innerHTML = str;
}













































/*Отчётность*/
function otchet(t){
  var z0 = new Date();
if(z0.getHours()<10){m[25]='0' + z0.getHours();}else{m[25]=z0.getHours();}
if(z0.getMinutes()<10){m[26]='0' + z0.getMinutes();}else{m[26]=z0.getMinutes();}
if(z0.getSeconds()<10){m[27]='0' + z0.getSeconds();}else{m[27]=z0.getSeconds();}
  m['otch']='<p class="pam_s' + t[1] + '">' + m[25] + ':' + m[26] + '.' + m[27] + ' ' + t + '</p>' + m['otch'];
  document.getElementById('otch').innerHTML = '<button onClick="document.getElementById(\'pusk\').style.cssText=\' \';m[\'pusk\']=1;otch_see();">' + t + '</button>';
}











/*Подсветка регистра*/
function bg_light_go(n){
	document.getElementById('bg_light_' + n).innerHTML=Prism.highlight(document.getElementById('see_' + n).value, Prism.languages.markup);
		
	//.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	//alert(n);
	//setTimeout( function(){ hljs.highlightBlock(document.getElementById('bg_light_' + n)); } , 10);
	//hljs.highlightBlock(document.getElementById('bg_light_' + n));
}
















































/*Выпадающее меню =====================================================
папка или файл, url, в каком окне*/
b_m();
function b_m(h, url, n, e){
  if(!n){n=0;}
  if(!h){h='x';}
  if(!e){e={}; 
  e.clientX= document.documentElement.clientWidth / 2 - 100; 
  //e.clientX=0; 
  e.clientY= document.documentElement.clientHeight  / 2 - 100;
  }
  if(h=='x'){
  	if(m['pass_v']){
  		document.getElementById('back_not').style.cssText='display:none;';
  		document.getElementById('aside').style.cssText='display:none;';
  	}else{
  		
  	}
    //document.getElementById('aside').innerHTML='<button onClick="b_m();">&#10006;</button>';
  }else{
    document.getElementById('back_not').style.cssText='display:block;height:' + document.documentElement.clientHeight + 'px';
    document.getElementById('aside').style.cssText='display:block;left:' + e.clientX + 'px;top:' + e.clientY + 'px;';
  }


  if(h=='h'){
    document.getElementById('aside').innerHTML='\
    <button onClick="ajax_see(' + n + ', \'' + url + '\');b_m();">Открыть</button>\
	<button onClick="wind_add(\'ftp\', \'' + url + '\', 444,494,600,400);b_m();">В нов окне</button>\
    <button onClick="">Создать ярлык x</button>\
    <button onClick="">Архивировать x</button>\
    <button onClick="pam_add(\'h' + url + '\');b_f5_cash(0);b_m();">Выделить</button>\
    <button onClick="b_del(\'' + url + '\');b_f5(' + n + ');">Удалить</button>\
    <button onClick="b_rename(\'' + url + '\');b_f5(' + n + ');">Переименовать</button>\
    <button onClick="ajax(\'weight~' + url + '\');b_m();">Размер</button>\
    <button onClick="ajax(\'time~' + url + '\');b_m();">Время</button>';
  }
  if(h=='f'){
    document.getElementById('aside').innerHTML='\
    <button onClick="b_edit(\'' + url + '\');">Изменить</button>\
	<button onClick="b_edit2(\'' + url + '\');">Изменить ++</button>\
    <button onClick="wind_add(\'browser\' ,\'' + url + '\', 300 ,250 ,600 ,350);b_m();">Browser GO</button>\
  <button onClick="window.open(\'' + url + '\', \'_blank\');b_m();">В новой вкладке</button>\
    <button onClick="b_m();">Отправить</button>\
    <button onClick="pam_add(\'h' + url + '\');b_f5_cash(0);b_m();">Выделить</button>\
    <button onClick="b_del(\'' + url + '\');b_f5(' + n + ');">Удалить</button>\
    <button onClick="b_rename(\'' + url + '\');b_f5(' + n + ');">Переименовать</button>\
    <button onClick="ajax(\'weight~' + url + '\');b_m();">Размер</button>\
     <button onClick="ajax(\'time~' + url + '\');b_m();">Время</button>\
  <button onClick="b_download(\'' + url + '\');b_m();">Скачать</button>\
  <button onClick="b_archivede(\'' + url + '\', ' + n + ');b_m();">Деархивация</button>';
    
  }
  
  if(h=='pass'){
	 m['tm']=2;
	 m['ttm']=setInterval(function(){ 
		m['tm']--;
		document.getElementById('pass_in').placeholder='   Пароль ' + m['tm'];
		document.getElementById('pass_in').value='';
		if(m['tm'] < 1){
		  document.getElementById('pass_in').placeholder='   Пароль';
		  clearInterval(m['ttm']);
		}
	 }, 1000);

	
	  
    document.getElementById('aside').innerHTML='\
	<div class="pass_class">\
	<input onkeyup="if(event.keyCode === 13){ pass_test(); }" type="password" autocomplete="off" placeholder="   Пароль 2" id="pass_in" />\
    <button onClick="pass_test()" style="background:rgba(0,0,0,0.5);color:#aaa;text-align:center;"><i class="ico ico-lock"></i>Вход</button></div>\
   ';
  
   document.getElementById('pass_in').focus();
    
  }
  
    if(h=='desk_s7'){
    document.getElementById('aside').innerHTML='\
	попал\
    <button onClick="ajax_see(' + n + ', \'' + url + '\');b_m();">Открыть</button>\
    <button onClick="b_edit(\'' + url + '\');">Изменить</button>\
	<button onClick="b_edit2(\'' + url + '\');">Изменить ++</button>\
    <button onClick="wind_add(\'browser\' ,\'' + url + '\', 300 ,250 ,600 ,350);b_m();">Browser GO</button>\
  <button onClick="window.open(\'' + url + '\', \'_blank\');b_m();">В новой вкладке</button>\
    <button onClick="b_m();">Отправить</button>\
    <button onClick="pam_add(\'f' + url + '\');b_m();">Копир/Вырезать</button>\
    <button onClick="b_del(\'' + url + '\');b_desk_f5();">Удалить</button>\
    <button onClick="b_rename(\'' + url + '\');b_desk_f5();">Переименовать</button>\
     <button onClick="ajax(\'time~' + url + '\');b_m();">Время</button>\
  <button onClick="b_download(\'' + url + '\');b_m();">Скачать</button>';
    
  }
  
  

  if(h=='p'){
    document.getElementById('aside').innerHTML='\
    <button onClick="b_m();">Вид</button>\
    <button onClick="b_m();">Сортировка</button>\
    <button onClick="b_m();">Обновить</button><hr/>\
        <button onClick="b_m();">Вставить</button>\
    <button onClick="b_m();">Встав Ярлык</button><hr/>\
    <button onClick="b_m();">Создать</button><hr/>\
    <button onClick="b_m();">Параметры экрана</button>\
    <button onClick="b_m();">Персонализация</button>';

  }
  if(h=='o'){
        document.getElementById('aside').innerHTML='\
        <button onClick="wind_size2(' + n + ', document.documentElement.clientWidth-77,document.documentElement.clientHeight-77)">Wind</button>\
        <button onClick="wind_size2(' + n + ', document.documentElement.clientWidth/2-77 ,document.documentElement.clientHeight-77)">[||]</button>\
        <button onClick="wind_size2(' + n + ', document.documentElement.clientWidth-77 ,document.documentElement.clientHeight/2-77 )">[=]</button>\
        <button onClick="wind_size2(' + n + ', document.documentElement.clientWidth/2-77 ,document.documentElement.clientHeight/2-77 )">[==]</button>\
    <button onClick="wind_size2(' + n + ',600,400)">600x400</button>\
    <button onClick="wind_size2(' + n + ',360,250)">360x250</button>';
  }
  if(h=='vid_see'){}

  
  
  if(h=='edit2_them'){
	  document.getElementById('aside').innerHTML='\
	        <button onClick="edit2_theme_go(' + n + ', this.innerHTML)">twilight</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">vibrant_ink</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">textmate</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">solarized_light</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">solarized_dark</button>\
	\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">pastel_on_dark</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">monokai</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">mono_industrial</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">merbivore_soft</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">merbivore</button>\
	\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">kr_theme</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">idle_fingers</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">eclipse</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">dawn</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">crimson_editor</button>\
	\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">cobalt</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">clouds_midnight</button>\
	<button onClick="edit2_theme_go(' + n + ', this.innerHTML)">clouds</button>';
  }
  if(h=='edit2_lang'){
	  document.getElementById('aside').innerHTML='\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">text</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">javascript</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">xml</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">html</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">css</button>\
	\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">scss</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">python</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">php</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">java</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">ruby</button>\
	\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">c_cpp</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">coffee</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">json</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">perl</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">clojure</button>\
	\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">ocaml</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">csharp</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">haxe</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">svg</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">textile</button>\
	\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">groovy</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">liquid</button>\
	<button onClick="edit2_lang_go(' + n + ', this.innerHTML)">Scala</button>';
  }



  if(h=='edit2_fontsize'){
	  document.getElementById('aside').innerHTML='\
	<button onClick="edit2_fontsize_go(' + n + ', 8)">8</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 10)">10</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 12)">12</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 14)">14</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 16)">16</button>\
	\
	<button onClick="edit2_fontsize_go(' + n + ', 18)">18</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 20)">20</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 25)">25</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 30)">30</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 35)">35</button>\
	<button onClick="edit2_fontsize_go(' + n + ', 40)">40</button>';
  }





}

/*Правый клик*/
//document.oncontextmenu=new Function("b_m('p');return false;");




































/*Кнопки==========================================*/


/*Окна обратно*/
function b_back(n){
 if(n==''){n=0;}
  var str=document.getElementById('in_' + n).value;
  str=str.substr(0,str.length-1);
  str=str.substr(0,str.lastIndexOf('/'));
  if(str==''){str='..';}
  //console.log(str);
  //alert(str)
  ajax_see(n,str);
}


/*Удалить*/
function b_del(url){
  if(url==undefined){return false;}
  if(confirm('УДАЛИТЬ!? ' + url)){
    ajax('del~' + url);
    b_m();
  }
}

/*Переименовать*/
function b_rename(url){
  if(url==undefined){return false;}
  var url2=prompt('Переименовать на', s2(url));
  if(url2!=null){
    ajax('rename~' + url + '~' + s5(url) + url2);
  b_m();
  }
}

/*Обновить окно*/
function b_f5(n){
  if(n==''){n=0;}
  ajax_see(n, document.getElementById('in_' + n).value, 0);
}


function b_f5_cash(n){
  ajax_see(n, document.getElementById('in_' + n).value, 1);
}






/*Создать папку или файл
ссылка на него, тип f/h, название
*/
function h7_new(url, h, name){
	if(name==undefined||name==null){
		name=prompt('Название', 'new');
	}
	if(name!=null){
			var access=0;
		if(h=='h'){
			access=m['new_dir_access'];
		}else{
			access=m['new_file_access'];
		}
		ajax('new~' + url + '/' + name + '~' + h + '~' + access);
	}
}


function b_frame_go(n){
  document.getElementById('see_' + n).src=document.getElementById('in_' + n).value;
}



/*Простейший редактор*/
function b_edit(url, x ,y ,w ,h, status){
  var n = wind_add('edit',url, x ,y ,w ,h, status)
b_m();
var w = new XMLHttpRequest();
  w.open('GET', './file_open.php?s=' + m['pass'] + '~'+ url, true);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send();
      w.onreadystatechange = function(){
        //if (xhr.readyState != 4) return;
        if (w.status != 200) {
           alert(w.status + ': ' + w.statusText);
        } else {
          var str =w.responseText;
          document.getElementById('see_' + n).value = str;
        }
      }


}



/*Запуск почтового окна*/
function b_mail(){
  wind_add('mail' , 'Hi', 100 ,100 ,500 ,500);
}

function b_mail_go(n){
  var to=document.getElementById('in_' + n).value;
  var txt=document.getElementById('see_' + n).value;
  var header=document.getElementById('in1_' + n).value;
  var ot=document.getElementById('in0_' + n).value;
  var str='';

for(i=0;i<pam.length;i++){
  str+=s4(pam[i]);
  if(i+1<pam.length){str+='~';}
}

//alert(str);

  

   otchet('[i] mail ' + to);

  var w = new XMLHttpRequest();
  w.open('POST', './mail.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~' + to + '~' + header + '~' + ot + '&txt=' + txt + '&file_str=' + str);
          str = w.responseText;
          otchet(str);
        
}


/*Загрузка файлов через ajax*/
function b_upload(n){
otchet('[i] загрузка файла ' + document.getElementById('file_' + n).files[0].name); 

var w = new XMLHttpRequest();
w.open('POST', './upload.php', false);
var formData = new FormData();
formData.append('s', m['pass'] + '~' + document.getElementById('in_' + n).value);
formData.append("myfile", document.getElementById('file_' + n).files[0], document.getElementById('file_' + n).files[0].name);
w.send(formData); 

otchet(w.responseText); 

b_f5(n);
}


/*Продвинутый редактор*/
edit_mm={};
function b_edit2(url, x ,y ,w ,h, status){
	var hh=s3(url);

  var n = wind_add('edit2',url, x ,y ,w ,h, status);
b_m();


  var w = new XMLHttpRequest();
  w.open('GET', './file_open.php?s=' + m['pass'] + '~'+ url, false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send();
          var str =w.responseText;

	edit_mm[n] = ace.edit('see_' + n);
	edit_mm[n].setValue(str);
    edit_mm[n].setTheme('ace/theme/monokai');
	//edit_mm[n].setShowPrintMargin(false);
	//edit_mm[n].setDisplaySettings(true);
switch(hh){
   case 'js':{ hh='javascript'; break;}
   case 's7':{ hh='javascript'; break;}
}
    edit_mm[n].session.setMode('ace/mode/' + hh);	  

/*
Меняем размер
edit_mm[1].resize();

*/
	  

}


/*Применение тем ко 2 редактору*/
function edit2_theme_go(n,txt){
	edit_mm[n].setTheme('ace/theme/' + txt);
}
/*Применение языков ко 2 редактору*/
function edit2_lang_go(n,txt){
	edit_mm[n].session.setMode('ace/mode/' + txt);
}
/*Применение языков ко 2 редактору*/
function edit2_fontsize_go(n,txt){
	edit_mm[n].setOption("fontSize", txt);
}









































/*GIT===========================================================*/
/*Сохранить  номер окна*/
function b_git_save(n,h){
	otchet('[i] GIT save id=' + n);
	var comment=prompt('Коммент к данной версии', 'Без коммент');
  comment=encodeURIComponent(comment);
	var txt='';
	
	if(h=='edit2'){
		txt=encodeURIComponent(edit_mm[n].getValue());
	}else{
		txt=encodeURIComponent(document.getElementById('see_' + n).value);
	}
var w = new XMLHttpRequest();
w.open('POST', './git_save.php?s=' + m['pass'], false);
w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
w.send('url=' + document.getElementById('in_' + n).value + '&txt=' + txt + '&comment=' + comment); 
if(w.status != 404){
	otchet(w.responseText);
	}

	
}


var m_git={};
function b_git_see(n,h){
  var str='';
  var w = new XMLHttpRequest();
w.open('GET', './git_see.php?s=' + m['pass'] + '~' + document.getElementById('in_' + n).value, false);
w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
w.send(); 
if(w.status != 404){
  str=w.responseText;
	m_git = JSON.parse(str);
	str='<h1>GIT откат ' + s2(document.getElementById('in_' + n).value) + '</h1>\
	<div class="pusk_el">' + document.getElementById('in_' + n).value + '</div>\
	<h1><button onClick="b_git_see(' + n + ',\'' + h + '\');">Обновить</button></h1>';
  //console.log(m_git);
for(var key in m_git){
    //console.log( "key: " + key + ", value: " + m_git[key] );
	str+='<div class="pusk_el"><ul><i class="ico ico-otch"></i>\
			<li>\
				<button onClick="b_git_past(\'' + m_git[key]['url'] + '\',' + n + ', \'' + h + '\')">Вернуть</button>\
				<button onClick="b_edit(\'' + m_git[key]['url'] + '\');">В новом окне</button>\
				<button onClick="b_git_del(\'' + m_git[key]['url'] + '\', \'' + m_git[key]['urli'] + '\');b_git_see(' + n + ',\'' + h + '\');">Удалить</button>\
			</li>\
		</ul>\
	<b>' + m_git[key]['comment'] + '</b>' + m_git[key]['time'] + '&emsp;ip:' + m_git[key]['ip'] + '</div>';
}

document.getElementById('pusk_see').innerHTML=str;
  }
}

//b_git_past(url,n,'edit2')

function b_git_past(url,n,h){
if(wind[n]['status']=='del'){
	alert('Вы закрыли окно ' + n);
}else{
	
	
  var str='';
  var w = new XMLHttpRequest();
w.open('GET', './file_open.php?s=' + m['pass'] + '~'+ url, false);
w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
w.send(); 
if(w.status != 404){
  str=w.responseText;
  }


  if(h=='edit2'){
    edit_mm[n].setValue(str);
  }else{
    document.getElementById('see_' + n).value=str;
  }
}
}



function b_git_del(url,urli){
	otchet('[s] GIT DEL start');
	ajax('del~' + url);
	ajax('del~' + urli);
	otchet('[s] GIT DEL stop');
}
























function b_edit_f5(n){
  var w = new XMLHttpRequest();
  w.open('GET', './file_open.php?s=' + m['pass'] + '~'+ document.getElementById('in_' + n).value, true);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send();
      w.onreadystatechange = function(){
        //if (xhr.readyState != 4) return;
        if (w.status != 200) {
           alert(w.status + ': ' + w.statusText);
        } else {
          var str =w.responseText;
          document.getElementById('see_' + n).value = str;
        }
      }
  
}

/*Скачать*/
function b_download(url){
  window.open('./download.php?s=' + m['pass'] + '~' + url, '_blank');
}


/*Я вспомнил пароль*/
function b_pass_go(){
  m['pass']=prompt('PASS', 'admin');
}





/*Я вспомнил пароль*/
function b_save_h7(){
  otchet(ajax('save_h7~h7'));
}






/*Загрузить с url
*/
function b_urlins7(n){
  var url=prompt('URL файла', '');
  otchet('[i] urlins7 ' + url);
  otchet(ajax('urlins7~' + url + '~' + document.getElementById('in_' + n).value + '/' + prompt('С URL в S7 с именем', s2(url))));
  b_f5(n);
}





function b_file_save(n){

  otchet('[i] SAVE ' + document.getElementById('in_' + n).value);
  var str = document.getElementById('see_' + n).value;
  var xhr = new XMLHttpRequest();

xhr.open('POST', './file_save.php?s=' + m['pass'] + '~' + document.getElementById('in_' + n).value, true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('txt=' + encodeURIComponent(str));
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  // по окончании запроса доступны:
  // status, statusText
  // responseText, responseXML (при content-type: text/xml)

  if (this.status != 200) {
    // обработать ошибку
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }
  otchet(this.responseText);
}


}
/*Сохранение для продвинутого редактора*/
function b_file_save2(n){

  otchet('[i] SAVE ' + document.getElementById('in_' + n).value);
  var str = edit_mm[n].getValue(); //document.getElementById('see_' + n).value;
  var xhr = new XMLHttpRequest();

xhr.open('POST', './file_save.php?s=' + m['pass'] + '~' + document.getElementById('in_' + n).value, true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('txt=' + encodeURIComponent(str));
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  // по окончании запроса доступны:
  // status, statusText
  // responseText, responseXML (при content-type: text/xml)

  if (this.status != 200) {
    // обработать ошибку
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }
  otchet(this.responseText);
}


}














/*Поиск текста по файлам*/
function b_search_str(n){
  var url = document.getElementById('in_' + n).value;
	var str = prompt('Строка которую ищем', '123');
  var f = prompt('Форматы для поиска xthtp "~"', 'php~html~txt~css');

	otchet('[s] search ' + str + ' in ' + url);
	//ajax('search_str~' + url + '~' + str);


  var w = new XMLHttpRequest();
  w.open('POST', './search_str.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~' + url + '~' + str + '&f=' + f);
          var txt = w.responseText;
          //otchet(str);
          //return str;

var pam_class='';

 m[0]=txt.split('~'); 
            txt='<h2>Поиск строки "' + str + '"</h2>'; 

            for(i=0;i<m[0].length;i++){
              if(pam_isset(m[0][i])){
                pam_class='p_class';
                  }else{
                pam_class='';
              }
              if(s1(m[0][i])=='f'){
               // txt+='<p class="' + pam_class + ' t_' + s3(m[0][i]) + ' f"><button class="kh" onClick="b_m(\'f\', \'' + s4(m[0][i]) + '\', ' + n + ', event)">O</button><button class="kh kh_m" onClick="pam_add(\'' + m[0][i] + '\');b_f5(' + n + ');">m</button><button class="kn" onClick="b_file(\'' + s4(m[0][i]) + '\')">' + s2(m[0][i]) + '</button></p>';
             	txt+='<div class="el color_' + s3(m[0][i]) + '" ><button onClick="b_file(\'' + s4(m[0][i]) + '\', event, ' + n + ')"><i class="ico img_' + s3(m[0][i]) + '"></i>' + s2(m[0][i]) + '</button><i class="bt ico ico-menu2" onClick="b_m(\'f\', \'' + s4(m[0][i]) + '\', ' + n + ', event)"></i></div>';
	
			 }
            }


	otchet('[s] search end');


  document.getElementById('see_' + n).innerHTML=txt;
}
function b_search_file(txt){
	
}










/*Архивация*/
function b_archive(n){
	
	var url = document.getElementById('in_' + n).value;
	var name = prompt('Имя архива', 'zzz');
	var f = prompt('Формат архива', 'zip');


	otchet('[i] archive ' + name);


	var file='';
	
/*Проверяем есть ли в этой же папке*/
	
for(i=0;i<pam.length;i++){
	if(pam[i].substr(1 ,url.length)==url){
		file+=s4(pam[i]);
		if(i+1<pam.length){
			file+='~';
		}
	}
	
}
	
	

  var w = new XMLHttpRequest();
  w.open('POST', './archive.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~' + url + '/' + name + '.' + f + '~' + document.getElementById('in_' + n).value.length + '&file=' + file);
    var str = w.responseText;
	otchet(str);
          
		  b_f5(n);
}








/*ДеАрхивация*/
function b_archivede(url,n){
	
  var w = new XMLHttpRequest();
  w.open('POST', './archivede.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~' + url + '~' + document.getElementById('in_' + n).value + '/');
    var str = w.responseText;
	otchet(str);
          
		  b_f5(n);
}









function b_folder(n,url,e){
  if(e.ctrlKey==true){ 
    pam_add('h' + url);b_f5_cash(n);
  }else{
    ajax_see(n,url);
  }
}







/*Функция запуска программ
function b_s7(url){

  var f;
  var w = new XMLHttpRequest();
w.open('GET', './file_open.php?s=' + m['pass'] + '~'+ url, false);
w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
w.send(); 
if(w.status != 404){
  //f=JSON.parse(w.responseText);
  }

console.log(f);

}
*/







/*Для открытия файлов*/
function b_file(url,e, n){
	
	if(e.ctrlKey==true){ 
		pam_add('f' + url);
		if(n=='desk'){ 
			b_desk_f5(); 
		}else{
			b_f5_cash(n);
		}
		
	}else{
	
	
switch(s3(url)){


  
   case 'mp3':{wind_add('mp3' ,url, 50 ,30 ,0 ,0); break;}
   case 'txt':{b_edit(url); break;}
   case 'html':{b_edit2(url); break;}
   case 'htm':{b_edit2(url); break;}
   case 'htaccess':{b_edit(url); break;}
   case 'ini':{b_edit(url); break;}
   
   case 'xml':{b_edit2(url); break;}
   case 'php':{b_edit2(url); break;}
   case 'js':{b_edit2(url); break;}
   case 'json':{b_edit2(url); break;}
case 'css':{b_edit2(url); break;}
	
	case 'a':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'png':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'jpg':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'jpeg':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'bmp':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'gif':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 'ico':{wind_add('browser', url, 1111 ,20 ,777 ,777); break;}
	case 's7':{b_s7(url); break;}

	
   default:{alert(s3(url) + ' чем открыть то?'); break;}
}

}

}











/*Всё для копипаст*/
/*Добавить*/
function pam_add(url){
  if(pam_isset(url)){
    for(i2=0;i2<pam.length;i2++){
      if(pam[i2]==url){pam_clear_el(i2);}
    }
  }else{
    pam[pam.length]=url;
  }

}
/*если есть*/
function pam_isset(url){
  var n=0;
  for(i2=0;i2<pam.length;i2++){
    if(pam[i2]==url){n++;}
  }
  if(n!=0){
    return true;
  }else{
    return false;
  }
}
/*Убрать с массива*/
function pam_clear_el(n){
  pam.splice(n, 1);
}
/*Очистить массив*/
function pam_clear(){
  pam=[];
}

/*копировать Встав выдеенн*/
function pam_copypast(n){
  otchet('[s] copypast start');
  var url = document.getElementById('in_' + n).value;
    for(i=0;i<pam.length;i++){
      ajax('copy~' + s4(pam[i]) + '~' + url + '/' + s2(pam[i]));
    }
   otchet('[s] copypast end'); 
}
/*вырезать вставить выделен*/
function pam_cutpast(n){
  otchet('[s] cutpast start');
  var url = document.getElementById('in_' + n).value;
 for(i=0;i<pam.length;i++){
    ajax('rename~' + s4(pam[i]) + '~' + url + '/' + s2(pam[i]));
 } 
   otchet('[s] cutpast stop');
   pam_clear();
}

/*Удалить то, что в массиве*/
function pam_del(){
if(confirm ('Удалить выделенные файлы и папки?'))
	{
	otchet('[s] pam_del start');
	for(i=0;i<pam.length;i++){
		ajax('del~' + s4(pam[i]));
	} 
	otchet('[s] pam_del stop');
	pam_clear();
	}
}









/*Выделить всё в папке*/
function pam_mark_all(n){
	str=wind[n]['data'];
	m[0] = str.split('~'); 
	for(i3=0; i3 < m[0].length; i3++){
		if(!pam_isset(m[0][i3])){
			pam[pam.length]=m[0][i3];
		}
	}
	b_f5_cash(n);
}

/*Убрать выделение всего в папке*/
function pam_mark_all_not(n){
	str=wind[n]['data'];
	m[0] = str.split('~'); 

	for(i3=0;i3<m[0].length;i3++){
		if(pam_isset(m[0][i3])){
			pam_add(m[0][i3]);
		}
	}
	b_f5_cash(n);
}








/*Выделить все папки в папке*/
function pam_mark(n, h){
	str=wind[n]['data'];
	m[0] = str.split('~'); 
	for(i3=0; i3 < m[0].length; i3++){
		if(s1(m[0][i3])==h){
			if(!pam_isset(m[0][i3])){
				pam[pam.length]=m[0][i3];
			}
		}
	}
	b_f5_cash(n);
}















































/*Запрос журнала история событий*/
function otch_see(){
   document.getElementById('pusk_see').innerHTML='<h1>Отчёты S7</h1>\
   <input type="text" id="pusk_in" value="' + m['zap_krai'] + '" />\
   <h1><button onClick="otch_new();">GO</button>\
   <button onClick="otch_see();">F5</button>\
   <button onClick="ajax(\'test\');otch_see();">TEST</button></h1>' + m['otch'];
}

/*Команда в консоль*/
m['zap_krai']='help';
function otch_new(){
	m['zap_krai']=document.getElementById('pusk_in').value;
	ajax(m['zap_krai']);
	otch_see();
}




function option_see(){
  document.getElementById('pusk_see').innerHTML='';
}







function b_s7( url ) {  

  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', url);
  js.setAttribute('defer', 'defer');
  document.getElementsByTagName('HEAD')[0].appendChild(js);

  js.parentNode.removeChild(js);
}










































/*Всё с рабочим столом, закладки, ссылки, сохранение ========================================================================*/



/*Закладки*/
function b_desk_mark(n){
	var name=prompt('Имя программы на EN', s2(document.getElementById('in_' + n).value));
	

   otchet('[i] new mark ' + name);

   var str = b_wind_source(n);
	
	str=encodeURIComponent(str);
  var w = new XMLHttpRequest();
  w.open('POST', './new.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~./d/' + name + '.s7~f&txt=' +  str);
          var str = w.responseText;
          otchet(str);
          //return str;
	b_desk_f5();
}




/*Исходная строчка для создания данного окна*/
function b_wind_source(n){
	var txt='';
	switch (wind[n]['mod']){
		
		case 'ftp':{ txt='wind_add(\'' + wind[n]['mod'] + '\' ,\'' + document.getElementById('in_' + n).value + '\', ' +
		s6(wind[n]['obj'].style.left) + ' ,' + s6(wind[n]['obj'].style.top) + ' ,' + 
		s6(document.getElementById('bl_' + n).style.width) + ' ,' + s6(document.getElementById('bl_' + n).style.height) + ',\'' + wind[n]['status'] + '\');'; break;}
	
	
	
		case 'edit':{txt='b_edit(\'' + document.getElementById('in_' + n).value + '\,' +
		s6(wind[n]['obj'].style.left) + ' ,' + s6(wind[n]['obj'].style.top) + ' ,' + 
		s6(document.getElementById('bl_' + n).style.width) + ' ,' + s6(document.getElementById('bl_' + n).style.height) + ',\'' + wind[n]['status'] + '\');'; break;}
		
		
		
		case 'edit2':{txt='b_edit2(\'' + document.getElementById('in_' + n).value + '\',' +
		s6(wind[n]['obj'].style.left) + ' ,' + s6(wind[n]['obj'].style.top) + ' ,' + 
		s6(document.getElementById('bl_' + n).style.width) + ' ,' + s6(document.getElementById('bl_' + n).style.height) + ',\'' + wind[n]['status'] + '\');'; break;}
		
		
		
		default:{ break;}
	}
	return txt;
}









/*Обновить рабочий стол*/
function b_desk_f5(){
	var str='';
	var n=0;
  var w = new XMLHttpRequest();
  w.open('POST', './see.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '~./d');
          var str = w.responseText;
          //otchet(str);
		  if(str.length>1){//если строка нормальная недоработка
            m[0]=[];
            m[0] = str.split('~'); 
            str=''; 

            for(i=0;i<m[0].length;i++){

			  if(pam_isset(m[0][i])){
                pam_class='pam_class';
                  }else{
                pam_class='';
              }
              if(s1(m[0][i])=='f'){
				str+='<div class="el color_' + s3(m[0][i]) + '" oncontextmenu="b_m(\'h\', \'' + s4(m[0][i]) + '\', ' + n + ', event);return false;"><button onClick="b_file(\'' + s4(m[0][i]) + '\', event, \'desk\')"><i class="ico img_' + s3(m[0][i]) + '"></i>' + s8(s2(m[0][i])) + '</button><i class="bt ico ico-menu2" onClick="b_m(\'desk_s7\', \'' + s4(m[0][i]) + '\', ' + n + ', event)"></i><i class="bt ico ' + pam_class + ' ico-pam2" onClick="pam_add(\'' + m[0][i] + '\');b_desk_f5()"></i></div>';
				}
            }
          }else{
            str='NO';
          }
          //return str;
	
	document.getElementById('main').innerHTML=str + b_desk_a_see();
}











/*Сохранить рабочую обстановку*/
function b_desk_all_save(){
	
var name=prompt('Имя рабочей области на EN', 'desk' + b_random_int(100, 999));
if(!(name==null || name=='')){	
	var str='';

	for(n=0;n<wind.length;n++){
		if(wind[n]['status']!='del'){
			str+=b_wind_source(n);
		}
	}


	   otchet('[i] new mark ' + name);
		
		str=encodeURIComponent(str);
	  var w = new XMLHttpRequest();
	  w.open('POST', './new.php', false);
	  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	  w.send('s=' + m['pass'] + '~./d/' + name + '.s7~f&txt=' +  str);
			  var str = w.responseText;
			  otchet(str);
			  //return str;
			  	  
		b_desk_f5();	
}
}






/*Добавить ссылку*/
function b_desk_a_new(){
  var url = prompt('URL', '');;
  
  if(url==null || url==''){alert('url не заполнен!'); return false;}
  
 // var n = prompt('Имя', 'a_' + b_random_int(100, 999));
  
  //if(n==null || n==''){
	var ms=[];
	ms=url.split('/');
	n=ms[2];  
 // }
   var w = new XMLHttpRequest();
  w.open('POST', './a_new.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass'] + '&url=' +  url + '&n=' + n);
          var str = w.responseText;
          otchet(str);
     
  b_desk_f5();
}




/*Просмотреть ссылки (вывод)
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
*/
function b_desk_a_see(){

  var w = new XMLHttpRequest();
  w.open('POST', './a_see.php', false);
  w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  w.send('s=' + m['pass']);
   var str = w.responseText;
   
   var ms = JSON.parse(str);str='';
   
   /*
console.log(ms);
ms.sort(compareNumeric);
console.log(ms); 
   */
   
   
   
for(i5=0;i5<ms.length;i5++){
	//console.log('Свойство: ' + key + ' значение: ' + ob[key] );
	str+='<div class="el color_s7" style="background:url(' + ms[i5]['url_img'] + ') 0px 0px #333;" ><button onclick="window.open(\'' + ms[i5]['url'] + '\');">\
	<i class="ico img_no"></i><p>' + ms[i5]['n'] + '</p></button><i class="bt ico ico-6" onclick="b_del(\'' + ms[i5]['id_url'] + '\');b_desk_f5();"></i><i class="bt ico  ico-7" onclick="b_edit(\'' + ms[i5]['id_url'] + '\');"></i></div>';
}

str+='<div class="el color_s7" style="background:url(./a/a_add.jpg) 0px 0px #333;"><button onclick="b_desk_a_new();"><i class="ico img_add"></i>Добавить ссылку</button></div>';
	
   
   return str;
}




/* /Всё с рабочим столом, закладки, ссылки, сохранение ========================================================================*/







































// использование Math.round() даст неравномерное распределение!
function b_random_int(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



































/*Запрос проверка пароля*/
b_m('pass');
function  pass_test(){
if(m['tm']<1){
	m['pass']=document.getElementById('pass_in').value;
	var w = new XMLHttpRequest();
	w.open('POST', './test.php', false);
	w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	 w.send('s=' + m['pass']); 
	 str=w.responseText;
	otchet(str);
	if(str[1]=='V'){
		m['pass_v']=1;
		b_m();
		/*Обновить рабочий стол*/
		document.getElementById('background').innerHTML=document.domain.toUpperCase();
		b_desk_f5();
	}else{
		b_m('pass');
		m['tm']=10;
	}
	}
}



















/*Обработка строк ========================================================================================================================*/

/*Только первый символ
'12345' => '1' */
function s1(t){
  return t[0];
}

/*Имя.формат
'../tre/er.txt' => 'er.txt'*/
function s2(t){
  m[1] = [];
  m[1] = t.split('/'); 
  return m[1][m[1].length-1];
}

/*формат
'../tre/er.txt' => 'txt' */
function s3(t){
  m[1] = [];
  m[1] = t.split('.'); 
  return m[1][m[1].length-1];
}
/*Обрезает начало   
'12345' => '2345' */
function s4(t){
  return t.substr(1, t.length);
}

/*Путь до папки
'../tre/er.txt' => '../tre/'*/
function s5(t){
  m[1] = [];
  m[1] = t.split('/'); 
  var str='';
  for(i=0;i<m[1].length-1;i++){
    str+=m[1][i] + '/';
  }
  return str;
}

/*Со строки только цифры
'..1/tr5e/e7r.txt' => '157'*/
function s6(t){
  return parseInt(t.replace(/\D+/g,""));
}

/*Тащим без формата
'er.txt' => 'er'*/
function s8(t){
  m[1] = [];
  m[1] = t.split('.'); 
  return m[1][0];
}

/* /Обработка строк ========================================================================================================================*/



























































/*Всё с куки =====================================================================================================================*/
if (!navigator.cookieEnabled) {
  alert( 'Включите cookie для комфортной работы с этим сайтом' );
}
function getCookie(url) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + url.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(url, i){
  i=i.replace ("\n\n", ' ');
  i=i.replace ("\n", ' ');
  var d = new Date(2100, 11, 17, 17, 36, 45, 567);
  document.cookie = url + "=" + i + "; path=/; expires=" + d.toUTCString();
}
function delCookie(url){
  var d = new Date(0);
  document.cookie = url + "=; path=/; expires=" + d.toUTCString();
}
/* /Всё с куки =====================================================================================================================*/
























































/*Старт основы============================================================================================*/


/*Установка верхнего текста и отчет о времени открытия*/
document.getElementById('background').innerHTML=document.domain.toUpperCase() + ' ' + m['v'];
document.getElementById('background').href=document.origin;
document.title=document.domain.toUpperCase();
otchet('[i] открыт ' + document.lastModified);




/*В пуск главной ставим настройки*/
b_pusk_settings();






/*При выходе запрос уведомления*/
window.onbeforeunload = function(e) {
    var msg = 'HAMSTER7';
    if(typeof e == "undefined"){e = window.event;}
    if(e){e.returnValue = msg;}
    return msg;
}






/*Создаем рабочий стол
wind[0]={};
wind[0]['name']='desctop'
wind[0]['status'] ='del';
wind[0]['mod'] = 'desctop';


*/







//фон
m['bg'] = new Image();
m['bg'].src = './i/bg.jpg';
m['bg'].onload = function(){ document.getElementsByTagName('body')[0].style.cssText='background:url(./i/bg.jpg) 0px 0px; #333';  }
m['bg'].onerror = function(){}








