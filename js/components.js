var active_item = null;

function resetActive(newActive){
    console.log("Active:" + active_item + "  New:" + newActive);
    if(newActive == null){
        $(active_item).removeClass("sidebar-item-active");
        active_item = null;
        return;
    }else{
        if(active_item == null){
            $(newActive).addClass("sidebar-item-active");
            active_item = newActive;
        }else{
            $(active_item).removeClass("sidebar-item-active");
            $(newActive).addClass("sidebar-item-active");
            active_item = newActive;
        }
    }
}

$("#content").load("_base.html", function(response, status, xhr){
    var source = $("#source").text();
    $(source).addClass("navbar-link-active");
});

$("#base").click(function(){
    $("#content").load("_base.html");
    resetActive(null);
});

$("#button").click(function(){
    $("#content").load("_button.html");
    resetActive("#button");
});

$("#input").click(function(){
    $("#content").load("_input.html");
    resetActive("#input");
});