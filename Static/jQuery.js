$(document).ready(function(){
    /*------------------------------*/
    /*-------Sticky  navigation-----*/
    /*------------------------------*/
    $('.js--nrz').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
            $('header').removeClass('clipIt');
        }else{
            $('nav').removeClass('sticky');
            $('header').addClass('clipIt');
        }
    },{
        offset:'70px'
    });
    /*------------------------------*/
    /*------NRZI padding adder------*/
    /*------------------------------*/
    $(".js--wayPointNrzIButtons").click(function () {
        $(".putNrzICanvasAddPadding").addClass("addPadding");
    });
    $(".js--wayPointRzButtons").click(function () {
        $(".putRzCanvasAddPadding").addClass("addPadding");
    });
    $(".js--wayPointDiffManButtons").click(function () {
        $(".putDiffManCanvasAddPadding").addClass("addPadding");
    });
    $(".js--wayPointBezsButtons").click(function () {
        $(".putBezsCanvasAddPadding").addClass("addPadding");
    });
    /*------------------------------*/
    /*-----Scroll on  navigation----*/
    /*------------------------------*/
    $(".js--scrollToNrz").click(function () {
        $("html,body").animate({ scrollTop: $(".js--nrz").offset().top }, 1000);
    });
    $(".js--scrollToNrzI").click(function () {
        $("html,body").animate({ scrollTop: $(".js--nrzI").offset().top }, 1000);
    });
    $(".js--scrollToNrzL").click(function () {
        $("html,body").animate({ scrollTop: $(".js--nrzL").offset().top }, 1000);
    });
    $(".js--scrollToRz").click(function () {
        $("html,body").animate({ scrollTop: $(".js--rz").offset().top }, 1000);
    });
    $(".js--scrollToMan").click(function () {
        $("html,body").animate({ scrollTop: $(".js--man").offset().top }, 1000);
    });
    $(".js--scrollToDiffMan").click(function () {
        $("html,body").animate({ scrollTop: $(".js--diffMan").offset().top }, 1000);
    });
    $(".js--scrollToAmi").click(function () {
        $("html,body").animate({ scrollTop: $(".js--ami").offset().top }, 1000);
    });
    $(".js--scrollToBezs").click(function () {
        $("html,body").animate({ scrollTop: $(".js--bezs").offset().top }, 1000);
    });
    $(".js--scrollToHdb3").click(function () {
        $("html,body").animate({ scrollTop: $(".js--hdb3").offset().top }, 1000);
    });
});