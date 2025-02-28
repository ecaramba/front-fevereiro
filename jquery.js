
function mudar()
{
    var nova = $("#cor").val();
    $(".titulo").css("color", nova);
}

function add()
{
    var cidade = $("#cidade").val();
    var primeira = cidade.charAt(0);
    var resto = cidade.substring(1);

    var nova = primeira.toUpperCase() + resto.toLowerCase();
    
    
    if ($("#lista").html().includes(nova) == true )
    {
        alert("cidade já cadastrada");
    } else 
    {

        $("#lista").append("<li>" + nova + "</li>");
    }
    
}

// documento carregado
$(document).ready(function(){

    // add um evento
    $(".bt-add").click(add);
    
    $(".titulo").css("color", "red");

    $("h1, li").click(function(){
        var nova = $("#cor").val();
        $(this).css("color", nova)
    });
});
