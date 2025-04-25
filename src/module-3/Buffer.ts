//Buffer methods

/**
 *  
 * Buffer.byteLength()
    You can check the length of a buffer objec
    with the Buffer.byteLength() method. The code below 
    demonstrates how to create a buffer, attach a size to it,
    and check the size of the buffer you just created:
 */

const buff = Buffer.alloc(6);

const buffLength = buff.byteLength;

console.log(buffLength);

//Buffer.compare()

/**
 * 
 * Buffer compare returns
 * -1 if the first buffer is less than the second buffer
 * 0 if the buffers are equal
 * 1 if the first buffer is greater than the second buffer
 */

console.log("\nBuffer.compare()")

let buff1 = Buffer.from("x");
let buff2 = Buffer.from("y");
let a = Buffer.compare(buff1, buff2);

//This will return -1
console.log(a);

let buff3 = Buffer.from("y");
let buff4 = Buffer.from("x");
let b = Buffer.compare(buff3, buff4);

//This will return 1
console.log(b);

let buff5 = Buffer.from("x");
let buff6 = Buffer.from("x");
let c = Buffer.compare(buff5, buff6);

//This will return 0
console.log(c);

//Buffer.entries()
/*
With buf.entries(), you can return a loop of indexes and bytes from the content of a buffer object, which is used to know the position and size of buffer contents:
*/

console.log("\nBuffer.entries()");

let buffEntries = Buffer.from("abc");

for (let a of buffEntries.entries()) {
  /*This will print arrays of indexes and byte of buffer content \\[ 0, 120 \][ 1, 121 \][ 2, 122 ]*/
  console.log(a);
} 

/**
 * 
Buffer.fill()
The Buffer.fill() method enables you to create a buffer, allocate a size, and fill it with a specified value. The expression below shows how to use the Buffer.fill() method:
 */

console.log("\nBuffer.fill()");


const buffFill = Buffer.alloc(10).fill('a');

console.log(buffFill.toString());
// This will print aaaaaaaaaa


/*
Buffer.from()
*/ 
console.log("\nBuffer.from()");


// Create buffer from string
let buffFromString = Buffer.from("Nigeria");
console.log(buffFromString);

// Create buffer from the buffer(which we created from string)
let buffFromBuffer = Buffer.from(buffFromString);
console.log(buffFromBuffer);

// create a buffer from an array
const buffFromArray = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buffFromArray);

// Create a buffer from an arraybuffer
const buffFromArrayBuffer = new ArrayBuffer(10);
// Specify offset and length
const buffSpecifyOffsetAndLength = Buffer.from(buffFromArrayBuffer, 0, 3);
console.log(buffSpecifyOffsetAndLength);

//Buffer.includes()

console.log('\nBuffer includes()')

const buffIncludes = Buffer.from('this is a buffer');
console.log(buffIncludes.includes("this"));
// This will print true

console.log(buff.includes(Buffer.from('a buffer example')));
// This will print false

//Buffer.isEncoding()

console.log("\nBuffer encoding()");

console.log(Buffer.isEncoding('hex'));
// This will print true

console.log(Buffer.isEncoding('utf-8'));
// This will print true

console.log(Buffer.isEncoding('utf/8'));
// This will print false

console.log(Buffer.isEncoding('hey'));
// This will print false

//Buffer.swap()

console.log("\nBuffer swap()");

const buffSwap = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.log(buffSwap);
// This will print <Buffer 01 02 03 04 05 06 07 08>

//swap byte order to 16 bit
buffSwap.swap16();
console.log(buffSwap);
// This will print <Buffer 02 01 04 03 06 05 08 07>

//swap byte order to 32 bit
buffSwap.swap32();
console.log(buffSwap);
// This will print <Buffer 03 04 01 02 07 08 05 06>

//swap byte order to 64 bit
buffSwap.swap64();
console.log(buffSwap);

//Buffer.json()

console.log("\nBuffer json()");

const buffJSON = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buffJSON.toJSON());
// This will print {"type":"Buffer", data:[1,2,3,4,5,6,7,8]}