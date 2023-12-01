let valueArray = [];
function analyzeNum() {
  let inputValue = document.getElementById("numberBetween");
  let boxValue = document.getElementById("boxAnalyze");
  let detailBelow = document.getElementById("detail");

  if (
    inputValue.value > 100 ||
    inputValue.value < 1 ||
    inputValue.value.length == 0
  ) {
    window.alert("ERRO,");
  } else {
    function addValue() {
      valueArray.push(inputValue.value);
      let values = document.createElement("option");
      values.text = `Value ${inputValue.value} added`;
      boxValue.appendChild(values);
    }
    addValue();
  }
}
function finishValue() {
  let boxValue = document.getElementById("boxAnalyze");
  if (boxValue.value.length == 0) {
    window.alert("ERRO,");
  } else {
    values.innerHTML = `It will show all the information related to the above content`;
  }
}
