window.addEventListener("scroll", function(){
    var back = document.querySelector(".navbar");
    back.classList.toggle("back-nav", window.scrollY > 0);

});



$('.deparments').owlCarousel({
    loop:true,
    margin:28,
    nav:false,
    dots:false,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

 $('.top-ten').owlCarousel({
    loop:true,
    margin:3,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.offers').owlCarousel({
    loop:true,
    margin:28,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.locks').owlCarousel({
    loop:true,
    margin:28,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.vendidos').owlCarousel({
    loop:true,
    margin:28,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.slide').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
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

$('.opinion').owlCarousel({
    loop:true,
    margin:0,
    autoplay: false,
    lazyLoad:true,
    nav:true,
    dots:false,
    navText: ["<span aria-label='Previous'>‹</span>", "<span aria-label='Next'>›</span>"],
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

$('.favoritos').owlCarousel({
    loop:true,
    margin:28,
    autoplay: true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


