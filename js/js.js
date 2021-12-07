$(function () {

    'use strict';

    // ---- Split text plagin ---- //
    Splitting();


    // ---- AOS plagin ---- //
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    //add all link => <a target='_blank']></a> attr => rel="noopener", draggable="false"
    $("a[target='_blank']").attr({ "rel": "noopener", "draggable": "false" });


    // ---- anim load header ----//
    let tNav = $('.nav');
    // let tHeaderTitle = $('.header__title');
    let tkasimov = $('.kasimov');
    let tFon = $('.fon > img');
    let tHeaderBlogLink = $('.header__blog-link');
    let tHeaderSocial = $('.header__social');
    let tHeaderScroll = $('.header__scroll');
    let tHeaderQr = $('.header__qr');

    [tFon, tHeaderBlogLink, tHeaderSocial, tHeaderScroll, tHeaderQr, tNav].map(function (item) {
        item.css("opacity", "0");
    });

    function pageLoad() {
        TweenMax.fromTo(tNav, 2, {
            y: 40,
            opacity: 0
        }, {
            y: "0px",
            opacity: 1,
            ease: Expo.easeOut,
            delay: 3
        });
        TweenMax.fromTo(tkasimov, 3, {
            x: -40
        }, {
            x: "0px",
            ease: Power2.easeOut,
            delay: 3
        });
        TweenMax.fromTo(tFon, 4, {
            x: 50,
            opacity: 0
        }, {
            x: "0px",
            opacity: 1,
            ease: Power2.easeOut,
            delay: .3
        });
        TweenMax.fromTo(tHeaderBlogLink, 3, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Expo.easeOut,
            delay: 1
        });
        TweenMax.fromTo(tHeaderSocial, 2, {
            x: -40,
            opacity: 0
        }, {
            x: "0px",
            opacity: 1,
            ease: Expo.easeOut,
            delay: 3
        });
        TweenMax.fromTo(tHeaderScroll, 4, {
            y: -40,
            autoAlpha: 0
        }, {
            y: "0px",
            autoAlpha: 1,
            ease: Expo.easeOut,
            delay: 4.5
        });
        TweenMax.fromTo($(".header_blink"), 3, {
            y: '100%'
        }, {
            y: "0%",
            ease: Expo.easeOut,
            delay: 1
        });
        TweenMax.fromTo(tHeaderQr, 2, {
            x: 40,
            opacity: 0
        }, {
            x: "0px",
            opacity: 1,
            ease: Expo.easeOut,
            delay: 3
        });
    }


    // ---- preloader ---- //
    $(document).ready(function () {
        setTimeout(function () {
            $('.preloader').fadeOut(400);

            setTimeout(function () {
                pageLoad();
            }, 200);

        }, 800);
    });


    // ---- anim blink text ---- //
    // ---- 1 ---- //
    let letter_one = $(".letter_one").text().split('');
    $(".letter_one").text('');
    $.each(letter_one, function () {
        $(".letter_one").append('<span class="header_blink">' + this + '</span>');
    });

    // ---- 2 ---- //
    let letter_two = $(".letter_two").text().split('');
    $(".letter_two").text('');
    $.each(letter_two, function () {
        $(".letter_two").append('<span class="header_blink">' + this + '</span>');
    });
    // ---- 3 ---- //
    let letter_three = $(".letter_three").text().split('');
    $(".letter_three").text('');
    $.each(letter_three, function () {
        $(".letter_three").append('<span class="header_blink">' + this + '</span>');
    });


    // ---- navigation menu ---- //
    const menu = document.querySelector('.nav__popup');
    const navBtn = document.querySelector('.nav__menu');
    const clsBtn = document.querySelector('.nav__menu-close');
    const menuItem = document.querySelectorAll(".nav__popup-item");
    const innerLinks = menu.querySelectorAll('.nav__popup-link');

    navMenu();

    TweenLite.set('.nav__popup-item', { y: 40, opacity: 0 });

    function navMenu() {
        for (var i = innerLinks.length - 1; i >= 0; i--) {
            var innerLink = innerLinks[i];
            innerLink.addEventListener('click', function (e) {
                closeMenu();
            });
        };

        navBtn.addEventListener('click', function (e) {
            openMenu();
        });
        clsBtn.addEventListener('click', function (e) {
            closeMenu();
        });
    }

    function openMenu() {
        // $("body").on('keydown wheel', function (e) {
        //     if (e.keyCode == 33 || e.keyCode == 34 || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 38 || e.keyCode == 40 || e.type == 'onwheel') {
        //         return false;
        //     }
        // });
        $("html,body").addClass('active');
        $('.nav__menu, .nav__menu-close').addClass('active');

        TweenMax.to(
            menu, .5,
            { autoAlpha: 1, ease: Power2.easeIn }
        );
        TweenMax.staggerFromTo(menuItem, 2, {
            y: 40,
            opacity: 0
        }, {
            y: "0px",
            opacity: 1,
            ease: Expo.easeOut,
            delay: .5
        }, .1);
    }

    function closeMenu() {
        // $("body").unbind('keydown onwheel');
        $("html,body").removeClass('active');
        setTimeout(function () {
            $('.nav__menu').removeClass('active');
        }, 600);
        $('.nav__menu-close').removeClass('active');

        TweenMax.to(
            menu, .5,
            { autoAlpha: 0, ease: Power2.easeIn }
        );
        TweenMax.staggerTo(menuItem, 1, {
            y: 40,
            opacity: 0,
            ease: Power2.easeIn
        }, -.1)
    }


    // ---- script scroll menu ---- //
    $("#menu").on("click", ".prevent_default", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


    // ---- scroll dovn on click button_go ---- //
    $('.header__scroll').click(function (e) {
        e.preventDefault();
        let scroll = $('.work').offset().top;
        $('html, body').animate({ scrollTop: scroll + 80 }, 350);
    });


    // ---- QR-code ---- //
    $('.header__qr').click(function () {
        $('html,body,.qr__popup').addClass('active');
    });
    $('.qr__popup, .qr__close').click(function () {
        $('html,body,.qr__popup').removeClass('active');
    });


    // ---- button up ---- //
    $('.up').click(function () {
        var up = $('.header').offset().top;
        $('html, body').animate({ scrollTop: up }, 350);
    });

    $(window).scroll(function () {
        let scrollDock = $(document).scrollTop();
        let scrollWork = $('.work').offset().top;

        if (scrollDock + 80 >= scrollWork) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });


    // ---- popup-services ---- //
    $('.services__item').click(function () {
        $("body").css('overflow', 'hidden');
        $('.serv__popup').addClass('active');
        let dataName = $(this).attr('data-service');
        $('.serv__text').text(dataName);
        $('.serv__select').attr("value", dataName);
        $('.serv_line').addClass('active');
    });
    $('.serv__close').click(function () {
        $("body").css('overflow', 'visible');
        $('.serv__popup').removeClass('active');
        $('.serv__text').text('');
        $('.serv__select').attr("value", "");
        $('.serv_line').removeClass('active');
    });


    // ---- form line animate ---- //
    $('.form__input')
        .focus(function () {
            $(this).prev('.input_line').addClass('active');
        })
        .focusout(function () {
            if ($(this).val() < 1) {
                $(this).prev('.input_line').removeClass('active');
            }
        });


    // ---- settings ackordion ---- //
    $('.steps__item').on('click', function () {
        let timeAnim = 250;
        $(this).find('.steps__head').toggleClass('active').next().slideToggle(timeAnim);
        $(this).css({ 'pointer-events': 'none' });
        setTimeout(function () {
            $(this).css({ 'pointer-events': 'auto' });
        }.bind(this), timeAnim);
    });


    // ---- settings price hover ---- //
    $(window).on('load resize', function () {
        let offset = $('.services__wrapp').offset().left;
        $('.services__bg').css({ 'left': - offset });
    });


    // ---- script popup-work ---- //
    function popapWorkActive() {
        $('html, body, .popup-work').addClass('active');
    }
    function popapWorkOpen1(callback) {
        //		$('.popup-work').addClass("active");

        setTimeout(function () {
            $('.popup-work__loading').addClass("active").fadeOut(1000);
            callback();
        }, 300);

    }
    function popapWorkOpen2() {
        setTimeout(function () {
            $('.popup-work__item').addClass("active");
        }, 100);
    }

    $('.work__link-elem').click(function (e) {
        e.preventDefault();
        popapWorkActive();

        let dataTitle = $(this).attr("data-title");
        let dataImg = $(this).attr("data-img");
        $('.popup-work__title h2').text(dataTitle);
        let workInfo = $(this).next(".popup-work__desc").html();
        $('.popup-work .popup-work__desc').append(workInfo);
        $('.popup-work__img img').attr({
            "src": "img/work/full/" + dataImg + "",
            "alt": dataImg
        }).on('load', function () {
            popapWorkOpen1(popapWorkOpen2);
            //			$('.popup-work__loading').addClass("active").fadeOut();
            //			popapWorkOpen2();
        });
    });

    $('.popup-work__close').click(function () {
        $('.popup-work__img img').attr({
            "src": "img/work/full/",
            "alt": ""
        });
        $('html, body, .popup-work, .popup-work__item').removeClass("active");
        $('.popup-work .popup-work__desc').empty();
        $('.popup-work__loading').removeClass("active").fadeIn();
    });

    $('.popup-work__mobile-info').click(function () {
        $('.popup-work__item:nth-child(2)').toggleClass("active_info");
    });

});


// ---- form ---- //
$(document).ready(function () {
    $("#form__contact").submit(function () {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input,textarea").val("");
            $(".form__popup").addClass("active");
            $("#form__contact .input_line").removeClass("active");
            $("#form__contact").trigger("reset");
        });
        return false;
    });

    $('.form__close').click(function () {
        $(".form__popup").removeClass("active");
    });
});

$(document).ready(function () {
    $("#form__serv").submit(function () {
        $.ajax({
            type: "POST",
            url: "serv.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input,textarea").val("");
            $(".form__popup").addClass("active");
            $("#form__serv .input_line").removeClass("active");
            $(".serv__popup").removeClass("active");
            $("#form__serv").trigger("reset");
        });
        return false;
    });

    $('.form__close').click(function () {
        $(".form__popup").removeClass("active");
    });
});
