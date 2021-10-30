jQuery(document).ready(function($) {
    "use strict";

    /*=================== Dropdown Anmiation ===================*/ 
    var drop = $('nav div > ul > li > ul > li');
    $('nav div > ul > li').each(function(){
        var delay = 0;
        $(this).find(drop).each(function(){
            $(this).css({transitionDelay: delay+'ms'});
            delay += 50;
        });
    });  
    var drop2 = $('nav div > ul > li > ul > li >  ul > li')
    $('nav div > ul > li > ul > li').each(function(){      
        var delay2 = 0;
        $(this).find(drop2).each(function(){
            $(this).css({transitionDelay: delay2+'ms'});
            delay2 += 50;
        });
    });

    //===== Side Panel =====//
    $('.side-panel > span').on('click', function () {
        $('.side-panel').toggleClass('active');
        $(this).toggleClass('spin');
        return false;
    });

    //===== Color Picker =====*/
    $('.color-picker a').on('click', function () {
        $('.color-picker a').removeClass('applied');
        $(this).addClass('applied');
        return false;
    });

    $('.main-menu-btn').on('click',function(){
        $('.logo-menu-sec').toggleClass('active');
        return false;
    });

    $('.header-search > a').on('click',function(){
        $('.header-search').toggleClass('active');
        return false;
    });

    //===== Responsive Header =====//
    $('.res-menu-btn').on('click', function () {
        $('.res-menu').addClass('slidein');
        return false;
    });
    $('.res-menu-close').on('click', function () {
        $('.res-menu').removeClass('slidein');
        return false;
    });
    $('.res-menu li.menu-item-has-children > a').on('click', function () {
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });

    //===== Scrollbar =====//
    if ($('.res-menu').length) {
      var ps = new PerfectScrollbar('.res-menu');
    }

    $('.cp-cause-search-item').on('click',function(){
        $(this).toggleClass('active');
        $(this).children('ul.cp-seach-listed').slideToggle();
        return false;
    });

    //===== LightBox =====//
    if ($.isFunction($.fn.fancybox)) {
        $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
    }


     /* Owl Slider For Testimonial
     ================================================*/
     if ($('#cp-testimonial-slider').length) {
        $('#cp-testimonial-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:1,
            smartSpeed:2000,
            padding:0,
            margin: 0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }

     /* Owl Slider For Cause
     ================================================*/
     if ($('#cp-causes-slider').length) {
        $('#cp-causes-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            items:3,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:3,
                }
            }
        });
    }

     /* Owl Slider For Cause
     ================================================*/
     if ($('#cp-causes-slider_v2').length) {
        $('#cp-causes-slider_v2').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            items:3,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1199:{
                    items:3,
                }
            }
        });
    }

     /* Owl Slider For Team
     ================================================*/
     if ($('#cp-team-slider').length) {
        $('#cp-team-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                567:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:3,
                }
            }
        });
    }


    /* Owl Slider For Sponsors
    ================================================*/
    if ($('#cp-sponsors-slider').length) {
        $('#cp-sponsors-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:6,
            smartSpeed:1000,
            padding:0,
            margin: 10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                567:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:5,
                },
                1199:{
                    items:6,
                }
            }
        });
    }

     /* Owl Slider For Banner
     ================================================*/
     if ($('#cp-news-slider').length) {
        $('#cp-news-slider').owlCarousel({
            loop:true,
            dots: false,
            nav: true,
            navText:'',
            items:1,
            smartSpeed:1500,
            padding:0,
            margin: 0,

        });
    }

    /* Owl Slider For Banner
    ================================================*/
    if ($('#cp-tweets-slider').length) {
        $('#cp-tweets-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:1,
            smartSpeed:1500,
            padding:0,
            margin: 0,

        });
    }


     /* FILTERABLE Masonary For Gallery
     ======================================================*/
     if ($('.cp-filterOuter_v1').length) {
        var $container = $('.cp-filterOuter_v1');
        $container.imagesLoaded( function(){
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
        $('.cp-filterlist_v1 a').on('click', function(){
            $('.cp-filterlist_v1 .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }


    /* Progressbar Jquery Code
    ================================================*/
    if ($('.cp-progressbar').length) {
        $('.cp-progressbar').barfiller({
          // color of bar
          barColor: '#16b597',
          // shows a tooltip
          tooltip: true,
          // duration in ms
          duration: 1000,
          // re-animate on resize
          animateOnResize: true,
          // custom symbol
          // symbol: "%"
          
      });
    }

    /* Counter Jquery Code CounterUp
    ================================================*/
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 12,
            time: 1500
        });
    }

    /* Counter Jquery Code Fast Select
    ================================================*/
    if ($('select').length) {
        $('select').fastselect({});
    }

    //===== ToolTip =====//
    if ($.isFunction($.fn.tooltip)) {
        $('[data-toggle="tooltip"]').tooltip();
    }


    /* BxSlider Jquery Code
    ================================================*/
    if ($('#product-slider').length) {
        $('#product-slider').bxSlider({
          auto: true,
          pagerCustom: '#bx-pager',
          navigation:false,
      });
    }

    /* Countdown Jquery Code
    ================================================*/
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('.cp-countdown').countdown({until: austDay});
        $('.year').text(austDay.getFullYear());
    });


    /* Calendar Jquery Code For Event Page
    ================================================*/
    if ($('#cp-calendar').length) {
        $('#cp-calendar').fullCalendar({
          defaultDate: '2018-03-12',
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: [
          {
              title: 'All Day Event',
              start: '2018-03-01'
          },
          {
              title: 'Long Event',
              start: '2018-03-07',
              end: '2018-03-10'
          },
          {
              id: 999,
              title: 'Repeating Event',
              start: '2018-03-09T16:00:00'
          },
          {
              id: 999,
              title: 'Repeating Event',
              start: '2018-03-16T16:00:00'
          },
          {
              title: 'Conference',
              start: '2018-03-11',
              end: '2018-03-13'
          },
          {
              title: 'Meeting',
              start: '2018-03-12T10:30:00',
              end: '2018-03-12T12:30:00'
          },
          {
              title: 'Lunch',
              start: '2018-03-12T12:00:00'
          },
          {
              title: 'Meeting',
              start: '2018-03-12T14:30:00'
          },
          {
              title: 'Happy Hour',
              start: '2018-03-12T17:30:00'
          },
          {
              title: 'Dinner',
              start: '2018-03-12T20:00:00'
          },
          {
              title: 'Birthday Party',
              start: '2018-03-13T07:00:00'
          },
          {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2018-03-28'
          }
          ]
      });
    }


});

