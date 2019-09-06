const promiseFunction= () => new Promise ((resolve, reject) => {
    setTimeout( () => {
        if(Math.random<0.5){
            resolve(null,'Pedro es una loca');
        }else{
            reject(new Error('Pedro es demasiado loca'));
        }
    },2000);
});

async function asyncAwait () {
    try {
        const msg= await promiseFunction();
        console.log('message', msg);
    } catch (error) {
        console.log('Error',error);
    }
}

asyncAwait();