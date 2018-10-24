window.onscroll = function () { 
    
    if ($(window).scrollTop() >= 30 ) {
        $("#nav").removeClass("black");
        $("#nav").addClass("purple");
    } 
    else {
        $("#nav").removeClass("purple");
        $("#nav").addClass("black");
    }
};