console.log($('#titleTarget').height());

var imgTarget = $('#imgTarget');
var titleTarget = $('#titleTarget');

imgTarget.css('height',titleTarget.height()-12);

window.onunload = function(){
    imgTarget.css('height',titleTarget.height()-12);
}


if($(window).width()<470 && $("#br_tag").length ==0){
    // var br_tag = document.createElement("br");
    $("#imgTarget").after("<br id='br_tag' />");

}

$(document).ready(function(){
    $(window).resize(function() {

        if($(window).width()<470 && $("#br_tag").length ==0){
            // var br_tag = document.createElement("br");
            $("#imgTarget").after("<br id='br_tag' />");

        }

        if($(window).width()>=470 && $("#br_tag").length !=0){
            $("#br_tag").remove();
        }

        imgTarget.css('height',titleTarget.height()-12);
    });
});