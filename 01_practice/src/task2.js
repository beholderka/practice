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
module.exports.validDataPassword=validDataPassword;