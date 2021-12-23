function multipleNum(value) {
    if (typeof value !== 'number') {
        return false;
    }
    if (value % 3 === 0 && value % 5 === 0) {
        return 'threeFive';
    }

    else if (value % 3 === 0) {
        return 'three'
    }

    else if (value % 5 === 0) {
        return 'five'
    } else return value;
}

module.exports.multipleNum = multipleNum;

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

module.exports.functionOne = functionOne;