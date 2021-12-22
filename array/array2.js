const divs = document.querySelectorAll('div');
const arr = Array.from(divs);
const fruits = ['banana', 'tomate'];
fruits.push('berinjelinha');

const remove =fruits.pop();
const remove2 = fruits.unshift();

fruits.slice(-2)
