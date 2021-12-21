var teste = 'exemplo';

(()=>{
    console.log(`valor da função teste é ${teste}`);
    if (true){
        var teste = 'exemplo';
        console.log(`valor dentro do if é ${teste}`);

    }
    console.log(`valor fora do if ${teste}`);
})();