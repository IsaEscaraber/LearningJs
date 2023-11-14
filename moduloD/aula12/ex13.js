var now = new Date();
var dayWeek = now.getDay();

// dayWeek = 0; (Usado para forçar o dia desejado)

// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
// console.log(dayWeek);
// if (dayWeek == 0)
switch (
  dayWeek // bom para valores inteiros não intervalos
) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("[Error] Invalid day");
}
