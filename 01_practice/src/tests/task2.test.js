const {validDataPassword, findChar} = require('../task2');

describe ('findChar',function () {

    test('""', () => {
        expect(findChar('')).toBe(false);
    });
    test('1333', () => {
        expect(findChar(1333)).toBe(false);
    });
    test('null', () => {
        expect(findChar(null)).toBe(false);
    });
    test('"sdf3%:"', () => {
        expect(findChar('sdf3%:')).toBe(true);
    });
});

describe ('validDataPassword',function () {

    test('""', () => {
        expect(validDataPassword('')).toBe('INVALID');
    });
    test('"undefind"', () => {
        expect(validDataPassword()).toBe('Incorrect input data');
    });
    test('"Z- "', () => {
        expect(validDataPassword('Z- ')).toBe('VALID');
    });
    test('"!Z- "', () => {
        expect(validDataPassword('!Z- ')).toBe('INVALID');
    });
    test('"z- "', () => {
        expect(validDataPassword('z-')).toBe('INVALID');
    });
    test('"а- "', () => {
        expect(validDataPassword('а- ')).toBe('INVALID');
    });
    test('"Zefsd"', () => {
        expect(validDataPassword('Zefsd')).toBe('INVALID');
    });
    test('"Z-"', () => {
        expect(validDataPassword('Z-')).toBe('INVALID');
    });
    test('"A -"', () => {
        expect(validDataPassword('A -')).toBe('VALID');
    });
    test('"G !"', () => {
        expect(validDataPassword('G !')).toBe('VALID');
    });
    test('length=19', () => {
        expect(validDataPassword('G!!!!!!!!!!!!!!!!!!')).toBe('VALID');
    });
    test('length=20', () => {
        expect(validDataPassword('G!!!!!!!!!!!!!!!!!!!')).toBe('INVALID');
    });
    test('null', () => {
        expect(validDataPassword(null)).toBe('Incorrect input data');
    });
});