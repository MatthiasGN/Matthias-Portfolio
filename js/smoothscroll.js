// credit: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
   $('html, body').stop().animate({
    'scrollTop': $target.offset().top - 50}, 900, 'swing');
    });
});