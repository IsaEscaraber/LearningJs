function counting() {
  let startInput = document.getElementById("start");
  let endInput = document.getElementById("end");
  let stepInput = document.getElementById("step");
  let res = document.getElementById("res");
  // Essas variáveis são usadas para armazenar os valores escritos nos inputs, pegando pelo id no html.
  if (
    startInput.value.length == 0 ||
    endInput.value.length == 0 ||
    stepInput.value.length == 0
  ) {
    //já aqui, as variaveis que armazenam os inputs do html estao recebendo os valores inseridos atualmente no campo do input. o Length certeza para garantir que a quantidade de caracteres inseridas no input não sera vazio. Pois se for == igual a 0 quanto o valor quanto a quantidade de caracteres, retorna essa mensagem de ERRO.
    //BASICAMENTE ESTA DIZENDO QUE SE NO INPUT O VALOR OU A QUANTIDADE DE CARACTERES FOR IGUAL IGUAL A NADA, EMITA UM ALERTA DE ERRO.
    res.innerHTML = "Impossible to counting";
    window.alert("[ERROR] Missing data");
  } else {
    res.innerHTML = "Counting: <br>"; //Se os inputs não estiverem vazio a function vai continuar e vai imprimir na tela a palavra "Counting: "
    let s = Number(startInput.value);
    let e = Number(endInput.value);
    let t = Number(stepInput.value);
    // variaveis criadas para converter os valor inserido nos inputs para numeros e podemos realizar os calculos a seguir.
    if (t <= 0) {
      window.alert(` The gap ${t} is invalid, considering value 1`);
      t = 1;
    }
    if (s < e) {
      //Se o valor inserido no input start for menor que o do end execute a função "for"
      for (let c = s; c <= e; c += t) {
        // CONTAGEM CRESCENTE
        res.innerHTML += ` \u{1F449} ${c} `; // isso é o que sera escrito na tela se a função for verdadeira. Isto é, sera escrito o que esta na variavel "res", o emogi e o valor de "c".
      }
      // let c = s;
      // while (c <= e) {
      //   res.innerHTML += ` \u{1F449} ${c} `;
      //   c += t;
      // }
      // Isso significa que a variavel let recebe o valor de "s" que é o valor inserido no input. A função vai continuar acontecendo enquanto o valor de "c" for menor ou igual ao valor de "e", ex: se o valor de "e" for 10, ele vai continuar acontecendo até chegar no 10. E "c += t" é o mesmo que "c = c + t", isso significa que sera somado com o "c" o valor inserido no input Step.
    } else {
      for (let c = s; c >= e; c -= t) {
        // CONTAGEM DECRESCENTE
        res.innerHTML += ` \u{1F449} ${c} `;
      } // essa condição foi feita para possibilitar a contagem de tras pra frente
    }
    res.innerHTML += ` \u{1F3C1}`; // Imprime um emoji de bandeira no ultimo numero assim que finaliza a função.
  }
}
