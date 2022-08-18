$(function(){
    $("#navigation").load("/lib/nav.html", function(response, status, xhr){
        var source = $("#source").text();
        console.log(source);
        $(source).addClass("navbar-link-active");
    }); 
});