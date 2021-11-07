$(document).ready(function() {
    document.querySelector(".movie-question-button").addEventListener('click', function() {
        Swal.fire({
            title: 'Movie Section Information',
            html: 'This is the Movies & Shows section. Some of the movies & shows will include links (and low quantity alerts) in the top left corners for assistance. The needed seasons for shows will be mentioned on the covers. The preferred formats are listed below from most prefered to least!<br><br>Steelbooks:<br>[Steelbook] 4K Ultra HD + Blu-ray + Digital Code<br>[Steelbook] Blu-ray + DVD + Digital<br>[Steelbook] Blu-Ray + Digital<br><br>Traditional:<br>4K Ultra HD + Blu-ray + Digital Code<br>Blu-ray + DVD + Digital<br>Blu-Ray + Digital<br>Blu-ray + DVD<br>Blu-ray<br>DVD',
            footer: 'Only purchase if items are on sale. Item prices fluctuate constantly! Skip the expensive purchases and come back because they might be on sale then. Or as time goes by, items may become cheaper!',
            backdrop: "rgb(0,0,0,0.9)",
            // background: '#FF8700',
            width: '95%',
            allowOutsideClick: false,
            // confirmButtonColor: '#00B9FF',
        });
    });
    document.querySelector(".anime-question-button").addEventListener('click', function() {
        Swal.fire({
            title: 'Anime Section Information',
            html: 'This is the anime category. Triple check they say "English Dubbed"! Some of the movies & shows will include links (and low quantity alerts) in the top left corners for assistance. You can also look around for price differences (Sentai Filmworks, Rightstufanime, Amazon)! Details for checking for "real deals" at "Sentai Filmworks" and "Rightstufanime" are explained below.<br><br>Sentai Filmworks:<br> 1. Go to the link "https://www.sentaifilmworks.com/collections/all-products"<br>2. Find "A Spirit of the Sun". If this price is not around "$4.99", then most of these animes are not on "real sales".<br><br>RightStufAnime:<br>1. Go to "https://www.rightstufanime.com/category/Blu~ray"<br>2. Search "Squid Girl blu ray". If it is not around "$20.00", then most things are not on "real sales".',
            footer: 'Only purchase if items are on sale. Item prices fluctuate constantly! Skip the expensive purchases and come back because they might be on sale then. Or as time goes by, items may become cheaper!',
            backdrop: "rgb(0,0,0,0.9)",
            // background: '#FF8700',
            width: '95%',
            allowOutsideClick: false,
            // confirmButtonColor: '#00B9FF',
        });
    });
    document.querySelector(".game-question-button").addEventListener('click', function() {
        Swal.fire({
            title: 'Game Section Information',
            footer: 'Only purchase if items are on sale. Item prices fluctuate constantly! Skip the expensive purchases and come back because they might be on sale then. Or as time goes by, items may become cheaper!',
            backdrop: "rgb(0,0,0,0.9)",
            // background: '#FF8700',
            width: '95%',
            allowOutsideClick: false,
            // confirmButtonColor: '#00B9FF',
        });
    });
});