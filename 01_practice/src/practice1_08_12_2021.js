//1) Написать функцию, которая проверяет является ли строка
// палиндромом;
// function isPalindrome(str) {

function isPalindrome(str) {
    const strWithoutSpace = (String(str).split(' ').join('')).toLowerCase();
    const reversed = (strWithoutSpace.split("").reverse()).join('');
    return strWithoutSpace === reversed;

}

console.log(isPalindrome('а роза упала на лапу азора'))
console.log(isPalindrome('А РОЗа упала на лапу азора'))

// /2) Написать функцию, которая принимает аргумент и валидирует его
// по правилам:
// - Строка должна содержать буквы и специальные символы
// включая пробел: [ , ! , : , - , ? , . , , ]
// - Длина строки должна быть больше 2 символов и меньше 20
// - Начинаться строка должна с заглавной буквы
// Функция должна вернуть “VALID” или “INVALID”, в случае если в
// аргумент передана не строка вывести ‘Incorrect input data’
// Без использования регулярных выражений

function validDataPassword(str) {
    if (!(typeof str === "string" || str instanceof String))
        return 'Incorrect input data';
    const specialSymbols = [' ', '!', ':', '-', '?', '.', ','];
    const strLength = str.length;

    if (!(strLength > 2 && strLength < 20)) {
        return 'INVALID';
    }

    if (!(str.codePointAt(0) >= 65 && str.codePointAt(0) <= 90)) {
        return 'INVALID';
    }

    for (let i = 0; i < specialSymbols.length; i++) {
        if (str.indexOf(specialSymbols[i]) !== -1)
            return 'VALID'
    }
    return 'INVALID';
}

console.log(validDataPassword('Z-'));
// console.log(validDataPassword('-в, !:-?.'));
// console.log(validDataPassword('Z-'));

//3) Создайте функцию, которая принимает два аргумента: число,
// представленное в виде строки, и число. Если аргумент типа number
// делится на 3, 5 и 15 без остатка - умножьте его на -1. Функция должна
// возвращать числовую сумму двух аргументов.

function calcSum(strNumA, numB) {

    if (Number.isNaN(Number(strNumA)) || typeof strNumA !== 'string') {
        return 'Incorrect input data';
    }

    if (numB % 3 === 0
        && numB % 5 === 0
        && numB % 15 === 0) {
        numB = numB * -1;
    }

    return +strNumA + numB;
}

//4) Создайте функцию, которая проверяет число на соответствие трем
// различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива.
// Число всегда будет целым, положительным или отрицательным.
// Обратите внимание, что отрицательные числа не могут быть простыми
// числами, но могут быть кратными 10.
// checkNumber(7) // ==> [true, false, false]
// checkNumber(-10) // ==> [false, true, true]
//

function checkNumber(value) {

    if (Number.isNaN(Number(value))) {
        return 'Incorrect input data';
    }

    let checkNumberStatus = [true, false, false];

    if (value > 1) {
        for (let i = 2; i < value; i++)

            if (value % i === 0) checkNumberStatus[0] = false;

    } else {
        checkNumberStatus[0] = false;
    }

    if (value % 2 === 0) {
        checkNumberStatus[1] = true;
    }

    if (value % 10 === 0) {
        checkNumberStatus[2] = true;
    }

    return checkNumberStatus;
}

