console.log('Exemplo de utilização do break');

var i=0;
while(true){
    i ++;
    if (i>3){
        break
    }
    console.log(i)
}

//continue
console.log('\nExemplo da utilização de continue');
const array = [1,2,3,4,5,6];

for (let i = 0;i<array.length;i++){
    const element = array[i];
    if (element %2 ===0){
        continue;
    }
    console.log(element);
}