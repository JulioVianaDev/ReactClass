const fruit = 'pera';

switch(fruit){
    case 'banana':
        console.log('\n3,99$ o kg');
        break;
    case 'Tomate':
        console.log('\n1,5$ o kg');
        break;
    case 'mamao':
    case 'pera':
        console.log('\n perae mermao');
        break;
    default:
        console.log('Produto não existente no estoque');
        break;
}