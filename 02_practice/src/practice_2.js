function functionTwo() {
    let result = '';
    for (let i = 0; i <= 15; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            result = result + `${i}, ${j}\n`;
        }
    }
    return result;
}


function multipleNum(value) {
    let temp = '';
    if (value % 3 === 0) {
        temp = 'three'
    }
    if (value % 5 === 0) {
        if (temp === '') {
            temp = 'five'
        } else {
            temp = temp + 'Five'
        }
    }
    if (temp === '') {
        return value;
    } else {
        return temp;
    }
}

function functionOne(n) {
    if (typeof n !== 'number') {
        return false;
    }
    let result = '';
    for (let i = 1; i <= n; i++) {
        result = result + multipleNum(i) + '\n';
    }
    return result;
}


function functionThree(str1, str2) {
    if (typeof str1 !== 'string' && typeof str2 !== 'string')
        return false;
    str1 = str1.replace(/[^a-zа-яё][^0-9]/gi, '');
    str2 = str2.replace(/[^a-zа-яё][^0-9]/gi, '');
    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");
    return str1 === str2;
}

// console.log(functionOne(15));
// console.log(functionTwo());
// console.log(functionThree('wqerty', 'ytrewq'));
// console.log(functionThree('wqertyazxs', 'zytarewxqs'));
// console.log(functionThree('wqfdsgerty', 'ytrewhjq'));
// console.log(functionThree('QWErty', 'erwTqy'));