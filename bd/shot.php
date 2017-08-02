<?

$z = stream_context_create(
		array('http' =>
			array(
				'method'  => 'POST',
				'header'  => 'Content-type: application/x-www-form-urlencoded',
				'content' => http_build_query(
					array(
						'h7' => '123',
						't' => 'abc',
						'var2' => 'doh'
					)
				)
			)
		)
	);


//$result = file_get_contents('http://gstsamara.ru/h7/bd/index.php', false, $z);

$result = file_get_contents('http://gstsamara.ra/h7/bd/index.php', false, $z);

?>