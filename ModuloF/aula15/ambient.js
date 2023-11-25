let num = [5, 8, 2, 9, 3];
num.push(1); // If I add this command after the sort command, the value 1 will add to the last position, as it will first be organized and then added
num.sort();
console.log(num);
console.log(`Our vector has ${num.length} positions`);
console.log(`The first value of the vector is ${num[0]}`);

let pos = num.indexOf(8); //Where is the value 8? what position it is?
if (pos == -1) {
  console.log(`The value was not found`);
} else {
  console.log(`The value 8 is the position ${pos}`);
}
