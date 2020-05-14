$(function(){
    /* accordion */
    $('.accordion__header').on('click', function(){
        $(this).toggleClass('active').next().slideToggle();
        $('.accordion__header').not(this).removeClass('active').next().slideUp();
    })

    /* слайдер товаров */
    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        asNavFor: '.choice-color__slider',
    })

    /* слайдер фотографий товара */
    $('.product-slider__item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    /* выбора цвета */
    $('.choice-color__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        asNavFor: '.product-slider',
        focusOnSelect: true
    });

    /* изменения цены */
    $('.buy__number').on('input', function(){
        let summ = $('.buy__number').val() * $('.buy__price').data('price');
        $('.buy__price').html('$' + summ.toFixed(2));
    });

    let summ = $('.buy__number').val() * $('.buy__price').data('price');
    $('.buy__price').html('$' + summ.toFixed(2));
    
    /* паралакс эффект */
    if ($(window).width() > 960) {
        $('.page').on('mousemove', (e) => {
            const x = e.pageX / $(window).width();
            const y = e.pageY / $(window).height();
    
            $('.product__decoration--1').css(
                'transform', 
                'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)'
            );
    
            $('.product__decoration--2').css(
                'transform', 
                'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'
            );
    
            $('.product__decoration--3').css(
                'transform', 
                'translate(-' + x * 45 + 'px, -' + y * 45 + 'px)'
            );
    
            $('.product__decoration--4').css(
                'transform', 
                'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)'
            );
    
            $('.intro__img-dec').css(
                'transform', 
                'translate(-' + x * 55 + 'px, -' + y * 55 + 'px)'
            );
        });
    };
    
    /* плавный скрол навигации */
    $('[data-scroll').on('click', function(e) {
        e.preventDefault();
        let blockId = $(this).data('scroll'),
            blockOffSet = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffSet
        });
    });

    /* бургер меню */
    $('.nav-burger').on('click', function(){
        $('.nav').toggleClass('menu-active')
    });
});