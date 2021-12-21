//retorna o tamanho de uma string
const TextSize = 'texto'.length;
console.log(`quantidade de letras é : ${TextSize}`);

//retorna um array quebrado a string por delimitador
const spllittedText = 'Texto'.split('x');
console.log(`\n Array com as posições separadas pelo delimitador: `,spllittedText);

//busca por um valor e subtitui por outro
const replacedText = 'Texto'.replace('Texto','Toxte');
console.log('\n Substituição de valor: ', replacedText);

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\n Última letra de uma string: ',lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\n Valor da String  da primeira menos a ultima: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\n Valor da string  da segunda letra até a ultima: ', secondToEnd);

//retorna n caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substring(0,2);
console.log('\n As duas letras primeiras letras são: ',twoCharsBeforeFirstPos);