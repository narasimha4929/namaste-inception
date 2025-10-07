const EventEmitter = require("events");

class MyEventsClass extends EventEmitter{
    // constructor(){
    //     super();
    // }
    sendmessage(msg){
        console.log(msg);
        this.emit("message",msg);
    }
}

const myEventsClass = new MyEventsClass();
myEventsClass.on("message",(msg)=>{
    console.log(msg);
});

myEventsClass.emit("gret");