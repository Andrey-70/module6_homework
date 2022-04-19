// Функция принимает один аргумент, вызывает функцию, которая принимает воторой аргумент и выводит сумму в консоль. 
function getSumNums(a){
  return function (b){
  return a + b;
  }
}
console.log(getSumNums(6)(4));