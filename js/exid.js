/*
  [JS Index]
  
  ---
  
  Template Name: Exid - Creative Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. show elements
    2.1. show fadeIn
    2.2. show logo, nav icon
    2.3. show hero bg
  3. navigation
    3.1. navigation active links
    3.2. navigation launcher
    3.3. navigation OPEN/CLOSE
    3.4. navigation hover state
    3.5. navigation animation
    3.6. navigation scroll animation
  4. scroll elements SHOW/HIDE
  5. charts
    5.1. chart about
    5.2. chart services
  6. facts counter
  7. forms
    7.1. contact form
  8. slick slider
    8.1. slick testimonials slideshow
    8.2. slick fullscreen slideshow ZOOM/FADE
  9. YouTube player
  10. owl carousel
    10.1. owl news carousel
  11. magnificPopup
    11.1. magnificPopup single
	11.2. magnificPopup gallery
  12. typed text
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show elements
        // 2.1. show fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1400).css({
                display: "none"
            }).fadeIn(1600);
        }, 0);
        // 2.2. show logo, nav icon
        setTimeout(function() {
            $(".logo, #nav-launch-btn").removeClass("top-position");
        }, 800);
        // 2.3. show hero bg
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. navigation
    // 3.1. navigation active links
    $("a.navigation-state").on("click", function() {
        $("a.navigation-state").removeClass("active");
        $(this).addClass("active");
    });
    // 3.2. navigation launcher
    $("#nav-launch-btn").on("click", function() {
        if ($(".introduction").hasClass("introduction-off")) {
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
            $("nav.navigation-menu").removeClass("show");
        } else {
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
            $("nav.navigation-menu").addClass("show");
        }
    });
    // 3.3. navigation OPEN/CLOSE
    $("nav.navigation-menu a").on("click", function() {
        if ($("nav.navigation-menu").hasClass("show")) {
            $("nav.navigation-menu").removeClass("show");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        } else {
            $("nav.navigation-menu").addClass("show");
        }
    });
    // 3.4. navigation hover state
    hoverMenu();
    imgMenu();
    function hoverMenu() {
        $(".menu li a").on("mouseenter", function() {
            var ref = $(this).data("ref"),
                menuImg = $('.nav-img[data-ref="' + ref + '"]');
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
            $(".nav-img").removeClass("active");
            menuImg.addClass("active");
        });
    }
    function imgMenu() {
        $("[data-bg]").each(function() {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    }
    // 3.5. navigation animation
    $(".line-icon").on("mouseenter", function() {
        $(this).addClass("line-icon-animation");
        setTimeout(function() {
            $(".line-icon-animation").removeClass("line-icon-animation")
        }, 2000);
    })
    // 3.6. navigation scroll animation
    $(".scroll-page").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
	
    $(window).on("scroll", function() {
        // 4. scroll elements SHOW/HIDE
        if ($(this).scrollTop() > 100) {
            $(".go-home").addClass("show");
            $(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
        } else {
            $(".go-home").removeClass("show");
            $(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
        }
    });
	
    // 5. charts
    // 5.1. chart about
    $(".chart-appear-about").appear(function() {
        $(".chart-about").easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent-about").text(Math.round(percent));
            }
        });
    });
    // 5.2. chart services
    $(".chart-appear-services").appear(function() {
        $(".chart-services").easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent-services").text(Math.round(percent));
            }
        });
    });
	
    // 6. facts counter
    $(".facts-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 7. forms
    // 7.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 8. slick slider
    // 8.1. slick testimonials slideshow
    $(".slick-testimonials").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 15000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 8.2. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 9. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 10. owl carousel
    // 10.1. owl news carousel
    $("#news-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	
	// 11. magnificPopup
    // 11.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
		fixedContentPos: false
    });
    // 11.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 12. typed text
    $(".typed-title").typed({
        strings: ["Exid", "Creative", "Folio"],
        typeSpeed: 25,
        backDelay: 3500,
        loop: true
    });
	
	
});