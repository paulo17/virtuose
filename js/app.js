$(document).ready(function() {
    $('.nav a').on('click', function() {
        $('html, body').animate( { scrollTop: $($(this).attr('href')).offset().top-100 }, 500 );
        return false;
    });
});
