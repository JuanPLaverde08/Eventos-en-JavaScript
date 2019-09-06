const EventEmitter= require('events');

class Logger extends EventEmitter{
    execute(cb){
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('Finish');
        console.log('After');
    }
}

const logger= new Logger();

logger.on('start',()=> console.log('Comenzando'));
logger.on('Finish', () => console.log('Finalizando'));
logger.on('Finish', () => console.log('Finalizando 2'));
//logger.execute( () => console.log('Hello'));
logger.execute(()=> setTimeout(() => console.log('Hello'),500))