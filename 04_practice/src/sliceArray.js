/*3)Напишите функцию, которая разделяет массив на части заданного размера.
Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/

function sliceArray(arr, value) {
    let array = [];
    if (Array.isArray(arr) && typeof value === 'number') {
        for (let i = 0; i < arr.length; i = i + value) {
            array[array.length] = arr.slice(i, i + value);
        }
    }
    return array;
}

module.exports.sliceArray=sliceArray;