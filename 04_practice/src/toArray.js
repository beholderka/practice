/*2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]*/

function toArray(arr, tempArray = []) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {

            if (typeof arr[i] == "object") {
                toArray(arr[i], tempArray);
            } else {
                tempArray.push(arr[i]);
            }

        }
    }
    return tempArray;
}

module.exports.toArray=toArray;
