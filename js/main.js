$(function () {
    "use strict";
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if ($(".menu-items").length) {
        var defaultFilter = $(".tagsort-active").attr("data-filter");
        var $grid = $(".menu-items").isotope({
            itemSelector: ".menu-item",
            layoutMode: "fitRows",
            filter: defaultFilter,
        });
        var $header = $(".menu-headers").isotope({
            itemSelector: ".menu-header",
            layoutMode: "fitRows",
            filter: defaultFilter,
        });
        $(".menu-tags").on("click", "span", function () {
            $(".menu-tags span").removeClass("tagsort-active");
            $(this).toggleClass("tagsort-active");
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
            $header.isotope({ filter: filterValue });
        });
    }
    if ($(".menu-items2").length) {
        var defaultFilter = $(".tagsort2-active").attr("data-filter");
        var $grids = $(".menu-items2").isotope({
            itemSelector: ".menu-item2",
            layoutMode: "fitRows",
            filter: defaultFilter,
        });
        $(".menu-tags2").on("click", "span", function () {
            $(".menu-tags2 span").removeClass("tagsort2-active");
            $(this).toggleClass("tagsort2-active");
            var filterValue = $(this).attr("data-filter");
            $grids.isotope({ filter: filterValue });
        });
    }
    if ($(".menu-items3").length) {
        var defaultFilter = $(".tagsort3-active").attr("data-filter");
        var $grid3 = $(".menu-items3").isotope({
            itemSelector: ".menu-item3",
            layoutMode: "fitRows",
            filter: defaultFilter,
        });
        $(".menu-tags3").on("click", "span", function () {
            $(".menu-tags3 span").removeClass("tagsort3-active");
            $(this).toggleClass("tagsort3-active");
            var filterValue = $(this).attr("data-filter");
            $grid3.isotope({ filter: filterValue });
        });
    }
    if ($(".menu-items4").length) {
        var defaultFilter = $(".tagsort4-active").attr("data-filter");
        var $grid4 = $(".menu-items4").isotope({
            itemSelector: ".menu-item4",
            layoutMode: "fitRows",
            filter: defaultFilter,
        });
        $(".menu-tags4").on("click", "span", function () {
            $(".menu-tags4 span").removeClass("tagsort4-active");
            $(this).toggleClass("tagsort4-active");
            var filterValue = $(this).attr("data-filter");
            $grid4.isotope({ filter: filterValue });
        });
    }
    if ($(".about-photo img").length) {
        $(".about-photo img").magnificPopup({ type: "image", removalDelay: 300, mainClass: "mfp-fade" });
    }
    if ($(".gallery-item").length) {
        $(".gallery-item").magnificPopup({
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade",
            gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
        });
    }

    var scrollAnim = $("body").data("scroll-animation");
    if (scrollAnim) {
        new WOW().init();
    }
});

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

function adaptCSSFbBrowser() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let fbresize;
if (isFacebookApp() || true) {
    fbresize = window.setInterval(function(){
        adaptCSSFbBrowser();
    }, 250)

    window.setTimeout(function() {
        window.clearInterval(fbresize);
    },10000)
}