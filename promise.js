const promise= new Promise ((resolve, reject) => {
    setTimeout( () => {
        if(Math.random<0.5){
            resolve(null,'Pedro es una loca');
        }else{
            reject(new Error('Pedro es demasiado loca'));
        }
    },2000);
});

promise.then(msg => msg.toUpperCase())
    .then(msg => console.log('message', msg))
    .catch(err=> console.log('error', err))
