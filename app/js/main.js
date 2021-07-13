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
        }, 300);
    });
    //========= Показываем и скрываем подменю ======//

    //========= Показываем и скрываем панель ======//

    $('[data-panel="1"]').show();
    setTimeout(function(){
        $('[data-panel="1"]').addClass('active');
    }, 10);

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


    $('.works__slider').owlCarousel({
        items: 2,
        center: true,
        margin: 30,
        loop: true,
        nav: true,
        thumb: true,
        navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\" >"],
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });


    $('.works__link').change(function(){
        var id = $('input[name="works__link"]:checked').val();
        console.log(id);
        $('[data-work-type]').hide();
        $('[data-work-type="'+id+'"]').show();
    });
});



