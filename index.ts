
/**
 * This function generates a random number between 1 and 1000 and logs it to the console.
 */
export default function getRandomNumber() : void {
    const random = Math.floor(Math.random() * 1000) + 1;
    console.log(`This is a random number from 1 to 1000: ${random}`);
}

//Calling the function to execute it 
getRandomNumber();