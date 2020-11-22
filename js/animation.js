$(window).load(function() {
    "use strict";
    var fadeOutPreloder = {
        p: {
            opacity: 0
        },
        o: {
            duration: 750,
            display: 'none'
        }
    };
    var fadeIn = {
        p: {
            opacity: 1
        },
        o: {
            duration: 750,
        }
    };
    var scroll = {
        o: {
            duration: 500,
            easing: "easeInOutQuart"
        }
    };
    $('.preloder').velocity(fadeOutPreloder.p, fadeOutPreloder.o);
    var homeInSequence = [{
        e: $('.logo'),
        p: fadeIn.p,
        o: fadeIn.o
    },{
        e: $('.scroll-down'),
        p: fadeIn.p,
        o: fadeIn.o
    }];
    $(".logo").css("opacity", "0");
    $(".scroll-down").css("opacity", "0");
    setTimeout(function() {
        if (isFacebookApp()) {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setTimeout(function() {
            $.Velocity.RunSequence(homeInSequence);
        }, 150);
    }, 850);
    $(".scroll-down a").click(function() {
        $(".menu").velocity("scroll", scroll.o);
    });
});

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}
