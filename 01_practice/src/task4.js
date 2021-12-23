function checkNumber(value) {

    if (Number.isNaN(Number(value))) {
        return 'Incorrect input data';
    }
    let checkNumberStatus = [true, false, false];

    if (value > 1) {
        for (let i = 2; i < value; i++)
            if (value % i === 0) {
                checkNumberStatus[0] = false;
            }
    } else {
        checkNumberStatus[0] = false;
    }

    checkNumberStatus[1] = value % 2 === 0;
    checkNumberStatus[2] = value % 10 === 0;

    return checkNumberStatus;
}

module.exports.checkNumber = checkNumber;