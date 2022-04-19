// Функция проверяющая является ли значение числом и определяет четное оно или нет.
function defineValues() {+prompt('Введите значение');
if(typeof(value) === 'number' && !isNaN(value)) {
  value % 2 === 0 ? alert('Четное') : alert('Нечетное');
}
else {
  alert('Упс, кажется, вы ошиблись');
}
};
defineValues();
