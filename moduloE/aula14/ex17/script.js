function generatorTable() {
  var multiplicate = parseInt(document.getElementById("Multiplicate").value);
  var res = document.getElementById("table");
  var multiplicateTable = "";
  for (var count = 1; count <= 10; count++)
    `multiplicateTable += ${multiplicate}  "x" ${count} = ${multiplicate} * ${count} + <br/>;`;

  res.innerHTML = multiplicateTable;
  console.log("res");
}
