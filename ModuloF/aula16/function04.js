/*5! = 5 x 4 x 3 x 2 x 1
 5! = 120
 this is factorial*/

function factorial(n) {
  let fact = 1;
  for (let c = n; c > 1; c--) {
    //meu contador ira iniciar em um numero e enquanto esse numero for menor que 1 perderá 1.
    fact *= c;
  }
  return fact;
}
console.log(factorial(5));
