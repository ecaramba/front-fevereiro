
$(document).ready(function(){

    $("#bt-cadastrar").click(function(){

        var nome = $("#nome").val();

        if(nome == "")
        {
            $("#nome").addClass("is-invalid")
        }

    }); // fim do bt-cadastrar

});