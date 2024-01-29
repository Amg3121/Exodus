window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("orange_nav", window.scrollY > 0);
   
});

$(document).ready(function() {
    $('.navbar').on('shown.bs.collapse', function () {
        $('.nav-wrapper.sticky-top').addClass('menu-opened');
    });
    $('.navbar').on('hidden.bs.collapse', function () {
        $('.nav-wrapper.sticky-top').removeClass('menu-opened');
    });
});

$('.ofertas').owlCarousel({
    loop:true,
    margin:29,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


$('.temporada').owlCarousel({
    loop:true,
    margin:14,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.favoritos').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.bloqueos').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.slide').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});