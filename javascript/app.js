$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel-1').owlCarousel({
        autoplayTimeout: 8000,
        items: 1,
        dots: false,
        loop: true,
        // nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    });

    $('#hero-carousel-2').owlCarousel({
        autoplayTimeout: 8000,
        items: 1,
        dots: false,
        loop: true,
        // nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    });

    $('#hero-carousel-3').owlCarousel({
        autoplayTimeout: 6000,
        items: 1,
        dots: false,
        loop: true,
        // nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    });
});