(function ($) {
    $(document).on('ready', function () {
        "use strict";
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();
        });
        new WOW().init();
        var win = $(window);
        if ($(win).scrollTop() >= 100) {
            $('.header').removeClass("header-small");
        }
        win.on('scroll', function () {
            if ($(this).scrollTop() >= 100) {
                $('.header').addClass("header-small");
            } else {
                $('.header').removeClass("header-small");
            }
        });
        $('.menu-icon').on('click', function () {
            $('body').toggleClass("open-menu");
            setTimeout(scrollToTop, 0);
        });
        $('.menu-res li.menu-item-has-children').on('click', function (event) {
            event.stopPropagation();
            var submenu = $(this).find(" > ul");
            if ($(submenu).is(":visible")) {
                $(submenu).slideUp();
                $(this).removeClass("open-submenu-active");
            } else {
                $(submenu).slideDown();
                $(this).addClass("open-submenu-active");
            }
        });

        $('.menu-res li.menu-item-has-children > a').on('click', function () {
            //  return false;
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true,
            autoplaySpeed: 8000,

            pauseOnHover: false,
            speed: 2000,


        });
        $('.slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 8000,
            vertical: true,

            pauseOnHover: false,
            speed: 2000,
            focusOnSelect: true,

        });

        var names = [];
        $(".gallery-top .swiper-slide").each(function (i) {
            names.push($(this).data("name"));

        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            effect: 'fade',
            pagination: {

                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
                renderBullet: function (index, className) {
                    return '<p class="' + className + '" >' + names[index] + '</p>';
                },
            },



        });

        var post_slider = new Swiper('.swiper-post', {
            slidesPerView: 'auto',
            spaceBetween: 50,
            loop: true,
            navigation: {
                nextEl: '.post-next',
                prevEl: '.post-prev',
            },
            breakpoints: {
                1400: {
                    spaceBetween: 30,
                },
                991: {
                    spaceBetween: 15,
                }
            }

        });







        var fancybox = $('.fancybox');
        if ($(fancybox).length) {
            $(fancybox).fancybox({
                helpers: {
                    title: {
                        type: 'outside'
                    },
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                },
                'nextEffect': 'none',
                'prevEffect': 'none'
            });
        }
    });


})(jQuery);
