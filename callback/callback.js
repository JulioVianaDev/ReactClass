//callbacks
function doSomething (callback){
    setTimeout(function(){
        callback('first data');
    },1000);
}
function doOtherThing(callback){
    setTimeout(function(){
        callback('second data');
    },1000);
}
function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            doOtherThing(function(data2){
                var processedData2 = data2.split('');
                setTimeout(function(){
                    console.log(processedData, processedData2)
                },1000);
            });
        });
    }catch(err){

    }
}

doAll();

//promisses

const myPromisse =  new Promise((resolved,reject)=>{
    setTimeout(function(){
        callback('first data');
    },1000);
})

const Dooyherthing =  new Promise((resolved,reject)=>{
    setTimeout(function(){
        callback('second data');
    },1000);
})

doSomethingPromisse()
    .then(data =>{
        console.log(data);
    })
    .then(data2 =>console.log(data2))
    .catch(error => console.log('ops', error));