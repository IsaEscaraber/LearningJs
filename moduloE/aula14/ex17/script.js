function generatorTable() {
  let multiplicateNumber = document.getElementById("Multiplicate");
  let tab = document.getElementById("selcTable");
  let res = document.getElementById("res");

  if (multiplicateNumber.value.length == 0) {
    window.alert("Error. Please enter a number");
  } else {
    let stringToNumber = Number(multiplicateNumber.value);
    tab.innerHTML = "";
    // res.innerHTML = "Multiplicate Table: <br>";
    for (let count = 1; count <= 10; count++) {
      // res.innerHTML += `${count} x ${stringToNumber} = ${
      //   count * stringToNumber
      // } <br />`;
      // res.innerHTML += `${tab}`;
      let item = document.createElement("option");
      item.text = `${stringToNumber} x ${count} = ${count * stringToNumber}`;
      tab.appendChild(item);
    }
    //  let count = 1;
    //  while (count <=10) {
    //   count++
    // }
  }
}
