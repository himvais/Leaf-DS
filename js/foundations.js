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

$("#colour").click(function(){
    $("#content").load("_colours.html");
    resetActive("#colour");
});

$("#typography").click(function(){
    $("#content").load("_typography.html");
    resetActive("#typography");
});

$("#icon").click(function(){
    $("#content").load("_icons.html");
    resetActive("#icon");
});

$("#layout").click(function(){
    $("#content").load("_layout.html");
    resetActive("#layout");
});

$("#spacing").click(function(){
    $("#content").load("_spacing.html");
    resetActive("#spacing");
});

$("#elevation").click(function(){
    $("#content").load("_elevation.html");
    resetActive("#elevation");
});

$("#border").click(function(){
    $("#content").load("_border.html");
    resetActive("#border");
});

$("#motion").click(function(){
    $("#content").load("_motion.html");
    resetActive("#motion");
});

$("#illustrations").click(function(){
    $("#content").load("_illustrations.html");
    resetActive("#illustrations");
});

$("#accesibility").click(function(){
    $("#content").load("_accesibility.html");
    resetActive("#accesibility");
});

