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

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

$(document).ready(function() {
    $(allPanels).hide();
    checkCookie();
    $(allIDs).addClass(function(){
        console.log($(this).attr('id'));
        console.log(readCookie($(event.target).attr('id')));
        if(readCookie($(event.target).attr('id'))==1){
            return "setBW";
        }
        else
           return "colored";
    });

    $(allPickUps).click(function(){
        var parentID = $(event.target).attr('id').replace("PickUp","");
        console.log(parentID);
        createCookie("lol",1,1);
        console.log(readCookie("lol"));
        alert('pause');
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