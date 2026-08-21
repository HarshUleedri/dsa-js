import eventEmitter from "events";

const emitter = new eventEmitter();

emitter.on("hello", (e) => {
  console.log(e);
  console.log("hello event is emitted");
});

emitter.emit("hello", "game");
