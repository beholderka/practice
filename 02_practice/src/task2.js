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

module.exports.functionTwo = functionTwo;