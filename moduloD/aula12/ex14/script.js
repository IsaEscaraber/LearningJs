function load() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("image");
  var date = new Date();
  var hour = date.getHours();
  msg.innerHTML = `Now is ${hour} o'clock. `;
  if (hour >= 0 && hour < 12) {
    img.src = "img/morningO250.png";
    msg.innerHTML += `Good morning!`;
    document.body.style.background = "#FFD04D";
    document.body.style.color = "#FFD04D";
  } else if (hour >= 12 && hour <= 18) {
    // afternoon
    img.src = "img/afternoonO250.png";
    msg.innerHTML += `Good Afternoon!`;
    document.body.style.background = "#CC793A";
    document.body.style.color = "#CC793A";
  } else {
    // night
    img.src = "img/nightO250.png";
    msg.innerHTML += `Good Evening!`;
    document.body.style.background = "#35232F";
    document.body.style.color = "#35232F";
  }
}
