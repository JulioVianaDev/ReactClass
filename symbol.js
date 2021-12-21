const symbol1 = Symbol();
const symbol2 = Symbol();

//symbols são unicos
console.log('symbol 1 é igual a symbol 2 : ',symbol1 === symbol2);

//prevenir conflito entre nomes das propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user ={
    [nameSymbol1]: 'Tomate',
    [nameSymbol2]: 'Alface',
    lastName: ' batata doce'
}

console.log(user)

for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log(`\n Valor da chave ${key} : ${user[key]}`);
    }
}

console.log('\npropriedades do objeto user: ',Object.keys(user));
console.log('\nValores  das propriedades do objeto user', Object.values(user));

//exibir symbols de um objeto
console.log('\n symbols no objeto user:', Object.getOwnPropertySymbols(user));

//acessando todas as propriedades de um symbol
console.log('todas as propriedades o objeto são: ',Reflect.ownKeys(user));

//criar um enum
const directions={
    up : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
};