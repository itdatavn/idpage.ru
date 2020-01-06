//Menu Responsive
$(document).ready(function() {
	var width = $(window).width();
	if(width < 1280){
    	$('#mobile-slidebar').mmenu();
    }
});

//Register Datepicker
$( function() {
	$( ".datepicker" ).datepicker();
} );

//Security Menu Tab
$('#menu-security a').click(function (e) {
    e.preventDefault();
    var targetId = $(this).attr('data-href');
    $('#menu-security .active').removeClass('show active');
    $(this).parent('li').addClass('show active');
    $('#menu-security-content .tab-pane').removeClass('active');
    $(targetId).addClass('show active');
});