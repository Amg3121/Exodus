window.addEventListener("scroll", function(){
    
    var back = document.querySelector(".navbar");
    var somos = document.querySelector(".somos");
    var destinos = document.querySelector(".destinos");
    var contacto = document.querySelector(".contacto");
    var promociones = document.querySelector(".promociones");
    var search = document.querySelector(".search");
    var icon = document.querySelector(".navbar-toggler");
    
    somos.classList.toggle("nav_link_black", window.scrollY > 0);
    destinos.classList.toggle("nav_link_black", window.scrollY > 0);
    contacto.classList.toggle("nav_link_black", window.scrollY > 0);
    promociones.classList.toggle("nav_link_black", window.scrollY > 0);
    back.classList.toggle("back-nav", window.scrollY > 0);
    search.classList.toggle("back-search", window.scrollY > 0);
    icon.classList.toggle("navbar-toggler-menu", window.scrollY > 0);
    
});
 $('.top-ten').owlCarousel({
    loop:true,
    margin:28,
    autoplay: true,
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
            items:3
        },
        1000:{
            items:4
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

$('.slick1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 2,
  arrows: false,
  infinite: true,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
