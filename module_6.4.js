// Функция, принимающая два аргумента и выводит числа в консоль, с задеркой в одну секунду от "a" до "b".
function enumeration(a, b){
  let current = a;
  let timerId = setInterval (function() {
      console.log(current);
      if (current === b) {
          clearInterval (timerId);
      }
      current++;
  }, 1000);
};

enumeration(5, 15);