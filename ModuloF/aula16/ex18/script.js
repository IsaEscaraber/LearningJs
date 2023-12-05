let valueArray = [];
let inputValue = document.getElementById("numberBetween");
function analyzeNum() {
  let boxValue = document.getElementById("boxAnalyze");

  if (
    inputValue.value > 100 ||
    inputValue.value < 1 ||
    inputValue.value.length == 0
  ) {
    window.alert("ERRO, incorret value!");
  } else {
    function addValue() {
      valueArray.push(inputValue.value);
      for (let pos = inputValue; pos != valueArray.value; pos++) {
        let values = document.createElement("option");
        values.text = `Value ${valueArray[pos]} added`;
        boxValue.appendChild(values);
        return;
      }
    }
    addValue();
  }
}
function finishValue() {
  let detailBelow = document.getElementById("detail");
  let boxValue = document.getElementById("boxAnalyze");
  if (valueArray.length == 0) {
    window.alert("ERRO, it is empty!");
  } else {
    detailBelow.innerHTML = `It will show all the information related to the above content`;
    detailB = valueArray.indexOf(1);
  }
}
