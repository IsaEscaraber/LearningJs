let num = [5, 8, 2, 9, 3];
num.push(1); // If I add this command after the sort command, the value 1 will add to the last position, as it will first be organized and then added
num.sort();
console.log(num);
console.log(`Our vector has ${num.length} positions`);
console.log(`The first value of the vector is ${num[0]}`);
