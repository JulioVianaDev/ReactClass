const user = {
    name: "tomate",
    lastName: 'dos bao'
}

//recupera as chaves do usuario
console.log('propriedades do objeto user', Object.keys(user));

//recupera os valores das chaves do usuario
console.log('\nValores das propriedades do objeto: ',Object.values(user));

//retorna um array de arrays  contendo [nome_prop , Valor_prop]
console.log('\n lista de propriedades e valores: , ',Object.entries(user));

//mergear as propriedades do objeto
Object.assign(user,{fullName: 'tomate das vida'});

console.log('\nAdiciona a propriedade fullname no objeto user: ',user);
console.log('\n retorna um novo objeto mergeando dois ou mais objetos',Object.assign({},user,{age:26}));

//previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
