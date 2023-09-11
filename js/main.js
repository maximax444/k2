if ($('#map').length) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.777533, 30.177429],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),


            myPlacemark = new ymaps.Placemark([59.777533, 30.177429], {
                hintContent: 'улица Сименса, 2/4, территория Южная часть производственной зоны Горелово, Виллозское городское поселение, Ломоносовский район, Ленинградская область ',
                balloonContent: 'улица Сименса, 2/4, территория Южная часть производственной зоны Горелово, Виллозское городское поселение, Ломоносовский район, Ленинградская область '
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map.png',
                // Размеры метки.
                iconImageSize: [85, 73],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-28, -73]
            });
        myMap.geoObjects
            .add(myPlacemark);

    });
}

$('.struct__block').each(function () {
    $(this).on('mouseover', function () {
        $('.struct__img').eq($(this).index()).addClass('active');
    });
    $(this).on('mouseout', function () {
        $('.struct__img').eq($(this).index()).removeClass('active');
    });
});
const swiper = new Swiper('.clients .swiper', {

    slidesPerView: 5,
    spaceBetween: 19,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.clients__next',
        prevEl: '.clients__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 19
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 5,
            spaceBetween: 19
        }
    }
});
const swiper2 = new Swiper('.manuf .swiper', {

    slidesPerView: 4,
    spaceBetween: 8,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.manuf__next',
        prevEl: '.manuf__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 8
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
            spaceBetween: 8
        }
    }
});
const swiper3 = new Swiper('.history .swiper', {

    slidesPerView: 0,
    spaceBetween: 8,
    loop: false,
    autoHeight: true,
    scrollbar: {
        el: '.history__nav',
        draggable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            autoHeight: true,
            slidesPerView: 1
        },
        // when window width is >= 480px
        576: {
            autoHeight: false,
            slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
            autoHeight: false,
            slidesPerView: 2
        },
        // when window width is >= 640px
        992: {
            autoHeight: false,
            slidesPerView: 3
        },
        // when window width is >= 640px
        1200: {
            autoHeight: false,
            slidesPerView: 4
        }
    }
});
function noWw(event) {
    if ("1234567890+\(\)\- ".indexOf(event.key) != -1) {

    } else {
        event.preventDefault();
    }

}
$('.serts__cont-block').each(function () {
    if ($(this).find('.swiper')[0]) {
        console.log();
        new Swiper($(this).find('.swiper')[0], {

            slidesPerView: 2,
            spaceBetween: 55,
            loop: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 8
                },
                // when window width is >= 480px
                576: {
                    slidesPerView: 2,
                    spaceBetween: 8
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 8
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 55
                }
            }
        });
        $(this).find('.swiper')[0].swiper.on("slideChangeTransitionStart", function (e) {

            $(e.el).closest('.serts__cont-block').find('.serts__down').attr('href', $(e.el).closest('.serts__cont-block').find('.swiper-slide-active').attr('data-pdf'));



            console.log($(e.el).closest('.serts__cont-block').find('.swiper-slide-active').attr('data-pdf'));
        });
    }
});

$('.serts__cont-block .prev').on('click', function () {
    $(this).closest('.serts__cont-block').find('.swiper')[0].swiper.slidePrev();
});
$('.serts__cont-block .next').on('click', function () {
    $(this).closest('.serts__cont-block').find('.swiper')[0].swiper.slideNext();
});
$('.about__block').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('.about__more span').html('Скрыть');
    } else {

        $(this).find('.about__more span').html('Подробнее');
    }
});

(function ($) {
    $(function () {

        $('.serts__tabs').on('click', '.serts__tab:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.serts').find('.serts__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.menu').stop().slideDown();
    } else {
        $('.menu').stop().slideUp();
    }
});

// $(document).mouseup(function (e) { // событие клика по веб-документу
//     var div = $(".header__menu"); // тут указываем ID элемента
//     var div2 = $(".header__contacts");
//     var div3 = $(".header__burg");
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0 && !div2.is(e.target) // если клик был не по нашему блоку
//         && div2.has(e.target).length === 0 && !div3.is(e.target) // если клик был не по нашему блоку
//         && div3.has(e.target).length === 0) { // и не по его дочерним элементам
//         $('.header__burg').removeClass('active');
//         $('.header__right').removeClass('active');
//     }
// });
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 70;
    if (screen.width >= 768) {
        fixed_offset = 80;
    }
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
if (screen.width >= 1200) {
    let bg = $('.struct__imgs');
    let bg2 = $('.trans__bg');
    let bg3 = $('.history__bg');
    let bg4 = $('.error-bg');
    // let bg3 = $('.programm-top__img img');
    // let bg4 = $('.main__img img');
    // let map = $('.home-map__map');
    // let zekk = $('.zekkert-top__img img');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg2.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 0 + 'px)');
        bg3.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 0 + 'px)');

        bg4.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 0 + 'px)');
        // bg4.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        // zekk.css('transform', 'translateX(-' + x * 30 + 'px)');
        // map.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
    });
}

