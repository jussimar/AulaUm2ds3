/* Inserindo valores no display */

var valor = "";//variavel para acumular valores 

//chamada do evento de click de todos os elementos
//com a classe botao
$(document).on("click",".botao",function(){
 //variavel que acumula o valor do textContent do botao
    valor += $(this).text();
    //passando valor acumulado para o display
    $(".display").val(valor);
});

