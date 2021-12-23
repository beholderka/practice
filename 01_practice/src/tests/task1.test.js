const {isPalindrome} = require('../task1');


describe ('isPalindrome',function () {

    test('""', () => {
        expect(isPalindrome('')).toBe(true);
    });
    test('"undefind"', () => {
        expect(isPalindrome()).toBe(false);
    });
    test('"11111"', () => {
        expect(isPalindrome(11111)).toBe(true);
    });
    test('"а роза упала на лапу азора"', () => {
        expect(isPalindrome('а роза упала на лапу азора')).toBe(true);
    });
    test('"А РОЗа упала на лапу азора"', () => {
        expect(isPalindrome('А РОЗа упала на лапу азора')).toBe(true);
    });
    test('123', () => {
        expect(isPalindrome(123)).toBe(false);
    });
    test('" "', () => {
        expect(isPalindrome(' ')).toBe(true);
    });
    test('"qazedx"', () => {
        expect(isPalindrome('qazedx')).toBe(false);
    });
    test('null"', () => {
        expect(isPalindrome(null)).toBe(false);
    });
});