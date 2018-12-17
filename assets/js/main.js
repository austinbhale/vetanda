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

var elementsValid = document.getElementsByClassName('valid');
var elementsInvalid = document.getElementsByClassName('invalid');
var valids = false; var invalids = false; var received = false;
$('#gform').on('submit', function(e) {
     
    (elementsValid.length > 2) ? valids = true : valids = false;
    (elementsInvalid.length == 0) ? invalids = true : invalids = false;
    
    if (valids && invalids) {
        $('#gform *').fadeOut(2000, function() {
            if (!received) {
                $('#gform').prepend('Thanks! We\'ll be in touch with you soon.');
                received = true;
            }
        });
    } else {
        alert("Please fill in all fields.");
    }
});

$( window ).load(function() {
    setTimeout(function() {
        $('#parallax-container').addClass('trans');
    }, 100);
});

