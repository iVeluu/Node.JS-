const oranges = ["orange", "osrange"];
const apples = ["just one apple"];

oranges.forEach((fruit) => {
  console.count(fruit);
});

apples.forEach((fruit) => {
  console.count(fruit);
});

console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.log("Still In the first group");
console.groupEnd("Second group");

const doSomething = () => console.log("test");

const measureDoingSomething = () => {
  console.time("doSomething()");
  // do something, and measure the time it takes
  doSomething();
  console.timeEnd("doSomething()");
};

measureDoingSomething();


console.log(
  "This is %cMy stylish message",
  "color: lime; font-style: italic; background-color: deeppink;padding: 2px"
);


console.log("\x1b[44mAnd now I'm red!");

