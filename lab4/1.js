/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */



 function getAnagramms(arr) {

    wordsArr = arr.map(word => word.split('').map(letter => letter.toLowerCase()).sort().join(''))

    let wordsSet = new Set(wordsArr)
    let answ = []

    for (const word of wordsSet) {
        let anagramms = []
        for (let i = 0; i < arr.length; i++){
            if(wordsArr[i]==word) {
                anagramms.push(arr[i])
            }
        }
        answ.push(anagramms)
    }

    return answ
}

getAnagramms(['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']);
module.exports = getAnagramms;
