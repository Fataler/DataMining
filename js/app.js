$(".button-collapse").sideNav();
$('#tech').click(function () {
	$('#tech').prop('checked') ? $('#tech-c').fadeIn() : $('#tech-c').fadeOut();
	
});

$('#oper').click(function () {
	$('#oper').prop('checked') ? $('#oper-c').fadeIn() : $('#oper-c').fadeOut();
});

$('#sps').click(function () {
	$('#sps').prop('checked') ? $('#sps-c').fadeIn() : $('#sps-c').fadeOut();
});
