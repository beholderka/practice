
function calcSum(strNumA, numB) {
    if (Number.isNaN( Number(strNumA)) || typeof strNumA !== 'string') {
        return 'Incorrect input data';
    }
    if (numB % 3 === 0
        && numB % 5 === 0
        && numB % 15 === 0) {
        numB = numB * -1;
    }
    return +strNumA + numB;
}

// console.log(calcSum('12', 15))

module.exports.calcSum=calcSum;