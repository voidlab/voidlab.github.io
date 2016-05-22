$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 86) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});