$(function(){
    //inserts the sidebar and apply the active class
    $("#navigation").load("/lib/nav.html", function(response, status, xhr){
        var source = $("#source").text();
        $(source).addClass("navbar-link-active");
    }); 
});