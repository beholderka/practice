
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

module.exports.functionOne = functionOne;