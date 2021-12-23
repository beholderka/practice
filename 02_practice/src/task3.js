function functionThree(str1, str2) {

    if (typeof str1 !== 'string' && typeof str2 !== 'string')
        return false;

    return str1.replace(/[^a-zа-яё][^0-9]/gi, '').toLowerCase().split("").sort().join("")
        === str2.replace(/[^a-zа-яё][^0-9]/gi, '').toLowerCase().split("").sort().join("");
}


module.exports.functionThree = functionThree;