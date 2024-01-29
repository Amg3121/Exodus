window.addEventListener("scroll", function(){
    var previous = document.querySelector(".previous");
    var next = document.querySelector(".next");
    previous.classList.toggle("btn-back-desert", window.scrollY > 0);
    next.classList.toggle("btn-back-desert", window.scrollY > 0);
});



$('.vendidos').owlCarousel({
    loop:true,
    margin:26,
    autoplay: true,
    nav:false,
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
            items:3
        }
    }
});

$('.favoritos').owlCarousel({
    loop:true,
    margin:26,
    nav:false,
    autoplay: true,
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
            items:3
        }
    }
});
$('.programadas').owlCarousel({
    loop:true,
    margin:26,
    nav:false,
    autoplay: true,
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
            items:3
        }
    }
});


$('.temporada').owlCarousel({
    loop:true,
    margin:26,
    nav:true,
    autoplay: true,
    dots:false,
    navText: ["<img src='img/arrow-izq.png' alt=''>", "<img src='img/arrow-der.png' alt=''>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.slide').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<img src='img/arrow-izq.png' alt=''>", "<img src='img/arrow-der.png' alt=''>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.somos').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<img src='img/arrow-izq.png' alt=''>", "<img src='img/arrow-der.png' alt=''>"],
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