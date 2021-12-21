function soma(a){
    return function(b){
        a + b;
    }
}
const soma2 = soma(2);
soma2(20);
soma2(12);
soma2(2);
soma2(3);