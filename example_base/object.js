let user= {
    name: 'Tomate'
};

//alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] ='outro nome 3';

//criando uma propriedade
user.lastName = "Bão pra saude";

//deletando uma propriedade
delete user.name;