$('.overlay-call__close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.popup').removeClass('active');
    let mo = $(this).closest('.overlay');
    setTimeout(function () {
        mo.removeClass('overlay-start');
    }, 500);
    setTimeout(function () {
        mo.removeClass('overlay-active');
    }, 800);
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call .popup').removeClass('active');
        setTimeout(function () {
            $('.overlay-call').removeClass('overlay-start');
        }, 500);
        setTimeout(function () {
            $('.overlay-call').removeClass('overlay-active');
        }, 800);
    }
});
$('.overlay-thx').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-thx .popup').removeClass('active');
        setTimeout(function () {
            $('.overlay-thx').removeClass('overlay-start');
        }, 500);
        setTimeout(function () {
            $('.overlay-thx').removeClass('overlay-active');
        }, 800);
    }
});
$('.modal--call').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('.overlay-call').addClass('overlay-start');
    setTimeout(function () {
        $('.overlay-call .popup').addClass('active');
    }, 300);
});


// $('.footer__menu>li>a>span').on('click', function (e) {
//     if ($(this).hasClass('single')) { } else {
//         e.preventDefault();
//         $(this).closest('li').toggleClass('active');
//         if ($(this).closest('li').hasClass('active')) {
//             $(this).closest('li').find('ul').slideDown();
//         } else {
//             $(this).closest('li').find('ul').slideUp();
//         }
//     }
// });

let btnCat = document.querySelector('.nav-prod');

btnCat.addEventListener('mouseenter', function (e) {
    $('.nav .nav-prod__drop').css('height', 'auto');
    $('.nav .nav-prod__drop').stop().slideDown();
    $('.nav').addClass('active');
    $('.nav__shadow').addClass('active');
});

btnCat.addEventListener('mouseleave', function (e) {
    $('.nav .nav-prod__drop').stop().slideUp();
    $('.nav').removeClass('active');
    $('.nav__shadow').removeClass('active');
});

$('.nav__menu>li').on('mouseenter', function () {
    $(this).find('ul').stop().slideDown();
    $('.nav').addClass('active');
    $('.nav__shadow').addClass('active');
});
$('.nav__menu>li').on('mouseleave', function () {
    $(this).find('ul').stop().slideUp();
    $('.nav').removeClass('active');
    $('.nav__shadow').removeClass('active');
});

$('.menu__menu a>span').on('click', function (e) {
    e.preventDefault();
    $(this).closest('a').toggleClass('active');
    if ($(this).closest('a').hasClass('active')) {

        $(this).closest('li').children('ul').stop().slideDown();
    } else {
        $(this).closest('li').children('ul').stop().slideUp();
    }
});

$('.home-catalog__minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});

$('.home-catalog__plus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});

$('.home-catalog__count input').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});


const swiper32 = new Swiper('.home-catalog .home-catalog__slider', {

    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.home-catalog__next',
        prevEl: '.home-catalog__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 2
        }
    }
});
const swiper132 = new Swiper('.catalog .home-catalog__slider', {

    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.home-catalog__next',
        prevEl: '.home-catalog__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 2
        }
    }
});
const swiper33 = new Swiper('.about-clients__slider', {

    slidesPerView: 5,
    spaceBetween: 19,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.about-clients__next',
        prevEl: '.about-clients__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 19
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 19
        }
    }
});
const swiper34 = new Swiper('.phistory__wrap', {

    slidesPerView: 0,
    spaceBetween: 8,
    loop: false,
    autoHeight: true,
    scrollbar: {
        el: '.history__nav',
        draggable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            autoHeight: true,
            slidesPerView: 1
        },
        // when window width is >= 480px
        576: {
            autoHeight: false,
            slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
            autoHeight: false,
            slidesPerView: 2
        },
        // when window width is >= 640px
        992: {
            autoHeight: false,
            slidesPerView: 2
        },
        // when window width is >= 640px
        1200: {
            autoHeight: false,
            slidesPerView: 3
        }
    }
});


$('.news__sort-top').on('click', function () {
    $(this).next('.news__sort-drop').toggleClass('active');
    if ($(this).next('.news__sort-drop').hasClass('active')) {
        $(this).next('.news__sort-drop').stop().slideDown();
    } else {
        $(this).next('.news__sort-drop').stop().slideUp();
    }
});
$(document).click(function (e) {
    if (!$(e.target).closest(".news__sort").length) {
        $('.news__sort-drop').removeClass('active');
        $('.news__sort-drop').stop().slideUp();
    }
});
$('.vac__top').on('click', function () {
    $(this).closest('.vac__block').toggleClass('active');
    if ($(this).closest('.vac__block').hasClass('active')) {
        $(this).next('.vac__drop').stop().slideDown();
    } else {
        $(this).next('.vac__drop').stop().slideUp();
    }
});
$('.opros__top').on('click', function () {
    $(this).closest('.opros__block').toggleClass('active');
    if ($(this).closest('.opros__block').hasClass('active')) {
        $(this).next('.opros__drop').stop().slideDown();
        $(this).find('.opros__right').find('span').html('Свернуть');
    } else {
        $(this).next('.opros__drop').stop().slideUp();
        $(this).find('.opros__right').find('span').html('Смотреть подробнее');
    }
});
$('.faq__top').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).next('.faq__drop').stop().slideDown();
    } else {
        $(this).next('.faq__drop').stop().slideUp();
    }
});
const swiper404 = new Swiper('.create__slider', {

    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.manuf__next',
        prevEl: '.manuf__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }
});

