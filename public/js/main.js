$(document).on("pageshow", "[data-role='page']", function () {
 $('div.ui-loader').hide();

});

/* ============================ TOC ==============================
1.  IOS 8 Bug Fix 
2.  BIGTEXT 
3.  JQUERY COOKIE 
4.  HOVER INTENT ON THE .hover function in jQuery 
5.  SUPPORTS TOUCH OR NOT for IOS, Android, and Windows Mobile 
6.  RESPONSIVE EQUAL HEIGHTS 
7.  FITVIDEOS FOR RESPONSIVE IFRAMES FROM YOUTUBE, VIMEO, SOUND CLOUD ETC., 
8.  PLACEHOLDER SUPPORT 
9.  MENU SCRIPT
10. INITIALIZE MENU
11. SOUND CLOUD NON-BLOCKING LOAD 
12. BIG TEXT
13. DATA SLIDE 
14. DON'T COVER ANCHOR TARGETS 
15. STICKY HEADER  
16. MATCH HEIGHT OF SLIDER NEXT TO THIS COLUMN  
17. MISC INITIALIZATIONS AND CUSTOM SCRIPTS 
    17. - 1 :: Equal Heights Initialize 
    17. - 2 :: .title inner wrapper 
    17. - 3 :: Inner Wrappers for .info-text-box and .widget-title 
    17. - 4 :: icon-click functions :: you can remove this on live sites 
    17. - 5 :: Scroll to Top 
    17. - 6 :: Video Non-Blocking Load
    17. - 7 :: pricing plan 
    17. - 8 :: .click-slide
18. STICKY ADD THIS AND SIDEBAR FOLLOW 
19. SUMMARY PAGE SIDEBAR FOLLOW 
20. JQUERY STICKY FOOTER
================================================================ */

// --------------- 1. IOS 8 Bug Fix --------------- //
$(window).load(function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
    setTimeout(function(){
        window.scrollTo(1, 1);
    }, 100);
}
}); 



/* --------------- 3. JQUERY COOKIE --------------- */
/*!jQuery Cookie Plugin v1.4.1 :  https://github.com/carhartl/jquery-cookie
 * Copyright 2006, 2014 Klaus Hartl : Released under the MIT license */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(arguments.length>1&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false}f.cookie(j,"",f.extend({},i,{expires:-1}));return !f.cookie(j)}}));


/* --------------- 4. HOVER INTENT ON THE .hover function in jQuery ---------------*/
/*! hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:3};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);


/* --------------- 5. SUPPORTS TOUCH OR NOT for IOS, Android, and Windows Mobile --------------- */
/*! Detects touch support and adds appropriate classes to html and returns a JS object  |  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au / Licensed under the MIT license  |  https://coderwall.com/p/egbgdw */
var supports=(function(){var d=document.documentElement,c="ontouchstart" in window||navigator.msMaxTouchPoints;if(c){d.className+=" touch";return{touch:true}}else{d.className+=" no-touch";return{touch:false}}})();

/* --------------- 6. RESPONSIVE EQUAL HEIGHTS --------------- */
/* Javascript-Equal-Height-Responsive-Rows https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows */
// (function($){$.fn.equalHeight=function(){var heights=[];$.each(this,function(i,element){$element=$(element);var element_height;var includePadding=($element.css('box-sizing')=='border-box')||($element.css('-moz-box-sizing')=='border-box');if(includePadding){element_height=$element.innerHeight();}else{element_height=$element.height();}
// heights.push(element_height);});this.css('height',Math.max.apply(window,heights)+'px');return this;};$.fn.equalHeightGrid=function(columns){var $tiles=this;$tiles.css('height','auto');for(var i=0;i<$tiles.length;i++){if(i%columns===0){var row=$($tiles[i]);for(var n=1;n<columns;n++){row=row.add($tiles[i+n]);}
// row.equalHeight();}}
// return this;};$.fn.detectGridColumns=function(){var offset=0,cols=0;this.each(function(i,elem){var elem_offset=$(elem).offset().top;if(offset===0||elem_offset==offset){cols++;offset=elem_offset;}else{return false;}});return cols;};$.fn.responsiveEqualHeightGrid=function(){var _this=this;function syncHeights(){var cols=_this.detectGridColumns();_this.equalHeightGrid(cols);}
// $(window).bind('resize load',syncHeights);syncHeights();return this;};})(jQuery);




     







