const {functionOne} = require('../task1');


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