const {checkNumber} = require('../task4');

describe ('calcSum',function () {
    test('7', () => {
        expect(checkNumber(7)).toMatchObject([true, false, false]);
    });
    test('10', () => {
        expect(checkNumber(10)).toMatchObject([false, true, true]);
    });
    test('-7', () => {
        expect(checkNumber(-7)).toMatchObject([false, false, false]);
    });
    test('"7"', () => {
        expect(checkNumber("7")).toMatchObject([true, false, false]);
    });
    test('"dfdf"', () => {
        expect(checkNumber("dfdf")).toBe('Incorrect input data');
    });
    test('true', () => {
        expect(checkNumber(true)).toMatchObject([false, false, false]);
    });
    test('undefined', () => {
        expect(checkNumber(undefined)).toBe('Incorrect input data');
    });
});