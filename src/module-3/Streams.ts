import Stream, { Readable } from "stream";
import * as fs from 'fs';
import * as assert from 'assert';

//Readable Stream 

// const readableStream = new Stream.Readable();

// readableStream.push("ping!");
// readableStream.push("pong!");


async function logChunks(readable: Readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readableCreateReadStream = fs.createReadStream(
  "./src/module-3/data.txt",
  { encoding: "utf8" }
);
logChunks(readableCreateReadStream);

// Output:
// 'This is a test!\n'

async function readableToString2(readable : Readable) {
  let result = "";
  for await (const chunk of readable) {
    result += chunk;
  }
  return result;
}

const readable = Readable.from("Good morning!", { encoding: "utf8" });
assert.equal(await readableToString2(readable), "Good morning!");

//Readable.from(): Creating readable streams from iterables

async function* generate() {
  yield "hello";
  yield "streams";
  yield "hi";
  yield "alex";
}

const readableFrom = Readable.from(generate());

readableFrom.on("data", (chunk) => {
  console.log(chunk);
});

//Two Reading Modes

// 1. Flowing Mode 

let data = '';
let readerStream = fs.createReadStream("./src/module-3/data.txt"); //Create a readable stream

readerStream.setEncoding("utf-8"); // Set the encoding to be utf8.

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
  console.log('Cooking data...')
  data += chunk;
});

readerStream.on("end", function () {
  console.log('End of data...')
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("Program Ended");

// 2. Paused Mode

let data2 = '';
let chunk;
let readerStream2 = fs.createReadStream("./src/module-3/data.txt"); // Create a readable stream


readerStream2.setEncoding(
  "utf-8"
);

readerStream2.on("readable", function() {
  while((chunk = readerStream2.read()) !== null ){
    data2 += chunk;
  }
});

readerStream2.on("end", function(){
  console.log(data)
});

//Writable Stream 

let readerStream3 = fs.createReadStream("./src/module-3/data.txt"); // Create a readable stream
const writableStream = fs.createWriteStream("./src/module-3/write.txt"); // Create a writable stream

readerStream3.on("data", function( chunk ) {
  writableStream.write(chunk, "utf-8")
}) 

//Using a writable stream you can read data from a readable stream:

const readableStream4 = new Stream.Readable();
const writableStream2 = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream4.pipe(writableStream);

readableStream4.push("ping!");
readableStream4.push("pong!");
// When the source ends, push the EOF-signaling `null` chunk.
readableStream4.push(null);

writableStream2.end();