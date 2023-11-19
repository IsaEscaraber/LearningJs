function verified() {
  var date = new Date();
  var year = date.getFullYear();
  var fYear = document.getElementById("txtyear");
  var res = document.querySelector("div#res");
  if (fYear.value.length == 0 || Number(fYear.value) > year) {
    window.alert("Check the data and try again!");
  } else {
    var fgender = document.getElementsByName("radgender");
    var age = year - Number(fYear.value);
    // res.innerHTML = `Calculated age: ${age}`;
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "photo");
    if (fgender[0].checked) {
      gender = "Masculine person";
      if (age >= 0 && age < 10) {
        // kid
        img.setAttribute("src", "image/boy.png");
      } else if (age < 27) {
        // yang
        img.setAttribute("src", "image/yangman.png");
      } else if (age < 65) {
        // adult
        img.setAttribute("src", "image/man.png");
      } else if (age < 110) {
        // old
        img.setAttribute("src", "image/oldman.png");
      } else {
        // death
        img.setAttribute("src", "image/morte.png");
      }
      console.log("img");
    } else if (fgender[1].checked) {
      //Não é necessary, pois já subentende-se que é woman the fgender[1], pois é o que restou.
      gender = "Feminine person";
      if (age >= 0 && age < 10) {
        // kid
        img.setAttribute("src", "image/girl.png");
      } else if (age < 27) {
        // yang
        img.setAttribute("src", "image/yangwoman.png");
      } else if (age < 65) {
        // adult
        img.setAttribute("src", "image/woman.png");
      } else if (age < 110) {
        // old
        img.setAttribute("src", "image/oldwoman.png");
      } else {
        // death
        img.setAttribute("src", "image/morte.png");
      }
    }
    // res.style.color = "#0e0e5e";
    // res.style.textAlign = "center"; Adicionei esses styles a pasta correspondente pois fica mais organizado, porem da para setar as propriedades por aqui.
    res.innerHTML = `Detected a ${gender} with about ${age} years old.`;

    res.appendChild(img);
  }
}
