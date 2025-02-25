        // E -> P -> S

        function soma(n1, n2)
        {
            var resultado = n1 + n2;
            return resultado;
        }

        soma(2, 3);

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