$('.quality__select').on('click', function () {
    $(this).find('.quality__select-top').toggleClass('active');
    if ($(this).find('.quality__select-top').hasClass('active')) {
        $(this).find('.quality__select-drop').stop().slideDown();
    } else {
        $(this).find('.quality__select-drop').stop().slideUp();
    }
});
$('.quality__select-block').on('click', function () {
    $(this).closest('.quality__select').find('.quality__select-top span').html($(this).html());
    $(this).closest('.quality__select').find('input').val($(this).html());
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.quality__select').length) || ($(e.target).hasClass('quality__select')))) {
        $('.quality__select-drop').stop().slideUp();
        $('.quality__select-top').removeClass('active');
    }
});

$('.quiz__select').on('click', function () {
    $(this).find('.quiz__select-top').toggleClass('active');
    if ($(this).find('.quiz__select-top').hasClass('active')) {
        $(this).find('.quiz__select-drop').stop().slideDown();
    } else {
        $(this).find('.quiz__select-drop').stop().slideUp();
    }
});
$('.quiz__select-block').on('click', function () {
    $(this).closest('.quiz__select').find('.quiz__select-top span').html($(this).html());
    $(this).closest('.quiz__select').find('input').val($(this).html());
    $(this).closest('.quiz__select').removeClass('err');
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.quiz__select').length) || ($(e.target).hasClass('quiz__select')))) {
        $('.quiz__select-drop').stop().slideUp();
        $('.quiz__select-top').removeClass('active');
    }
});

function checkQuizFields() {
    var wrap = $('.quiz__block.active');
    var sels = wrap.find('.quiz__select');
    var inps = wrap.find('.quiz__field');
    var checks = wrap.find('.quiz__checks');
    let errors = 0;
    if (sels.length) {
        sels.each(function () {
            if ($(this).find('input').val() == '') {
                $(this).addClass('err');
                errors++;
            }
        });
    }
    if (checks.length) {
        let checksCliked = 0;
        checks.find('label').each(function () {
            if ($(this).find('input:checked').length) {
                checksCliked++;
            }
        });
        console.log(checksCliked);
        if (checksCliked == 0) {
            errors++;
            checks.prev('.quiz__subtitle').addClass('err');
        }
    }
    if (inps.length) {
        inps.each(function () {
            if ($(this).find('input').val() == '' && $(this).find('input').attr('required')) {
                $(this).addClass('err');
                errors++;
            }
        });
    }
    if (errors == 0) {
        return true;
    } else {
        return false;
    }
}
$('.quiz__field input').on('change', function () {
    if ($(this).val() != '') {
        $(this).closest('.quiz__field').removeClass('err');
    } else {

        $(this).closest('.quiz__field').addClass('err');
    }
});
$('.quiz__checks input').on('change', function () {
    $(this).closest('.quiz__checks').prev('.quiz__subtitle').removeClass('err');
});
$('.quiz__next').on('click', function () {
    if (checkQuizFields()) {
        var curr = $('.quiz__block.active');
        curr.next('.quiz__block').addClass('active');
        curr.removeClass('active');
    }
});
$('.quiz__prev').on('click', function () {
    var curr = $('.quiz__block.active');
    curr.prev('.quiz__block').addClass('active');
    curr.removeClass('active');
});
$('.quiz').on('submit', function (e) {
    e.preventDefault();
    if (checkQuizFields()) {
        var curr = $('.quiz__block.active');
        curr.next('.quiz__block').addClass('active');
        curr.removeClass('active');
    }
});

$('.prod-aside li').each(function () {
    $(this).on('mouseover', function () {
        $(this).find('.prod-aside__drop').stop().slideDown();
    });
    $(this).on('mouseout', function () {
        $(this).find('.prod-aside__drop').stop().slideUp();
    });
});


$(window).scroll(function () {
    var target = $(this).scrollTop();
    if (target <= 400) {
        $('.swim').removeClass('active');
    } else {
        $('.swim').addClass('active');
    }
});
$('.swim__search').on('click', function (e) {
    e.preventDefault();
    $('.swim__search-drop').toggleClass('active');
});
$('.swim__search-close').on('click', function (e) {
    e.preventDefault();
    $('.swim__search-drop').removeClass('active');
});

$('.filters__title').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).next('.filters__wrap').stop().slideDown();
        $(this).find('span').html('Скрыть фильтры');
    } else {
        $(this).next('.filters__wrap').stop().slideUp();
        $(this).find('span').html('Показать фильтры');
    }
});

$('.filters__top').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).next('.filters__drop').stop().slideDown();
    } else {
        $(this).next('.filters__drop').stop().slideUp();
    }
});

$('.catalog__filters').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.catalog__filters-wrap').stop().slideDown();
    } else {
        $('.catalog__filters-wrap').stop().slideUp();
    }
});