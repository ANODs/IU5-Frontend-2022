/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let answer = []

    let unpack = (array) => {
        if (typeof(array) == typeof([])) {
            for (const element of array) {
                unpack(element)
            }
        }
        else answer.push(array)
    }

    unpack(arr)

    return answer
}

module.exports = get1DArray;
