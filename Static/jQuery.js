$(document).ready(function(){
    /*------------------------------*/
    /*------NRZI padding adder------*/
    /*------------------------------*/
    $(".js--wayPointNrzIButtons").click(function () {
        $(".putNrzICanvasAddPadding").addClass("addPadding");
    });
    $(".js--wayPointRzButtons").click(function () {
        $(".putRzCanvasAddPadding").addClass("addPadding");
    });
});