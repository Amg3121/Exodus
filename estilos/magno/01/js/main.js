//let header = document.querySelector('.header');
//let hamburgerMenu = document.querySelector('.hamburger-menu');

//window.addEventListener('scroll', function(){
   // let windowPosition = window.screenY > 0;
    //header.classList.toggle('active', window.screenY > 0);
//});

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    //var logo = document.querySelector(".header__icon__img");
    //var menu = document.querySelector(".header__icon");
    //var nube = document.querySelector(".header__logotipo");
   //var header__icon__sticky
    header.classList.toggle("purple_nav", window.scrollY > 0);
    //logo.classList.toggle("header__icon__img__sticky", window.scrollY > 0);
    //menu.classList.toggle("header__icon__sticky", window.scrollY > 0);
    //nube.classList.toggle("header__logotipo__sticky", window.scrollY > 0);
});

$(document).ready(function() {
    $('.navbar').on('shown.bs.collapse', function () {
        $('.nav-wrapper.sticky-top').addClass('menu-opened');
    });
    $('.navbar').on('hidden.bs.collapse', function () {
        $('.nav-wrapper.sticky-top').removeClass('menu-opened');
    });
});
/*
hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
});*/

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