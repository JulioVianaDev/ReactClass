const uniqueId = Symbol('hello');

const arr = [2,3,4,5];

const it = arr[Symbol.iterator]();
const str=('Tomate')
for (let value of arr){
    console.log(value);
}
//se eu trocar pela string funfa tb