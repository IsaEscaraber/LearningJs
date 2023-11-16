function verified() {
  var date = new Date();
  var year = date.getFullYear();
  var fYear = document.getElementById("txtyear");
  var res = document.querySelector("div#res");
  if (fYear.value.length == 0 || Number(fYear.value) > year)
    window.alert("Check the data and try again!");
  else {
    var fgender = document.getElementsByName("radgender");
    var age = year - Number(fYear.value);
    // res.innerHTML = `Calculated age: ${age}`;
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "photo");
    if (fgender[0].checked) {
      gender = "Man";
    } else if (fgender[1].checked) {
      //Não é necessary, pois já subentende-se que é woman the fgender[1], pois é o que restou.
      gender = "Woman";
    }
    res.style.color = "#0e0e5e";
    res.style.textAlign = "center";
    res.innerHTML = `Detected the ${gender} with ${age} years old.`;
  }
}
