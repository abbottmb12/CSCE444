$(function() {
    $( allIDs ).draggable({          
        start: function() {
            fadeAll();
            $(this).removeClass( "bounce" );
            $(this).addClass( "mover" );
        },
        stop: function() {
            fadeAll();
            $(this).removeClass( "mover" );
            $(this).addClass( "bounce" );
        }
    });
});

var allPanels = "#passionPanel, #passionPickUp, #juxtapositionPanel, #juxtapositionPickUp";
var allPickUps = "passionPickUp, #juxtapositionPickUp"
var allIDs = "#passion, #juxtaposition, #inner, #conflict";

function fadeAll(){
     $(allPanels).fadeOut();
}

function fadeAllBut(id){
    var fadeThese = allPanels;
    fadeThese = fadeThese.replace(", #" + id + "Panel, #" + id + "PickUp", "");
    fadeThese = fadeThese.replace("#" + id + "Panel, #" + id + "PickUp, ", "");
    $(fadeThese).fadeOut();
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    console.log(encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/");
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$(document).ready(function() {
    $(allPanels).hide();
    $(allIDs).addClass(function(){
        var showt = $(event.target).attr('id');
        var showc = readCookie($(event.target).attr('id'));
        alert("For " + showt + " why does:" + showc + " != 1?");
        
        if(readCookie("juxtaposition")) == 1){
            return "setBW";
        }
        else
           return "colored";
    });

    $(allPickUps).click(function(){
        var parentID = $(event.target).attr('id').replace("PickUp","");
        console.log(parentID);
        createCookie(parentID,1,1);
    });
    
    $(allIDs).click(function(e) {
        e.stopPropagation();                         
    });
    $(document).click(function() {
        fadeAll();
    });
    
    $( allIDs ).click(function(selectedID) {
        var id = $(event.target).attr('id');
        fadeAllBut(id);
        $("#" + id + "Panel, #" + id + "PickUp").fadeIn();
    });
});

/*$(location).attr('href', $(this).attr("class").split(' ')[0] + '.html')*/