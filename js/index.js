//change sevices

headers = document.querySelectorAll('.services .service_type .service');
descriptions = document.querySelectorAll('.services .services_detail');
for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("mouseover", function () {
        var activeDescription = document.querySelector(".services .active_detail");
        var activeHeader = document.querySelector(".services .service_type .activeHeader");

        activeDescription.classList.remove("active_detail");
        descriptions[i].classList.add("active_detail");
        activeHeader.classList.remove("activeHeader");
        headers[i].classList.add("activeHeader");
    });
}


//toggle menu

toggle_button = $('.menuIcon');
navbar_collapse = $('.links');
nav = $('nav');


toggle_button.click(function () {
    toggle_button.toggleClass('open');
    navbar_collapse.toggleClass('opened');
    if (toggle_button.hasClass('open')) {
        navbar_collapse.css('transition', 'top 0.5s ease');

    }

});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        nav.addClass('scroll');
    } else {
        nav.removeClass('scroll');


    }
});