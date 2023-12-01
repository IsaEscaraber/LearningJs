function analyzeNum() {
  let inputBetween = document.getElementById("numberBetween");
  let boxValue = document.getElementById("boxAnalyze");
  let detailBelow = document.getElementById("detail");

  if (
    inputBetween.value > 100 ||
    inputBetween.value < 1 ||
    inputBetween.value.length == 0
  ) {
    window.alert("ERRO,");
  } else {
    let stringToNumber = Number(inputBetween.value);
    let values = document.createElement("option");
    values.text = `Value ${inputBetween} added`;
    boxValue.appendChild(values);
  }
}