$(function() {

    /* --------------- 13. DATA SLIDE --------------- */
    $('[data-slide="slide"]').click(function(e) {
        
        var $this = $(this);
        var target = $this.attr('data-target');
        var $target = $(target);
        
        if ($('.slide-panel-parent').children().is('.open')) {
            $('.open').not(target).removeClass('open');
            $('.active-slide-btn').not(this).removeClass('active-slide-btn');
            $(this).toggleClass('active-slide-btn');
            $(target).toggleClass('open');
            $('html').removeClass('slide-active');
            


        } else {
            $(target).toggleClass('open');
            $(this).toggleClass('active-slide-btn');
            $('#page').toggleClass('page-off');
        }

        if ($('.slide-panel-parent').children().is('.open')) {
            $('html').addClass('slide-active'); //was addClass

        } else {
            $('html').removeClass('slide-active');

        }
        	$('#nav-toggle').addClass('hidden');
        e.preventDefault();
    });

    //correct the shifting of the scrollbar when a slide is active
    if ($(document).height() > $(window).height()) {
       $('body').addClass('body-scroll-fix');      
    }


    $('.slide-panel .close').click(function(e) {
        $('.active-slide-btn').removeClass('active-slide-btn');
        $(this).parent().removeClass('open');
        $('html').removeClass('slide-active');
        $('#page').removeClass('page-off');
        $('#nav-toggle').removeClass('hidden');
        e.preventDefault();
    });
 

    // indicate what panel you're on when you've clicked inside a panel to another panel
    $('.slide-panel .signin-toggle').click(function(e) {
         $('.header-btn.signin-toggle').toggleClass('active-slide-btn');

        e.preventDefault();
    });
    
    $('.slide-panel .login-toggle').click(function(e) {
         $('.header-btn.login-toggle').toggleClass('active-slide-btn');
        e.preventDefault();
    });
    

});


// ------------------ 14. DON'T COVER ANCHOR TARGETS --------------------

$(function() {

    //set the variable of the Navbar 
    var navbarHeight = $(".header").height() + 10;

    // SLIDE TO ANCHOR and DON'T COVER ANCHORS WITH .has-anchor on the trigger :: http://stackoverflow.com/a/20320919/1004312
    $('.has-anchor').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - navbarHeight //offset
                }, 1500);
            }
        }
    });
    // Executed on page load with URL containing an anchor tag.
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - navbarHeight //offset height of header here if the header is fixed and it is not!
            }, 1500);
            return false;
        }
    }

});





// --------------- 16. MATCH HEIGHT OF SLIDER NEXT TO THIS COLUMN --------------- 

// $(window).on("load resize",function(){

//     var containerSize = $('.container').width();
//     var colHeight = $('.featured-carousel img').innerHeight() // - 30//;

//     if (containerSize >= 767) {
//         $('.column-inner > .column-bg-fake').height(colHeight);
//     }

// });



