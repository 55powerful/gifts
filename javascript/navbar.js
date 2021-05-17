// const navigation = document.querySelector("nav");

// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll > 0) {
//             $(".complete-navigation").css({
//                 transition: 'background-color 3s ease-in-out',
//                 "background-color": "blue",
//             });

//         } else {
//             $(".complete-navigation").css("background", "");
//         }
//     })
// })

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".complete-navigation").css({
                transition: 'background-color 0.5s ease-in-out',
                "background-color": "black",
            });

        } else {
            $(".complete-navigation").css("background", "");
        }
    })
})