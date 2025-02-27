
function mudar()
{
    var nova = $("#cor").val();
    $(".titulo").css("color", nova);
}

function add()
{
    var cidade = $("#cidade").val();
    $("#lista").append("<li>" + cidade + "</li>");
}