const {functionOne, multipleNum} = require('../task1');

describe('multipleNum', function () {
    test('12', () => {
        expect(multipleNum(12)).toBe('three');
    })
    test('15', () => {
        expect(multipleNum(15)).toBe('threeFive');
    })
    test('5', () => {
        expect(multipleNum(5)).toBe('five');
    })
    test('"5"', () => {
        expect(multipleNum('5')).toBe(false);
    })
})

describe('functionOne', function () {

    test('value-7', () => {
        expect(functionOne(7)).toBe(
            '1\n' +
            '2\n' +
            'three\n' +
            '4\n' +
            'five\n' +
            'three\n' +
            '7' +
            '\n');
    });
    test('value-15', () => {
        expect(functionOne(15)).toBe(
            '1\n' +
            '2\n' +
            'three\n' +
            '4\n' +
            'five\n' +
            'three\n' +
            '7\n' +
            '8\n' +
            'three\n' +
            'five\n' +
            '11\n' +
            'three\n' +
            '13\n' +
            '14\n' +
            'threeFive\n' );
    });
    test('value- "7" return false', () => {
        expect(functionOne('7')).toBe(false);
    });


});