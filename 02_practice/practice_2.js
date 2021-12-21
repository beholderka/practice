function functionTwo() {
    for (let i = 0; i <= 15; i++){ //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                return ''; //вместо break, чтоб функция не возвращала undefined
            }
            console.log(i, j);
        }
    }
}
function multipleNum(value) {
    let temp='';
if (value%3===0) {
    temp='three'
}
if (value%5===0) {
     if (temp==='') {
         temp='five'
     } else {
         temp = temp + 'Five'
     }
}
    if (temp==='') {
        return value;
    } else {
        return temp;
    }
}

function functionOne(n) {
    let result='';
    for(let i=1;i<=n;i++) {
        result=result+'\n'+multipleNum(i);
    }
    return result;
}

function functionThree(str1, str2) {
    str1 = str1.replace(/[^a-zа-яё][^0-9]/gi, '');
    str2 = str2.replace(/[^a-zа-яё][^0-9]/gi, '');
    str1=str1.toLowerCase().split("").sort().join("");
    str2=str2.toLowerCase().split("").sort().join("");
    return str1===str2;
}


console.log(functionOne(30));
console.log(functionTwo());
console.log(functionThree('wqerty','ytrewq'));
console.log(functionThree('wqertyazxs','zytarewxqs'));
console.log(functionThree('wqfdsgerty','ytrewhjq'));
console.log(functionThree('QWErty','erwTqy'));