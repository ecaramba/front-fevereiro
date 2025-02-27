
function fatorial()
{
    var num = valor.value;

    var fim = 1;

    var total = 1;

    while( num >= 1 )
    {

        total = total * num;
        // total *= num;

        //num = num - 1;
        num -= 1;
    }
    
    console.log(total);
}

/* tabuada

    5x1=5
    5x2=10
    5x3=15

*/
function tabuada()
{
    var num = valor.value;

    for (var ini = 1; ini <= 10; ini += 1)
    {
        var total = ini * num;
        console.log(num + "x" + ini + "=" + total);
    }
}

// pedir 4 notas
// mostrar a media
// dizer se
// >= 4 <= 7 -> recuperação
// < 4 -> reprovado
// > 7 -> aprovado
// media -> (n1+n2+n3+n4)/4
function notas()
{

    var media = 0;

    for (var ini = 1; ini <= 4; ini += 1)
    {
        var nota = prompt("digite o valor da nota " + ini);
        media += parseInt(nota);
    }

    media = media / 4;

    console.log("A média é: " + media);

    if (media >= 4 && media <= 7)
    {
        console.log("recuperação");
    } else if (media < 4)
    {
        console.log("reprovado");
    } else 
    {
        console.log("Aprovado");
    }

}

// fibonacci
// 0 1 1 2 3 5 8
// vai dizer numeros da sequencia
// 8 -> 0 1 1 2 3 5 8 13 
function fibo()
{
    var num = valor.value;
    var n1 = 0;
    var n2 = 1;
    
    if (num >= 2)
    {
        console.log(n1);
        console.log(n2);
    } else if (num == 1)
    {
        console.log(n1);
    }
    
    while(num > 2)
    {
        
        var n3 = n1 + n2;
        
        console.log(n3);

        n1 = n2;
        n2 = n3;

        // num = num - 1
        // num -= 1;
        num--;
    }
}