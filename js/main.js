$(function () {



    $('.header__btn-menu').on('click',function(){
        $('.menu-box').addClass('active');
    })
    $('.menu-box-btn-close').on('click',function(){
        $('.menu-box').removeClass('active');
    })

    if ($(window).width() < 750) {
        $('.project-cost-find-btn-button').appendTo($('.project-cost-bonus'));
    }

    if ($(window).width() < 1270) {
        $('.our-projects-apartment-info-pos-abs').appendTo($('.our-projects-apartment'));
    }

    if ($(window).width() < 1400) {
        $('.stages-application__title-span3').appendTo($('.stages-application__title-span2-inner'));
    }

    $('.header__phone').on('click',function(e){
        e.preventDefault();
        $('.main-page__popup').fadeIn(600);
        $('html').addClass('no-scroll')
    })

    $('.main-page__popup-close__link').on('click',function(){
        $('.main-page__popup').fadeOut(600);
        $('html').removeClass('no-scroll')
    })

    $('.quiz__question1__body__item1').on('click',function(){
        $('.quiz__question1__body__item1').addClass('active');
        $('.quiz__question1__body__item2').removeClass('active');
        $('.quiz__question1__body__item3').removeClass('active');
    })

    $('.quiz__question1__body__item2').on('click',function(){
        $('.quiz__question1__body__item2').addClass('active');
        $('.quiz__question1__body__item1').removeClass('active');
        $('.quiz__question1__body__item3').removeClass('active');
    })

    $('.quiz__question1__body__item3').on('click',function(){
        $('.quiz__question1__body__item3').addClass('active');
        $('.quiz__question1__body__item1').removeClass('active');
        $('.quiz__question1__body__item2').removeClass('active');
    })
    

    if ($(window).width() < 736) {
        $('.quiz__finishing__body__btn').appendTo($('.quiz__finishing__button'));
    }

    if ($(window).width() < 736) {
        $('.quiz__finishing__button__question').appendTo($('.quiz__finishing__body__wpapper'));
    }
      
//?????????????? 1 ????????????
    $('.project-cost-find-btn').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box1').fadeIn(600);
    })
//1 ????????????

//??????????????
    $('.quiz__question1__header__close').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box1').fadeOut(600);
    })

//??????????

    $('.quiz__question1__button-next').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box1').fadeOut(600);
        $('.quiz__bg-box2').fadeIn(600);
    })
//2 ????????????

//??????????????
    $('.quiz__question1__header__close').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box2').fadeOut(600);

    })
//?????????? ?? 1 ??????????????
    $('.quiz__question2__button-back').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box2').fadeOut(600);
        $('.quiz__bg-box1').fadeIn(600);

    })
//?????????? ?? 3 ??????????????
     $('.quiz__question2__button-next').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box2').fadeOut(600);
        $('.quiz__bg-box3').fadeIn(600);

    })
    //3 ????????????

//??????????????
    $('.quiz__question1__header__close').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box3').fadeOut(600);

    })

//?????????? ?? 2 ??????????????
    $('.quiz__question3__button-back').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box3').fadeOut(600);    
        $('.quiz__bg-box1').fadeOut(6);
        $('.quiz__bg-box2').fadeIn(6);


    })
//?????????? ?? ????????????
    $('.quiz__question3__button-next').on('click',function(e){
         e.preventDefault();
        $('.quiz__bg-box3').fadeOut(600);
        $('.quiz__bg-box4').fadeIn(600);

    })
//??????????
//??????????????
     $('.quiz__question1__header__close').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box4').fadeOut(600);

    })
//?????????? ?? 1 ?????????????? 
    $('.quiz__finishing__button__beginning').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box4').fadeOut(600);
        $('.quiz__bg-box1').fadeIn(600);

    })
//?????????????????????? ????????????
    $('.quiz__finishing__button__question').on('click',function(e){
        e.preventDefault();
        $('.quiz__bg-box4').fadeOut(600);
        $('.quiz__bg-box3').fadeIn(600);

    })


    $('.our-projects-apartments-slider').slick({
        infinite: true, //,?????????????????????? ?????????? ????????????????????
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/page4/slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/page4/slider-rigth.svg" alt="arrow right"></button>',
        varibleWidth: true,
        responsive: [
            {
                breakpoint: 1270,
                settings: "unslick"
            }
        ]
    });

    $('.reviews-slider').slick({
        infinite: true, //,?????????????????????? ?????????? ????????????????????
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        // arrows: true,
        prevArrow: '<button type="button" class="reviews-arrowleft"><img src="images/page4/slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="reviews-arrowright"><img src="images/page4/slider-rigth.svg" alt="arrow right"></button>',
        asNavFor: '.reviews-dots__items'           
    });

    $('.reviews-dots__items').slick({
        slidesToShow: 6, // ?????????????????? ?????? ?????????? ???????????????????? 3 ?????????????????????????? ??????????????????????
        asNavFor: '.reviews-slider', // ?????????????????? ?????? ?????? ?????????????????? ?????? ?????????? ????????
        focusOnSelect: true // ?????????????????? ?????? ???? ???????????????????? ???? ??????????
    });

    
    if ($(window).width() < 1200) {
        $('.design-3d__descr__text').appendTo($('.design-3d__title'));
    }

    if ($(window).width() < 780) {
        $('.design-3d__descr__text').appendTo($('.design-3d__image'));
    }


    $('.repairs__title__minus__img').on('click',function(){
        $('.repairs__title__minus').addClass('active');
    })

    $('.repairs__title__minus__img').on('click',function(){
        $('.repairs').addClass('active');
    })

    $('.repairs__title__plus__img').on('click',function(){
        $('.repairs__title__minus').removeClass('active');
    })

    $('.repairs__title__plus__img').on('click',function(){
        $('.repairs').removeClass('active');
    })
    
    $('.repairs__content__item').on('click',function(){
        $('.pepairs__popup').addClass('active');
    })

    $('.pepairs__popup__close__img').on('click',function(){
        $('.pepairs__popup').removeClass('active');
    })

    
})