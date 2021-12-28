/*Напишите функцию, которая убирает повторяющиеся значения в массиве.
Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
*/

function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    array.sort((a, b) => a > b);
    return array.filter(function (item, index) {
        return array.indexOf(item) === index;
    });
}

module.exports.removeDuplicates = removeDuplicates;