function fn(){
    return 'Code here';
}

const arrowFn = ()=> 'Code here';
const arrowFn2 = () =>{
    //mais uma expressão
    return 'Code here';
}

//funções tambem são objetos
fn.prop = "posso criar propriedades";

console.log(fn());
console.log(fn.prop);

//receber parametros   
const  logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);


const handleFnExecution = controlFnExec(fn);
