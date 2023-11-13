var now = new Date();
var hour = now.getHours();
console.log(`Now is exactly ${hour} o'clock.`);
if (hour < 12) {
  console.log("Good morning!");
} else if (hour <= 18) {
  console.log("Good Afternoon!");
} else if (hour < 22) {
  console.log("Good Evening!");
} else {
  console.log("Time to gonna bed! It`s very late, good night");
}
