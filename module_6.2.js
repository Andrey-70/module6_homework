// Функция принимает число не больше 1000 и определяет простое оно или составное.
function cheksNumber (a){
  if (a > 1000 || a === 0 || a === 1){
      return 'Данные не верны'
    }
  for (i = 2; i < a; i++){
    if (a % 2 === 0){
      return 'Число составное'
    }
    else {
      return 'Число простое'
    }
  }
};
console.log(cheksNumber(74));