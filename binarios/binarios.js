//in 
something in somethingItens

//array
var arvores = new Array("pau-brasil","cidreira","Cedro","carvalho","sicomo");
0 in arvores;// retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false

"Cedro" in arvores;// retorna false pq você deve especificar o numero não o conteudo

"length" in arvores; //retorna true porque length é uma propriedade do array

//objetos predefinidos
"PI" in Math; //retorna true
var minhaString = new String("coral");
"lenght" in minhaString; //retorna true

//objetos personalizados
var meucarro = {name:"civic", color:"blue",ano:2019}
"color" in meucarro;// retorna true
"name" in meucarro;//retorna true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2021,05,19);
if (dia instanceof Date){
    //code here
}