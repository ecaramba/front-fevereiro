
$(document).ready(function(){

    $("#bt-cadastrar").click(function(){

        var nome = $("#nome").val();

        if(nome == "")
        {
            alert("O campo nome é obrigatório");
        }

    }); // fim do bt-cadastrar

});