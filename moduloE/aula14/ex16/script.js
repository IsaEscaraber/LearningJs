function counting() {
  let startInput = document.getElementById("start");
  let endInput = document.getElementById("end");
  let stepInput = document.getElementById("step");
  let res = document.getElementById("res");

  if (
    startInput.value.length == 0 ||
    endInput.value.length == 0 ||
    stepInput.value.length == 0
  ) {
    window.alert("[ERROR] Missing data");
  } else {
    res.innerHTML = "Counting: ";
    let s = Number(startInput.value);
    let e = Number(endInput.value);
    let t = Number(stepInput.value);

    for (let c = s; c <= e; c += t) {
      res.innerHTML += `${c} `;
    }
  }

  console.log(alert);
  // var emojis = document.getElementById("res");
  // for (var count = startInput; count <= endInput; count += stepInput) {
  //   emojis.innerText = count;
  // }
}
