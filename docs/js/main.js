$(document).ready(function(){
    //========= Показываем и скрываем подменю ======//
    $('.hero__navbar__nav li').mouseenter(function(){
        var thisvar = $(this);
        thisvar.find('.hero__navbar__nav__submenu').show();
        setTimeout(function(){
            thisvar.find('.hero__navbar__nav__submenu').addClass('active');
        }, 10);
        
    });
    $('.hero__navbar__nav li').mouseleave(function(){
        var thisvar = $(this);
        thisvar.find('.hero__navbar__nav__submenu').removeClass('active');
        setTimeout(function(){
            thisvar.find('.hero__navbar__nav__submenu').hide();
        }, 310);
    });
    //========= Показываем и скрываем подменю ======//

    //========= Показываем и скрываем панель ======//

    // $('[data-panel="1"]').show();
    // setTimeout(function(){
    //     $('[data-panel="1"]').addClass('active');
    // }, 10);

    $('[data-panel-show]').click(function(){   
        var id = $(this).attr('data-panel-show');

        if( $('.services__auto__item__panel').hasClass('active') === true ) {

            $('[data-panel]').removeClass('active');
            setTimeout(function(){
                $('[data-panel]').hide();
            }, 300);

            setTimeout(function() {
                $('[data-panel="'+id+'"]').show();
                setTimeout(function(){
                    $('[data-panel="'+id+'"]').addClass('active');
                }, 10);
            }, 301);

        }else {

            $('[data-panel="'+id+'"]').show();
            setTimeout(function(){
                $('[data-panel="'+id+'"]').addClass('active');
            }, 10);
        }
    });

    $('body').click(function(){
        if ($(event.target).closest("[data-panel]").length) return;
        if ($(event.target).closest("[data-panel-show]").length) return;
        $('[data-panel]').removeClass('active');
        setTimeout(function(){
            $('[data-panel]').hide();
        }, 300);
    });
    //========= END Показываем и скрываем панель ======//

function work__slider__init() {
    $('.works__slider').owlCarousel({
        items: 2,
        center: true,
        margin: 30,
        loop: true,
        nav: true,
        thumb: true,
        dots: true,
        callbacks: true,
        URLhashListener:true,
        startPosition: 'URLHash',
        dotsContainer: ".works__slider__dots",
        navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\" >"],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2
            }
        }
    });

    // thumbnails
    $('.works__slider .owl-item').not('.cloned').each(function(i, el){
        var href = $(el).find('.works__slider__item__img').attr('href');
        $('.works__slider__dots .owl-dot').eq(i).css('background-image', 'url('+href+')');
    });
    // END thumbnails
}

work__slider__init();
    



    // $('.works__link').change(function(){
    //     var id = $('input[name="works__link"]:checked').val();
    //     $('[data-work-type]').hide();
    //     $('[data-work-type="'+id+'"]').show();
    //     work__slider__init();
    // });



    
    // слайдер с анимацией на первом экране
    var count = $('[data-hero-slide]').length;
    var i = 1;
    var animation = gsap.to(".hero__overlay", {duration: 15, scale: 1.5, ease: "linear"});
    setInterval(function(){
        animation.restart();
        var url = $('[data-hero-slide]').eq(i).val();
        $('.hero__overlay').css('background-image', 'url('+url+')');
        console.log(url);

        if( (count - 1) == i ) {
            i = 0;
        }else {
            i += 1;
        }

    }, 6000);
    // END слайдер с анимацией на первом экране


    // Печатающийся текст
    $(".hero__title__typed").typed({
        strings: [
            "Установка сигнализации", 
            "Тонирование авто",
            "Бронирование кузова и фар",
            "Бронирование лобовых стекол",
            "Антихром",
            "Виниловые цветные пленки",
            "Тонирование оптики",
            "Установка парковочных систем",
        ],
        typeSpeed: 30,
        backDelay: 1500,
        loop: true,
        loopCount: 20000,
        contentType: 'html',      
    });
    // END Печатающийся текст


    $('.mobile__nav__submenu').slideUp();
    $('.mobile__nav__link').click(function(){
        $(this).toggleClass('active');
        $(this).find('.mobile__nav__submenu').slideToggle();
    });


    $('[data-hamburger]').click(function(){
        var thisvar = $(this);
        var id = thisvar.attr('data-hamburger');

        if( $('[data-mobile-nav]').hasClass('active') === true ) {
            thisvar.removeClass('active');
            $('[data-mobile-nav="'+id+'"]').removeClass('active');
            setTimeout(function(){
                $('[data-mobile-nav="'+id+'"]').hide();
            },100);
        }else {
            thisvar.addClass('active');
            $('[data-mobile-nav="'+id+'"]').show();
            setTimeout(function(){
                $('[data-mobile-nav="'+id+'"]').addClass('active');
            },100);
        }
        
    });

    $('.global__wrapper').click(function(){
        if ($(event.target).closest("[data-hamburger]").length) return;
        if ($(event.target).closest("[data-mobile-nav]").length) return;
        $('[data-hamburger]').removeClass('active');
        $('[data-mobile-nav]').removeClass('active');
        setTimeout(function(){
            $('[data-mobile-nav]').hide();
        },100);
    });
    

    $('.reviews__slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\" >"],
        dotsContainer: ".reviews__slider__dots",
        responsive: {
            0: {
                nav: false
            },
            1000: {
                nav: true
            }
        }
    });


    $('[data-faq-content]').slideUp();

    $('[data-faq-item]').click(function(){
        if ($(event.target).closest("[data-faq-content]").length) return;
        $(this).find('[data-faq-content]').slideToggle(300);
    });

});



