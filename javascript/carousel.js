//? This function, isolates local scopes and avoids global varialbes.
(function($) {

    // ! Code will work without .ready(function), but it's just a security.
    $(document).ready(function() {

        // This one is for the ZOOM carousels
        $('.container-slides').flickity({
            draggable: false, // User Dragging carousel (drag by default)
            cellAlign: 'left', // Starting position
            contain: true, // Allow or deny Excess Scrolling
            // freeScroll: true, // Allows or deny unclean stops.
            pageDots: false, // Page dots
            // freeScrollFriction: 0.03, // Amount of friction on scroll
            // wrapAround: false, //infinite carousel
            // autoPlay: 10000, // seconds till move (1000 = 1 second)
            // pauseAutoPlayOnHover: true, // Pausing autoscroll when hover
            prevNextButtons: false // Removes Arrows (there by default)
                // arrowShape: {
                //     x0: 0,
                //     x1: 25,
                //     y1: 10,
                //     x2: 85,
                //     y2: 40,
                //     x3: 50
                // }
        });

        // This one is for normal carousel WITH enough to wrap full Screen 
        $('.container-slides-2').flickity({
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            pageDots: false,
            freeScrollFriction: 0.03, // Lower number = smoother scroll 
            // Note .10 is pretty stiff already. It can go up to at least .8
            // wrapAround: true,
            // autoPlay: 10000,
            pauseAutoPlayOnHover: true,
            arrowShape: {
                x0: 0,
                x1: 25,
                y1: 10,
                x2: 85,
                y2: 40,
                x3: 50
            }
        });

        //This one is for normal carousel WITHOUT enough to wrap around (5 movies)
        $('.container-slides-3').flickity({
            draggable: false,
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            pageDots: false,
            // freeScrollFriction: 0.03,
            // wrapAround: true,
            // autoPlay: 10000,
            // pauseAutoPlayOnHover: true,
            prevNextButtons: false // Removes Arrows (there by default)
                // arrowShape: {
                //     x0: 0,
                //     x1: 25,
                //     y1: 10,
                //     x2: 85,
                //     y2: 40,
                //     x3: 50
                // }
        });

        //This one is for normal carousel WITHOUT enough to wrap around (4 movies)
        $('.container-slides-4').flickity({
            draggable: false,
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            pageDots: false,
            // freeScrollFriction: 0.03,
            // wrapAround: true,
            // autoPlay: 10000,
            // pauseAutoPlayOnHover: true,
            prevNextButtons: false // Removes Arrows (there by default)
                // arrowShape: {
                //     x0: 0,
                //     x1: 25,
                //     y1: 10,
                //     x2: 85,
                //     y2: 40,
                //     x3: 50
                // }
        });

        //This one is for normal carousel WITHOUT enough to wrap around (3 movies)
        $('.container-slides-5').flickity({
            draggable: false,
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            pageDots: false,
            // freeScrollFriction: 0.03,
            // wrapAround: true,
            // autoPlay: 10000,
            // pauseAutoPlayOnHover: true,
            prevNextButtons: false // Removes Arrows (there by default)
                // arrowShape: {
                //     x0: 0,
                //     x1: 25,
                //     y1: 10,
                //     x2: 85,
                //     y2: 40,
                //     x3: 50
                // }
        });

        //This one is for normal carousel WITHOUT enough to wrap around (2 movies)
        $('.container-slides-6').flickity({
            draggable: false,
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            pageDots: false,
            // freeScrollFriction: 0.03,
            // wrapAround: true,
            // autoPlay: 10000,
            // pauseAutoPlayOnHover: true,
            prevNextButtons: false // Removes Arrows (there by default)
                // arrowShape: {
                //     x0: 0,
                //     x1: 25,
                //     y1: 10,
                //     x2: 85,
                //     y2: 40,
                //     x3: 50
                // }
        });

    });
})(jQuery) //? This () is passed into the $ above. THIS is an Immediately invoked function expression.



// Flickity options, defaults settings until enacted with Media Query.
// options_container_3 is specifically for classes with container-slides-3 (5 movies)
var options_container_3 = {
    draggable: false,
    prevNextButtons: false,
    freeScroll: true,
    wrapAround: false,
    groupCells: false,
    autoPlay: false,
    fullscreen: false,
    fade: false,
    adaptiveHeight: false,
    freeScroll: false,
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    arrowShape: {
        x0: 0,
        x1: 25,
        y1: 10,
        x2: 85,
        y2: 40,
        x3: 50
    }
};


if (matchMedia('screen and (max-width: 1100px)').matches) {
    options_container_3.draggable = true;
    options_container_3.prevNextButtons = true;
}
$('.container-slides-3').flickity(options_container_3);
// END of Flickity Options Container 3 section

// Flickity options, defaults settings until enacted with Media Query.
// options_container_3 is specifically for classes with container-slides-4 (4 movies)
var options_container_4 = {
    draggable: false,
    prevNextButtons: false,
    freeScroll: true,
    wrapAround: false,
    groupCells: false,
    autoPlay: false,
    fullscreen: false,
    fade: false,
    adaptiveHeight: false,
    freeScroll: false,
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    arrowShape: {
        x0: 0,
        x1: 25,
        y1: 10,
        x2: 85,
        y2: 40,
        x3: 50
    }
};


if (matchMedia('screen and (max-width: 1100px)').matches) {
    options_container_4.draggable = true;
    options_container_4.prevNextButtons = true;
}
$('.container-slides-4').flickity(options_container_4);
// END of Flickity Options Container 4 section


// Flickity options, defaults settings until enacted with Media Query.
// options_container_3 is specifically for classes with container-slides-5 (3 movies)
var options_container_5 = {
    draggable: false,
    prevNextButtons: false,
    freeScroll: true,
    wrapAround: false,
    groupCells: false,
    autoPlay: false,
    fullscreen: false,
    fade: false,
    adaptiveHeight: false,
    freeScroll: false,
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    arrowShape: {
        x0: 0,
        x1: 25,
        y1: 10,
        x2: 85,
        y2: 40,
        x3: 50
    }
};


if (matchMedia('screen and (max-width: 700px)').matches) {
    options_container_5.draggable = true;
    options_container_5.prevNextButtons = true;
}
$('.container-slides-5').flickity(options_container_5);
// END of Flickity Options Container 5 section