function Animal(qtdPatas){
    this.qtdPatas = qtdPatas;
    this.movimentar = function(){}
}

function Cachorro(morde){
    Animal.call(this,4);
    this.morde = morde;
    this.latir = function(){
        console.log(' au au')
    }
}
const pug = new Cachorro(false);
const pitbul = new Cachorro(true);
console.log(pug);
