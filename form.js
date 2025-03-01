
$(document).ready(function(){

    $("#bt-cadastrar").click(function(){

        var nome = $("#nome").val();
        var telefone = $("#telefone").val();
        var email = $("#email").val();
        var cidade = $("#cidade").val();
        var estado = $("#estado").val();
        var sexo = $("[name=sexo]:checked").val();

        $("input, select").removeClass("is-invalid");

        if(nome.trim().length <= 2)
        {
            $("#nome").addClass("is-invalid")
        }

        if(telefone == "")
        {
            $("#telefone").addClass("is-invalid")
        }

        if(cidade == "")
        {
            $("#cidade").addClass("is-invalid")
        }

        if(email == "")
        {
            $("#email").addClass("is-invalid")
        }

        if(estado == "Selecione")
        {
            $("#estado").addClass("is-invalid")
        }

        if (sexo == undefined)
        {
            $("[name=sexo]").addClass("is-invalid");
        }

    }); // fim do bt-cadastrar

    $("#telefone").keydown(function(ev){

        console.log(ev.keyCode);
        
        if (ev.keyCode < 48 || ev.keyCode > 57 )
        {
            return false;
        }

    }); // fim keydown

});