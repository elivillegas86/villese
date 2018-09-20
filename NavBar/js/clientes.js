(function($) {

    var isBuilder = $('html').hasClass('is-builder');

    // Functions from plugins for
    // compatible with old projects 
    function setActiveCarouselItem(card){
       var $target = $(card).find('.carousel-item:first');
       $target.addClass('active');
    }
    function initTestimonialsCarousel(card){
        var $target = $(card),
            $carouselID = $target.attr('ID') +"-carousel"; 
        $target.find('.carousel').attr('id',$carouselID);
        $target.find('.carousel-controls a').attr('href','#'+$carouselID);
        $target.find('.carousel-indicators li').attr('data-target','#'+$carouselID);
        setActiveCarouselItem($target);  
    }
    function initClientCarousel(card){
        var $target = $(card),
        countElems = $target.find('.carousel-item').length,
        visibleSlides = $target.find('.carousel-inner').attr('data-visible');
        if (countElems < visibleSlides){
            visibleSlides = countElems;
        }
        $target.find('.carousel-inner').attr('class', 'carousel-inner slides' + visibleSlides);
        $target.find('.clonedCol').remove();

        $target.find('.carousel-item .col-md-12').each(function() {
            if (visibleSlides < 2) {
                $(this).attr('class', 'col-md-12');
            } else if (visibleSlides == '5') {
                $(this).attr('class', 'col-md-12 col-lg-15');
            } else {
                $(this).attr('class', 'col-md-12 col-lg-' + 12 / visibleSlides);
            }
        });

        $target.find('.carousel-item').each(function() {
            var itemToClone = $(this);
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                var index = itemToClone.index();
                itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
            }
        });
    }
    function updateClientCarousel(card){
        var $target = $(card),
            countElems = $target.find('.carousel-item').length,
            visibleSlides = $target.find('.carousel-inner').attr('data-visible');
        if (countElems < visibleSlides){
            visibleSlides = countElems;
        }
        $target.find('.clonedCol').remove();
        $target.find('.carousel-item').each(function() {
            var itemToClone = $(this);
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                var index = itemToClone.index();
                itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
            }
        });
    }
    function clickHandler(e){
        e.stopPropagation();
        e.preventDefault();

        var $target = $(e.target);
        var curItem;
        var curIndex;

        if ($target.closest('.clonedCol').length) {
            curItem = $target.closest('.clonedCol');
            curIndex = curItem.attr('data-cloned-index');
        } else {
            curItem = $target.closest('.carousel-item');
            curIndex = curItem.index();
        }
        var item = $($target.closest('.carousel-inner').find('.carousel-item')[curIndex]).find('img')[0];
                        
        if ($target.parents('.clonedCol').length > 0) {
            item.click();
        }
    }
    $.fn.outerFind = function(selector) {
        return this.find(selector).addBack(selector);
    };
    function initTabs(target) {
        if ($(target).find('.nav-tabs').length !== 0) {
            $(target).outerFind('section[id^="tabs"]').each(function() {
                var componentID = $(this).attr('id');
                var $tabsNavItem = $(this).find('.nav-tabs .nav-item');
                var $tabPane = $(this).find('.tab-pane');

                $tabPane.removeClass('active').eq(0).addClass('active');

                $tabsNavItem.find('a').removeClass('active').removeAttr('aria-expanded')
                    .eq(0).addClass('active');

                $tabPane.each(function() {
                    $(this).attr('id', componentID + '_tab' + $(this).index());
                });

                $tabsNavItem.each(function() {
                    $(this).find('a').attr('href', '#' + componentID + '_tab' + $(this).index());
                });
            });
        }
    }
    function clickPrev(event){
        event.stopPropagation();
        event.preventDefault();
    }
    if(!isBuilder){
        if(typeof window.initClientPlugin ==='undefined'){
            if($(document.body).find('.clients').length!=0){
                window.initClientPlugin = true;
                $(document.body).find('.clients').each(function(index, el) {
                    if(!$(this).attr('data-isinit')){
                        initTestimonialsCarousel($(this));
                        initClientCarousel($(this));
                    }  
                });  
            } 
        }
        if(typeof window.initPopupBtnPlugin === 'undefined'){
            if($(document.body).find('section.popup-btn-cards').length!=0){
                window.initPopupBtnPlugin = true;
                $('section.popup-btn-cards .card-wrapper').each(function(index, el) {
                    $(this).addClass('popup-btn');
                }); 
            }      
        }
        if(typeof window.initTestimonialsPlugin === 'undefined'){
            if($(document.body).find('.testimonials-slider').length!=0){
                window.initTestimonialsPlugin = true;
                $('.testimonials-slider').each(function(){
                    initTestimonialsCarousel(this);
                }); 
            }      
        }
        if (typeof window.initSwitchArrowPlugin === 'undefined'){
            window.initSwitchArrowPlugin = true;
            $(document).ready(function() {
                if ($('.accordionStyles').length!=0) {
                        $('.accordionStyles .card-header a[role="button"]').each(function(){
                            if(!$(this).hasClass('collapsed')){
                                $(this).addClass('collapsed');
                            }
                        });
                    }
            });
            $('.accordionStyles .card-header a[role="button"]').click(function(){
                var $id = $(this).closest('.accordionStyles').attr('id'),
                    $iscollapsing = $(this).closest('.card').find('.panel-collapse');
                if (!$iscollapsing.hasClass('collapsing')) {
                    if ($id.indexOf('toggle') != -1){
                        if ($(this).hasClass('collapsed')) {
                            $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                        }
                        else{
                            $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                        }
                    }
                    else if ($id.indexOf('accordion')!=-1) {
                        var $accordion =  $(this).closest('.accordionStyles ');
                    
                        $accordion.children('.card').each(function() {
                            $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                        });
                        if ($(this).hasClass('collapsed')) {
                            $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                        }
                    }
                }
            });
        }
        if(typeof window.initTabsPlugin === 'undefined'){
            window.initTabsPlugin = true;
            initTabs(document.body);
        }
        
        // Fix for slider bug
        if($('.mbr-slider.carousel').length!=0){
            $('.mbr-slider.carousel').each(function(){
                var $slider = $(this),
                    controls = $slider.find('.carousel-control'),
                    indicators = $slider.find('.carousel-indicators li');
                $slider.on('slide.bs.carousel', function () {
                    controls.bind('click',function(event){
                        clickPrev(event);
                    });
                    indicators.bind('click',function(event){
                        clickPrev(event);
                    })
                    $slider.carousel({
                        keyboard:false
                    });
                }).on('slid.bs.carousel',function(){
                    controls.unbind('click');
                    indicators.unbind('click');
                    $slider.carousel({
                        keyboard:true
                    });
                    if($slider.find('.carousel-item.active').length>1){
                        $slider.find('.carousel-item.active').eq(1).removeClass('active');
                        $slider.find('.carousel-control li.active').eq(1).removeClass('active');
                    }
                });
            });
        }
    }
})(jQuery);
