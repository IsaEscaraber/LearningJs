function Verified() {
  var country = window.document.querySelector("input#country").value; //Não pode esquecer o value no final quando é texto.
  var res = window.document.querySelector("div#res");

  if (country == "") {
    res.innerHTML = `<p>Type your <strong>country</strong></p>`;
    return;
  }

  if (country == `Brazil`) {
    res.innerHTML = `<p>It means your are <strong/>Brazilian<strong/></p>`;
    // console.log(`Brazilian`);
  } else {
    res.innerHTML = `<p>Your country is <strong>${country}</strong></p>`;
    res.innerHTML += `<p>Oh, your are a <strong/>Foreigner<strong/>!</p>`;
    // console.log(`Foreigner`);
  }
}
function reload() {
  var country = window.document.querySelector("input#country").value;

  if (country == "") return;
  window.document.location.reload(); //Isso não é o mesmo que o nome da fuction.
}
