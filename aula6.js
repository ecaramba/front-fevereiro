        // E -> P -> S

        function soma(n1, n2)
        {
            var resultado = n1 + n2;
            return resultado;
        }

        soma("2", 3);

        function oi()
        {
            var valor = texto.value;
            mensagem.innerText = valor;
        }

        function maiusculas()
        {
            var valor = texto.value;
            mensagem.innerText = valor.toUpperCase();

        }

        function letra()
        {
            var valor = texto.value;
            var primeira = valor.charAt(0);
            var resto = valor.substring(1);

            mensagem.innerText = primeira.toUpperCase() + resto.toLowerCase();

        }

        function somar()
        {
            var resultado = parseInt(num1.value) + parseInt(num2.value);
            mensagem.innerText = resultado;
        }

        function par()
        {
            var valor = texto.value;

            if ( (valor % 2) == 0)
            {
                mensagem.innerText = "Par";
            } else 
            {
                mensagem.innerText = "Impar";
            }
        }

        function vogal()
        {
            var valor = texto.value;

            // a e i o u
            // ou -> ||
            // e -> &&

            if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u")
            {
                mensagem.innerText = "Vogal";
            } 
            else 
            {
                mensagem.innerText = "Consoante";
            }
        }