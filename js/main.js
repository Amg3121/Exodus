//gsap.to('overlay h1');
gsap.to(".overlay h1", {duration: 1.5, y: -60, opacity: 0, ease: "Expo.inOut"});
gsap.to(".overlay",    {duration: 0.5, delay: 1, top: "-110%", ease: "Expo.inOut"});
/* owl.carousel.js*/

$('.agencies-carousel').owlCarousel({
    loop:true,
    margin:215,
    autoplay:true,
    nav:true,
    dots:false,
    navText: ["<i class='fas fa-chevron-circle-left'></i>", "<i class='fas fa-chevron-circle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1,
            margin:20,
        },
        400:{
            items:2,
            margin:20,
        },
        500:{
            items:2,
            margin:20,
        },
        600:{
            items:2,
            margin:40,
        },
        700:{
            items:2,
            margin:50,
        },
        800:{
            items:2,
            margin:50,
        },
        900:{
            items:2,
            margin:100,
        },
        1000:{
            items:3
        }
    }
})