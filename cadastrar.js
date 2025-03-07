$(document).ready(function(){

    $(".bt-add").click(function()
    {
        var nome = $("#nome").val();

        $("#lista").append('<li class="list-group-item">'+ nome +'</li>');
    }); // fim bt-add

});