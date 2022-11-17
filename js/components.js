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

$("#textinput").click(function(){
    $("#content").load("_textinput.html",function(){
        $(document).ready( function() {
            $('#falseinput').click(function(){
              $("#fileinput").click();
            });
          });
          $('#fileinput').change(function() {
            $('#selected_filename').html(`<span class="mr-200">${$('#fileinput')[0].files[0].name}
            <i id="delete_file" class=" icon-hover ml-200 fa-solid fa-trash"></i></span>`);
            $('#delete_file').click(function(e){
                e.preventDefault();
                $('#fileinput').val(null);
                console.log($('#fileinput').val());
                $('#selected_filename').html(`<span>No file selected</span>`);
            });
          });
          
    });
    resetActive("#textinput");
});

$("#textarea").click(function(){
    $("#content").load("_textarea.html");
    resetActive("#textarea");
});

$("#dropdown").click(function(){
    $("#content").load("_dropdown.html");
    resetActive("#dropdown");
});


  