/* --------------- 17. MISC INITIALIZATIONS AND CUSTOM SCRIPTS --------------- */
$(function() {


    /* --------------- 17. - 1 :: EQUAL HEIGHT INITIALIZE --------------- */
    // $('.equal-height-content-box .equal-height-content').responsiveEqualHeightGrid();
    // $('.equal-height-col [class*="col-"]').responsiveEqualHeightGrid();

    /* --------------- 17. - 2 :: .title inner wrapper --------------- */
    $('.title').wrapInner("<span></span>");

    /* --------------- 17. - 3 :: Inner Wrappers for .info-text-box and .widget-title --------------- */
    $('.info-text-box').wrapInner("<span></span>");
    $('.widget-title').wrapInner("<span></span>");

    /* --------------- 17. - 4 :: icon-click functions :: you can remove this on live sites ---------------*/
    // $('.icon-demo span.glyphicon, .icon-demo span.ti').each(function() {
    //     var className = $(this).attr('class');
    //     $(this).attr('title', className).css({
    //         'cursor': 'pointer'
    //     });
    //     $(this).tooltip({
    //         trigger: 'click',
    //         container: 'body'
    //     }).toggleClass('active');
    //     $(this).after("<p>" + className + "</p>");
    // });
    $('body').on('mouseup', function(e) {
        $('.icon-demo span.glyphicon, .icon-demo span.ti').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
                $(this).tooltip('hide');
            }
        });
    });

    /* --------------- 17. - 5 :: Scroll to Top ---------------*/
    $('#go-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });
    $('#go-to-top').click(function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });


    /* --------------- 17. - 6 :: Video Non-Blocking Load ---------------*/
    $('.video-holder.youtube .video-trigger').click(function(e) {
        e.preventDefault();
        var URL = $(this).attr('href');
        var htm = '<iframe width="560" height="315" src="http://www.youtube.com/embed/' + URL + '?rel=0?wmode=transparent" frameborder="0"></iframe>';
        $(this).parent().html(htm);
        $('.video-holder').fitVids();
        return false;
    });
    $('.video-holder.vimeo .video-trigger').click(function(e) {
        e.preventDefault();
        var URL = $(this).attr('href');
        var htm = '<iframe width="500" height="281" src="http://player.vimeo.com/video/' + URL + '?title=0&amp;byline=0&amp;portrait=0?wmode=transparent" frameborder="0"></iframe>';
        $(this).parent().html(htm);
        $('.video-holder').fitVids();
        return false;
    });

    //STOP VIDEO inside slider on click inside the slider 
    $('.content-slider, .blog-slider, .featured-slider').click(function() {
        var element = $(this).find('.video-holder iframe');
        if (element.is(':visible')) {
            $.fn.videoStopFunction();
        }
    });

    $('.content-slider, .blog-slider, .featured-slider').on('touchstart', function() {
        var element = $(this).find('.video-holder iframe');
        if (element.is(':visible')) {
            $.fn.videoStopFunction();
        }
    });

    $.fn.videoStopFunction = function() {
        var video = $(".video-holder iframe").attr("src");
        $(".video-holder iframe").attr("src", "");
        $(".video-holder iframe").attr("src", video);
    }



    /* --------------- 17. - 8 :: CLICK SLIDE (mouseover on no-touch) ---------------*/
    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $('.click-slide').show();
    if ($('html').hasClass('touch')) {
        $('.click-slide').click(function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $('.click-slide').removeClass('open');
                $(this).addClass('open');
            }
        });
    } else {
        $('.click-slide').hover(function() { // Hover Intent is being used here
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $('.click-slide').removeClass('open');
                $(this).addClass('open');
            }
        });
    }

    $(document).bind("mouseup touchend", function(e) {
        if ($(e.target).parents(".click-slide").length === 0) {
            $('.click-slide').removeClass('open');
        }
    });

}); // end doc ready



/* --------------- 20. - JQUERY STICKY FOOTER ---------------*/
/*!
 * jQuery Sticky Footer v1.2.3
 * Copyright 2014 miWebb
 * https://github.com/miWebb/jQuery.stickyFooter
 * Released under the MIT license
 */
// (function(e, t, n) {
//     "use strict";

//     function r(t, n) {
//         var r = e(t).outerHeight(true);
//         e(n.content).each(function() {
//             r += e(this).outerHeight(true)
//         });
//         if (r < e(n.frame ? n.frame : t.parent()).height()) {
//             e(t).addClass(n.class)
//         } else {
//             e(t).removeClass(n.class)
//         }
//     }
//     e.fn.stickyFooter = function(n) {
//         var n = e.extend({}, e.fn.stickyFooter.defaults, n);
//         var i = this;
//         r(i, n);
//         e(t).resize(function() {
//             r(i, n)
//         });
//         return this
//     };
//     e.fn.stickyFooter.defaults = {
//         "class": "sticky-footer",
//         frame: "",
//         content: "#page"
//     }
// })(jQuery, window);

// $(window).on('load resize', function() {
//    $(".footer").stickyFooter();
// });
