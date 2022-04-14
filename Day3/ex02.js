// Javascript дээр Celcius температураас Fahrenheit температур луу хөрвүүлдэг
// бас эсрэгээр нь боддог 2 ширхэг функц бичнэ үү.
// console.log(FtoC(35))=> 1.66667
// console.log(CtoF(35))=>95

// var celsius = 10;
// console.log(celsius + "C" + " is " + (celsius * 1.8 + 32) + "F");

// var fahrenheit = 10;
// console.log(fahrenheit + "F" + " is " + (fahrenheit - 32) / 1.8 + "C");

function CtoF(a) {
  return a * 1.8 + 32;
}
function FtoC(F) {
  return (F - 32) / 1.8;
}

console.log(FtoC(35));
console.log(CtoF(35));
