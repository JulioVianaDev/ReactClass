//rest operator ...
function sum(...args){
    return args.reduce((acc,value)=> acc+value,0);
}
console.log(sum(7,7,8,8,5,4));

const sum2= (...rest)=>{
    
};