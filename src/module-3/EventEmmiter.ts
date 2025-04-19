import { createReadStream } from "fs";
import { EventEmitter } from "events";
import express from "express";


const eventEmitter = new EventEmitter();

// //Listen to the event
// eventEmitter.on('myEvent', () => {
//     console.log('Data received!')
// })

// eventEmitter.on('myEvent', () => {
//     console.log('Listener 1!')
// })

//Publish the event 
// eventEmitter.emit('myEvent')


//How to store it as an application-level using app.set(<key>, <value>)
const app = express();

app.set('eventEmitter', eventEmitter);

// console.log(app.get('eventEmitter'))

//Is an Event Emitter Synchronous or Asynchronous?

// eventEmitter.on('myEvent', (data) => {
//     console.log(data)
// })

// console.log('Statement 1')
// eventEmitter.emit('myEvent', 'Statement 2')
// console.log('Statement 3')

//Order of Execution of the Listeners


// eventEmitter.on('myEvent', (data) => {
//     console.log(data, ' - FIRST')
// })

// console.log('Statement A')

// eventEmitter.on('myFun', (data) => {
//     console.log(data, ' - SECOND')
// })


// eventEmitter.emit('myEvent', 'Emitted Statement')
// eventEmitter.emit('myFun', 'Emitted Statement')

// console.log('Statement A')

//How and Where NodeJS Internally uses Event Emitters


// let chunkIndex = 0;
// const readStream = createReadStream("./src/module-3/data.txt");

// readStream.on("open", () => {
//   console.log("Started Reading...");
// });

// readStream.on("end", () => {
//   console.log("Completed Reading...");
// });

// readStream.on("data", (chunk) => {
//   console.log("Chunk: " + ++chunkIndex);
//   console.log("|-----------------------------------------|");
//   console.log(chunk);
//   console.log("\n");
// });

// process.on("exit", () => console.log("Exit"));
// process.on("beforeExit", () => console.log("Before Exit"));
// process.on("uncaughtException", () => {
//   console.log("Exception");
//   process.exit();
// });
// throw new Error("Test Error");

//Some Useful Member Functions of the EventEmitter Class

//Once - With once(), the listener will be discarded after listening for an event. Events listened with once() will be triggered only once.


// eventEmitter.on("myEvent", (data) => {
//   console.log(data, "- ON");
// });

// eventEmitter.once("myEvent", (data) => {
//   console.log(data, "- ONCE");
// });

// eventEmitter.emit("myEvent", "Emitted Statement");
// eventEmitter.emit("myEvent", "Emitted Statement");
// eventEmitter.emit("myEvent", "Emitted Statement");

/**
 * prependListener()
 * By default, event listeners are invoked in the order they are added. 
 * The prependListener() method can be used as an alternative to adding 
 * the event listener to the beginning of the listener array.
 */


// eventEmitter.on("myEvent", (arg) => console.log(arg, "- ON"));
// eventEmitter.prependListener("Luc", (arg) =>
//   console.log(arg, "- PREPENDLISTENER")
// );

// eventEmitter.emit("myEvent", "Emitted Statement");
// eventEmitter.emit("Luc", "Emitted Statement");
// console.log(eventEmitter.eventNames());

/**
 * eventNames()
 * Get all the active event names.
 */

// eventEmitter.on("myEvent", (data) => console.log(data, "- ON"));
// eventEmitter.on("myEvent2", (data) => console.log(data, "- ON"));
// eventEmitter.once("myEvent3", (data) => console.log(data, "- ONCE"));

// console.log(eventEmitter.eventNames());
// eventEmitter.emit("myEvent3", "EVENT");
// console.log(eventEmitter.eventNames());

/**
 * addListener()
 * It’s exactly the same as on(). It’s just an alias for event.on().
*/

// eventEmitter.addListener('add', () => {
//     console.log('Added!')
// })

// eventEmitter.emit('add')

/**
 * removeListener()
 * This is used to remove a listener.
 */

function func1(): void {
  console.log("EVENT TRIGGERED");
}

// eventEmitter.on("myEvent", func1);
// eventEmitter.on("myEvent2", func1);

// console.log(eventEmitter.eventNames());
// eventEmitter.removeListener("myEvent", func1);
// console.log(eventEmitter.eventNames());

/**
 * removeAllListeners()
 * This is used to remove all active event listeners from an EventEmitter instance.
 */

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2", func1);

eventEmitter.removeAllListeners();
console.log(eventEmitter.eventNames());