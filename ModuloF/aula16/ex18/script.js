let inputValue = document.getElementById("numberBetween");
let boxValue = document.querySelector("select#boxAnalyze");
let detailBelow = document.querySelector("div#detail");
let valueArray = [];

function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
    // inputValue.value.length == 0
  } else {
    return false;
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function analyzeNum() {
  if (isNum(inputValue.value) && !inList(inputValue.value, valueArray)) {
    //Se o valor do input for numero e se NÃO estiver na varivel do input e nem na array, add um numero na array e apareça no select
    valueArray.push(Number(inputValue.value));
    let values = document.createElement("option");
    values.text = `Value ${inputValue.value} added`;
    boxValue.appendChild(values);
    detailBelow.innerHTML = "";
  } else {
    window.alert("ERRO, incorret value OR already added!");
  }
  inputValue.value = ""; // Serve para esvaziar o input
  inputValue.focus(); // Serve para o ponteiro voltar ao input
}

function finishValue() {
  if (valueArray.length == 0) {
    window.alert("ERRO, it is empty! Add values before to finish.");
  } else {
    let total = valueArray.length;
    let high = valueArray[0];
    let smaller = valueArray[0];
    for (let position in valueArray) {
      if (valueArray[position] > high) high = valueArray[position];
      if (valueArray[position] < smaller) smaller = valueArray[position];
    }

    detailBelow.innerHTML = ``;
    detailBelow.innerHTML += `<P> In total, we have ${total} registered numbers.</p>`;
    detailBelow.innerHTML += `<P> The highest value reported was ${high}</p>`;
    detailBelow.innerHTML += `<P> The smallest value reported was ${smaller}</p>`;
  }
}
