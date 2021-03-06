$(document).ready(function(){
    $(".owl-one").owlCarousel({
        loop:false,
        autoplay:false,
        nav:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                autoplay:true,
                loop:true,
            },
            600:{
                items:2,
                autoplay:true,
                loop:true,
            },
            768:{
                items:4,
                autoplay:true,
                loop:true,
            },
            1200:{
                items:6
            }
        }
    });


    $(".owl-two").owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(".owl-three").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".owl-four").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:30,
        center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:0
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  });