// var age = 22;
// if (age < 18) {
//   console.log("Underage");
// } else {
//   console.log("Of legal age");
// }
var age = 12;
console.log(`You are ${age} years old.`);
if (age < 16) {
  console.log("Can't vote");
} else if (age < 18 || age > 65) {
  console.log("Optional Vote");
} else {
  console.log("Mandatory Vote");
}
