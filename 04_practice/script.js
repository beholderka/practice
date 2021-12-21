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

function checkArraySum(arr,valueSum) {
    for (let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i]+arr[j]===valueSum) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkArraySum([1, 2, 4, 4],8))
console.log(checkArraySum([1, 2, 4, 4],9))

// 2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
function toArray(arr,tempArray = []) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] =="object") {
            toArray(arr[i],tempArray);
        }
        else {
            tempArray[tempArray.length]=arr[i];
        }
    }
    return tempArray;
}

console.log(toArray([1, 2,[11,321,412,[44,[432,432]]], [3, 4, [5]]]))
//
// 3)Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function sliceArray(arr, value) {
    let array = [];
    for (let i=0;i<arr.length;i=i+value) {
        array[array.length]=arr.slice(i,i+value);
    }
return array;
}
console.log(sliceArray([1, 2, 4, 4,4,4,6,8,2,5,1,2,4,5],3))
// 4) Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

function checkObject(object1,object2) {
return JSON.stringify(object1) === JSON.stringify(object2)
}
function checkObject2(object1,object2) {
    let isRavno = true;
    const keyObject1 = Object.keys(object1);
    const keyObject2 = Object.keys(object2);
    if (keyObject1.length === keyObject2.length) {
        for (let i = 0; i < keyObject1.length; i++) {
            for (let j = 0; j < keyObject2.length; j++) {
                if (keyObject1[i] === keyObject2[i]) {
                    if (object1[keyObject1[i]] === object2[keyObject2[i]]) {
                        isRavno = isRavno && true;
                    } else {
                        return false;
                    }
                }
            }
        }
    } else {
        return false;
    }
    return isRavno;
}

console.log(checkObject2({ a: 1, b: 1 }, { b: 1, a: 1 }))
console.log(checkObject2({ a: 1, b: 1 }, { a: 1, b: 3 }))
console.log(checkObject2({ a: 1, b: 1 }, { a: 1, b:1, c: 3 }))