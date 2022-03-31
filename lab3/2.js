/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

 function getMinMax(str) {
    let max = -Infinity;
    let min = Infinity;
    let number = '';
    let tmp = 0;
    for(let i = 0; i < str.length; i++) {
        if (+str[i] || str[i] == '0' || str[i] == '.' || str[i] == '-') {
            number += str[i];
        }
        else {
            tmp = +number;
            if (min > tmp) {
                min = tmp;
            }
            if (max < tmp) {
                max = tmp;
            }
            number = '';
        }
    }
    return {min: min, max: max};
}


module.exports = getMinMax;
