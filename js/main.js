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
    $('.header__right').toggleClass('active');
});
$('.header__menu a').on('click', function () {
    $('.header__burg').removeClass('active');
    $('.header__right').removeClass('active');
});
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".header__menu"); // тут указываем ID элемента
    var div2 = $(".header__contacts");
    var div3 = $(".header__burg");
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && !div2.is(e.target) // если клик был не по нашему блоку
        && div2.has(e.target).length === 0 && !div3.is(e.target) // если клик был не по нашему блоку
        && div3.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.header__burg').removeClass('active');
        $('.header__right').removeClass('active');
    }
});
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
        // bg4.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        // zekk.css('transform', 'translateX(-' + x * 30 + 'px)');
        // map.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
    });
}

$('.overlay-call__close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.overlay').removeClass('overlay-active');
    $('body').css('overflow', 'visible');
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.overlay-thx').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-thx').removeClass('overlay-active');
    }
});
$('.header__btn').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});


$('.footer__menu>li>a>span').on('click', function(e){
    if ($(this).hasClass('single')) {} else {
        e.preventDefault();
        $(this).closest('li').toggleClass('active');
        if($(this).closest('li').hasClass('active')){
            $(this).closest('li').find('ul').slideDown();
        } else {
            $(this).closest('li').find('ul').slideUp();
        }
    }
});