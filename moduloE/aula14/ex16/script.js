function verified() {
  var Start = Number(start.value);
  var End = Number(end.value);
  var Step = Number(step.value);
  var Emogis = document.querySelector("div#emogis");

  if (Step <= 0) {
    window.alert("teste");
  }
  if (Start <= null) {
    Emogis.innerHTML = `Impossible to counting!`;
  }

  while (Start <= 5) {
    Emogis.innerHTML = ``;
    Start++;
  }
}
