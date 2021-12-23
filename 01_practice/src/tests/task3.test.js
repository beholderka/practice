const {calcSum} = require('../task3');

describe ('calcSum',function () {
    test('"11"+2', () => {
        expect(calcSum('11',2)).toBe(13);
    });
    test('""+2', () => {
        expect(calcSum('',2)).toBe(2);
    });
    test('"czx"+2', () => {
        expect(calcSum('czx',2)).toBe('Incorrect input data');
    });
    test('"11"+3', () => {
        expect(calcSum('11',3)).toBe(14);
    });
    test('"11"+5', () => {
        expect(calcSum('11',5)).toBe(16);
    });
    test('"11"+15', () => {
        expect(calcSum('11',15)).toBe(-4);
    });
    test('true+15', () => {
        expect(calcSum(true,15)).toBe('Incorrect input data');
    });
    test('undefined+15', () => {
        expect(calcSum(undefined,15)).toBe('Incorrect input data');
    });
    test('null+15', () => {
        expect(calcSum(null,15)).toBe('Incorrect input data');
    });
    test('"1"+"15"', () => {
        expect(calcSum(1,"15")).toBe('Incorrect input data');
    });
});