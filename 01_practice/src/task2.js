function findSpecialChar(passwordString) {
    return [' ', '!', ':', '-', '?', '.', ','].some((char) => String(passwordString).includes(char));
}

module.exports.findSpecialChar = findSpecialChar;

function validDataPassword(passwordString) {
    if (typeof passwordString === "string") {

        const isValidateLengthPas = passwordString.length > 2 && passwordString.length < 20;
        const firstCharPas = isValidateLengthPas && passwordString[0];
        const hasSpecialCharPas = findSpecialChar(passwordString);

        if (isValidateLengthPas && hasSpecialCharPas &&
            (firstCharPas.toUpperCase() === firstCharPas)
            && !findSpecialChar(firstCharPas) ) {

            return 'VALID';
        } else {

            return 'INVALID';
        }
    } else {

        return 'Incorrect input data';
    }
}

module.exports.validDataPassword = validDataPassword;