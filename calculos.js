
/* ESSE FOI O CODIGO DA AULA 1 - ALURA (FUNCIONOU NO CONSOLE)

var nome = "juliane mayara"
var notaUm = 9
var notaDois = 7
var notaTres = 9


// a soma de 3 notas, divididas por 3.
var media = (notaUm + notaDois + notaTres) / 3;


// a media usando o metodo toFixed(1), para arredondar e colocar so em uma casa decimal se caso o usuario inserir mts numeros.
var mediafixada = media.toFixed(1);


// imprime os resultados da soma para o usuario ver
console.log("SEJA BEM VINDA, A CALCULADORA IMERSÃO DEV")
console.log("Aluna: " + nome);
console.log("Média final: " + mediafixada);



// condição SE e SENAO uasdo para dizer se a aluna esta aprovada ou repovada de acordo com o calculo.

if (mediafixada >= 7) {
    console.log("Status: aprovada");
}
else {
    console.log("Status: reprovada");
}

console.log("Obrigada, e tenha boas ferias!");
*/




// ESSE É O CODIGO DE UM DOS DESAFIOS QUE A ALURA PEDIU, 
// MOSTRAR PRO USUARIO A MEDIA DE SUAS NOTAS.

function somar(){
    var valorElemento = document.getElementById("valorNotaUm");
    var valorNotaUm = valorElemento.value;
    var primeiroBimestre = parseFloat(valorNotaUm);

    var valorElemento = document.getElementById("valorNotaDois");
    var valorNotaDois = valorElemento.value;
    var segundoBimestre = parseFloat(valorNotaDois);

    var valorElemento = document.getElementById("valorNotaTres");
    var valorNotaTres = valorElemento.value;
    var terceiroBimestre = parseFloat(valorNotaTres);
   
   
    var nota = (primeiroBimestre + segundoBimestre + terceiroBimestre) /3;
   

    var elementoValorMedia = document.getElementById("valorMedia");
    var valorMedia = "Olá aluno(a), a sua média final é: " + nota.toFixed(1);
    elementoValorMedia.innerHTML = valorMedia;

}
   

