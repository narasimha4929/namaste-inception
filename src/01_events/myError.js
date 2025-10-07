const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("error",(err)=>{
    console.log(err);
});

eventEmitter.emit("error",new Error("error"));

eventEmitter.emit("error","error");
eventEmitter.emit("error","error");