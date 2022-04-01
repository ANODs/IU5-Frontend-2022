/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
 function capitalize(str) {
    let words = str.split(' ')
    for(let i = 0; i < words.length; i++) {
        let letters = []
        letters[i] = words[i].split('')
        letters[i][0] = letters[i][0].toUpperCase()
        words[i] = letters[i].join('')
    }
    return words.join(' ')
}

module.exports = capitalize;
