

/**
 * This function generates a random number between 1 and 1000 and logs it to the console.
 */
export default function getRandomNumber() : void {
    const random = Math.floor(Math.random() * 1000) + 1;
    console.log(`This is a random number from 1 to 1000: ${random}`);
}

//Calling the function to execute it 
// getRandomNumber();

//Buffers Example

const buffer = Buffer.alloc(50);

const buffer2 = Buffer.from('inside the 🍔', 'utf-8')

buffer.write('Try to put 🍟 in every meal', 'utf-8')
buffer2.copy(buffer, 16)

console.log(buffer.toString('utf-8'))
//Output: Try to put 🍟 inside the 🍔
