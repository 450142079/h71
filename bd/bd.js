alert(5);
m={};
m['pass']= prompt('Пароль от БД', '1');

function search_go(){

	var w = new XMLHttpRequest();
	w.open('POST', './search.php', true);
	w.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	w.send('s=' + m['pass'] + '&search=' + document.getElementById('search_txt').value );
    w.onreadystatechange = function(){
        if(w.readyState != 4) return;
        if(w.status != 200){
           alert(w.status + ': ' + w.statusText);
        } else {
			 setTimeout(function() { m['data']=w.responseText; see_txt(m['data']); }, 0);
			
		}
	}
	
}



function see_txt(txt){
    document.getElementById('search_see').innerHTML=txt;
}



