this.name = 'nome no contexto de criação';

const getNameArrowFn = () =>this.name;

function getName(){
    return this.name;
}

const user = { 
    name: 'Tomate',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn);
console.log(user.getName);