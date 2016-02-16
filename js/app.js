$(document).ready(function() {
    $('.nav a').on('click', function() {
        $('html, body').animate( { scrollTop: $($(this).attr('href')).offset().top-100 }, 500 );
        return false;
    });


    // ---- POPUP ----

    var vidUrl = $('#popup .video iframe').attr('src');
    var sdUrl = $('#popup .sound iframe').attr('src');

    // Teaser
    $('.content-video').on('click', function() {
    	$('#popup').addClass('show');
    	$('#popup .video').css('top', '50%');
    	$('#popup .video iframe').attr('src',vidUrl);
    });

    // Soundcloud
    $('.content-sound').on('click', function() {
    	$('#popup').addClass('show');
    	$('#popup .sound').css('top', '50%');
    	$('#popup .sound iframe').attr('src',sdUrl);
    });

    // Close Popup
    $('#popup #close').on('click', function() {
    	$('#popup').removeClass('show');
    	$('#popup .video').css('top', '-50%');
    	$('#popup .sound').css('top', '-50%');
    	$('#popup .video iframe').attr('src','');
    	$('#popup .sound iframe').attr('src','');
    });

});
