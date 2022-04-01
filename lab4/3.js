/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

 function rle(str) {
    arr = str.split('');
    let counter = 1;
    let answer = [];
    for(let i = 0; i<arr.length; i++){
       if(arr[i]==arr[i+1])
           counter++
       else{
           answer.push(arr[i]+''+ (counter > 1 ? counter : '')); counter = 1
       }
    }
    return answer.join('');
}

module.exports = rle;
