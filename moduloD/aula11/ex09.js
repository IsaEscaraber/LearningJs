function Verified() {
  var country = window.document.querySelector("input#country").value; //Não pode esquecer o value no final quando é texto.
  var res = window.document.querySelector("div#res");
  res.innerHTML = `<p>Your country is <strong>${country}</strong></p>`;

  if (country == `Brazil`) {
    res.innerHTML += `<p>It means your are <strong/>Brazilian<strong/></p>`;
    // console.log(`Brazilian`);
  } else {
    res.innerHTML += `<p>Oh, your are a <strong/>Foreigner<strong/>!</p>`;
    // console.log(`Foreigner`);
  }
}
