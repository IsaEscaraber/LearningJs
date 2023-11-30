/*5! = 5 x 4 x 3 x 2 x 1
 5! = 120
 this is factorial*/

function factorial(n) {
  let fact = 1;
  for (let c = n; c > 1; c--) {
    //meu contador ira iniciar em um numero e enquanto esse numero for maior que 1, perderá 1. (5 4 3 2 1)
    fact *= c;
    //fact = fact * 5
    //fact = 1 * 5
    //fact = 5
    //fact = 1 * 5    5
    //fact = 5 * 4    20
    //fact = 20 * 3   60
    //fact = 60 * 2   120
    //fact = 120 * 1  120
  }
  return fact;
}
console.log(factorial(5));
