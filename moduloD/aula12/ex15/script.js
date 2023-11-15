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
    if (fgender[0].checked) {
    }
  }
}
