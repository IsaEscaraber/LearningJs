function generatorTable() {
  let multiplicateNumber = document.getElementById("Multiplicate");
  let res = document.getElementById("res");

  if (multiplicateNumber.value.length == 0) {
    window.alert("Error. Please enter a number");
  } else {
    res.innerHTML = "Multiplicate Table: <br>";
    let stringToNumber = Number(multiplicateNumber.value);

    for (let count = 1; count <= 10; count++) {
      res.innerHTML += `${count} x ${stringToNumber} = ${
        count * stringToNumber
      } <br />`;
    }
  }
}
