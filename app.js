$(document).on('ready', function () {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible({
        accordion : true
    });
    $(".dropdown-button").dropdown();
})