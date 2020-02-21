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

//Rank Menu Tab
$('#rank-tab a').click(function (e) {
    e.preventDefault();
    var targetId = $(this).attr('data-href');
    $('#rank-tab .active').removeClass('show active');
    $(this).parent('li').addClass('show active');
    $('#tab-rank-content .tab-pane').removeClass('active');
    $(targetId).addClass('show active');
});
//Security Menu Tab
$('#history-tab a').click(function (e) {
    e.preventDefault();
    var targetId = $(this).attr('data-href');
    $('#history-tab .active').removeClass('show active');
    $(this).parent('li').addClass('show active');
    $('#history-tab-content .tab-pane').removeClass('active');
    $(targetId).addClass('show active');
});
//Popup Nap Wcoin Ngan Hang
$('#bank-click').click(function () {       
    $.fancybox.open({
        src  : '#popup-bank',
        type : 'inline',
        opts : {
            afterShow : function( instance, current ) {
                // console.info( 'done!' );
            }
        }
    });
});
//Popup Nap
$('.btn-naper').click(function () {       
    $.fancybox.open({
        src  : '#popup-bank',
        type : 'inline',
        opts : {
            afterShow : function( instance, current ) {
                // console.info( 'done!' );
            }
        }
    });
});
