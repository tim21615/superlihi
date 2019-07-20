console.log($('#titleTarget').height());

var imgTarget = $('#imgTarget');
var titleTarget = $('#titleTarget');

imgTarget.css('height',titleTarget.height()-12);

window.onunload = function(){
    imgTarget.css('height',titleTarget.height()-12);
}

$(document).ready(function(){
    $(window).resize(function() {
        imgTarget.css('height',titleTarget.height()-12);
    });
});