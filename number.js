const MyNumber = 14.12312;

//transformar o numero em uma string
const NumberString = MyNumber.toString();
console.log('Número transformado em string: ',typeof NumberString);

//retorna um numero com um limite de casas decimais
const fixedTwoDecimals = MyNumber.toFixed(2);
console.log('\n Número com duas casas decimais',fixedTwoDecimals);

//transforma uma string em um float
console.log('\n String parseada para float:',parseFloat('13.22'));

//Transforma uma string em int
console.log('\n String parseada para int: ',parseInt('13.20'))