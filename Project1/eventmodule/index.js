const EventEmitter = require("events");

const event = new EventEmitter();

event.on('saymyname', () => {
    console.log("Your name is Mouli");
})

event.emit("saymyname");
