const users = ['tonhao', 'tomate', 'shinobu','gabriel'];

const gender= {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons =[
    {
        Name: 'Júlio',
        Age: 20,
        Gender: gender.MAN
    },
    {
        Name: 'Roberto',
        Age: 66,
        Gender: gender.MAN
    },
    {
        Name: 'Jeniffer',
        Age: 19,
        Gender: gender.WOMAN
    },
];
//retornar a quantidade de itens de um array
console.log('itens: ',persons.length);

//verificar se é um array
console.log(' a variavel person é um array: ',Array.isArray(persons));

//iterar os itens do array
persons.forEach((persons,index,arr)=>{
    console.log(`Nome: ${persons.Name} index: ${index}`, arr);
});

//filtrar array
const mens = person.filter(persons.gender === gender.MAN);
console.log('\nNova lista com os homens',mens);

//retornar um novo
const personWithCourse = persons.map(person =>{
    person.course = 'introdução ao javaScript';
    return person;
});

console.log('\n Pessoas com a adição de curse: ', personWithCourse);

//Transformar em um novo array
const totalAge = persons.reduce((Age,persons)=>{
    Age +=persons.Age;
    return Age;
},0);

console.log('\n A soma da idade das pessoas é : ',totalAge);

//juntando operações

const TotalEvenAges= person
                        .filter(persons => persons.Age %2 === 0)
                        .reduce((Age,person) =>{
                            Age += person.Age;
                            returnAge
                        
                        },0);

console.log('\nSoma de idades da spessoas que tem idade par ',TotalEvenAges);