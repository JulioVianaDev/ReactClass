function Animal(){
    
}
Animal.prototype.qtdPatas = 0
Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    this.qtdPatas =4;
    this.morde = morde;
}
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('au au');
}
const pug = new Cachorro(false);
