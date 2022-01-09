//1)Cоздать функцию, которая возвращает true или false, в зависимости от того, может ли сумма любых двух чисел из массива быть равной заданному значению.
//
// Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?
//
// Пример А
//
// Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, потому что никакие два числа из массива не могут дать 8 в сумме.
//
// Пример Б
//
// Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.

function checkArraySum(arr, valueSum) {
    if (Array.isArray(arr) && typeof valueSum === "undefined") {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {

                if (arr[i] + arr[j] === valueSum) {

                    return true;
                }
            }
        }
    }
    return false;
}

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

console.log(toArray([1, 2, [11, 321, 412, [44, [432, 432]]], [3, 4, [5]]]))

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


/*4) Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны,
false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
*/
function isEqualObject(object1, object2, propsArray) {
    let isEqual = true;
    if (propsArray.length > 0) {
        isEqual = true;

        for (let item in propsArray) {

            if (typeof object1[propsArray[item]] === 'object' && typeof object2[propsArray[item]] === 'object') {
                isEqual = isEqual && true;
            } else {
                isEqual = isEqual && object1[propsArray[item]] === object2[propsArray[item]];
            }
        }

    }
    return isEqual;
}

function checkEqualObject(object1, object2) {
    if (!(typeof object1 === 'object' && typeof object2 === 'object')) {
        return false;
    } else if ((object1 === null) && (object2 === null)
        || ((JSON.stringify(object1) === '{}') && (JSON.stringify(object2) === '{}'))) {
        return true;
    }

    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    const propsSymbol1 = Object.getOwnPropertySymbols(object1);
    const propsSymbol2 = Object.getOwnPropertySymbols(object2);

    const commonProps = props1.filter(el => props2.indexOf(el) > -1);
    const commonPropsSymbol = propsSymbol1.filter(el => propsSymbol2.indexOf(el) > -1);

    if (props2.length > commonProps.length || props1.length > commonProps.length)
        return false;

    if (propsSymbol2.length > commonPropsSymbol.length || propsSymbol1.length > commonPropsSymbol.length)
        return false;


    return isEqualObject(object1, object2, commonProps) && isEqualObject(object1, object2, commonPropsSymbol);

}
