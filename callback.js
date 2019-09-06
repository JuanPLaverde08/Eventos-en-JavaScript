const asynCallback= function (cb){
    setTimeout( ()=> {
        if(Math.random<0.5){
            return cb(null,'Pedro es una loca');
        }else{
            cb(new Error('Pedro es demasiado loca'));
        }
    },2000);
};

asynCallback( (err,msg) => {
    if(err){
        console.log('err',err);
    }else{
        console.log('message',msg);
    }
})