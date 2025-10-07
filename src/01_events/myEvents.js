const EventEmitter = require("events");

const eventEmitting = new EventEmitter();

eventEmitting.on("gret",(prop)=>{
    prop();
});

//Emit the event 

//eventEmitting.emit("gret","king k");

eventEmitting.once("output",(prop)=>{
    prop();
});

// eventEmitting.emit("gret","king k");
// eventEmitting.emit("output","king k");
// eventEmitting.emit("output", "king k");
// eventEmitting.emit("output", "king k");

const listener =()=>{
    console.log("listener called");
}

eventEmitting.emit("gret",listener);
eventEmitting.removeListener("gret",listener);
eventEmitting.emit("gret");
     
