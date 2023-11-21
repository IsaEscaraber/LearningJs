function verified() {
  var startInput = parseInt(document.getElementById("start").value);
  var endInput = parseInt(document.getElementById("end").value);
  var stepInput = parseInt(document.getElementById("step").value);

  if (startInput <= 0 || endInput <= 0 || stepInput <= 0) {
    window.alert("teste");
    return;
  }

  var emojis = document.getElementById("emojis");
  for (var count = startInput; count <= endInput; count += stepInput) {
    emojis.innerText = count;
  }
}
