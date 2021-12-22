//verboso

function multiply(a,b){
    b = typeof b === 'undefined' ? 1: b;

    return a *b;
}
//padrao usando igual
function multiply(a = 7,b = 2){
    return a *b;
}

console.log(multiply(5,6));