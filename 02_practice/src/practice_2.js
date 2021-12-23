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

    if (typeof value !== 'number') {
        return false;
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return 'threeFive';
    } else if (value % 3 === 0) {
        return 'three'
    } else if (value % 5 === 0) {
        return 'five'
    } else return value;
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

    return str1.replace(/[^a-zа-яё][^0-9]/gi, '').toLowerCase().split("").sort().join("")
        === str2.replace(/[^a-zа-яё][^0-9]/gi, '').toLowerCase().split("").sort().join("");
}


// console.log(functionOne(15));
// console.log(functionTwo());
// console.log(functionThree('wqerty', 'ytrewq'));
// console.log(functionThree('wqertyazxs', 'zytarewxqs'));
// console.log(functionThree('wqfdsgerty', 'ytrewhjq'));
// console.log(functionThree('QWErty', 'erwTqy'));