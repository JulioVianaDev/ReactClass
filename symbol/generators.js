function* hello(){
    console.log('hello');
    yield;

    console.log('tudo bom?');
    yield;

    console.log('meu chapa');

}

const it = hello();
console.log(it.next());
