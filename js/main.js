/*
=================================================
AQUI VAI O JS QUE É CARREGADO EM TODAS AS PAGINAS
=================================================
*/

function openHamburguer() {
    $(".hamburger").click(function (e) {
        e.stopPropagation();
        $(".sideNav").toggleClass("sideNav--visible");
        $("body").click(function () {
            $(".sideNav").removeClass("sideNav--visible");
        });
    });
}

function mainNavMobile() {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
        var mainNavWidth = $(".mainNav ul")[0].scrollWidth;
        if (mainNavWidth <= windowWidth) {
            //alert("seta");
            $(".mainNavArrow").hide();
            $('.mainNav ul').css('margin','0');
        }
    }
}

function searchOpen() {
    $(".searchIcon").click(function (e) {
        e.stopPropagation();
        $(".headerSearchFormWrapper").slideToggle("fast");
        $(".headerSearchFormWrapper").click(function (e) {
            e.stopPropagation();
        });
        //alert("jnvnv");
        $("body").click(function () {
            $(".headerSearchFormWrapper").slideUp("fast");
        });
    });
}

function autoRefresh() {
    setTimeout(function () {
        window.location.reload(1);
    }, 300000);
}

$(document).ready(function () {
    openHamburguer();
    mainNavMobile();
    searchOpen();
});
