function getName(){
    return 'Tomate';
}
function logFn(fn){
    console.log(fn());
}
const logFnResult = logFn;

logFnResult(getName);