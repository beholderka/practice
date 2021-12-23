function findChar(str) {
    return [' ', '!', ':', '-', '?', '.', ','].some((char) => String(str).includes(char));
}

module.exports.findChar = findChar;
function validDataPassword(str) {

    if (typeof str === "string") {

        if (findChar(str) && (str[0].toUpperCase() === str[0])
            && (str.length > 2 && str.length < 20) && !findChar(str[0])) {
            return 'VALID';
        } else {
            return 'INVALID';
        }

    } else {
        return 'Incorrect input data';
    }
}

module.exports.validDataPassword = validDataPassword;