const {functionThree} = require('../task3');


describe('functionThree', function () {
    test('undefind,undefind', () => {
        expect(functionThree()).toBe(false);
    });
    test('"",""', () => {
        expect(functionThree('','')).toBe(true);
    });
    test('"wqerty","ytrewq"', () => {
        expect(functionThree('wqerty','ytrewq')).toBe(true);
    });
    test('"wqerty","ytRewq"', () => {
        expect(functionThree('wqerty','ytRewq')).toBe(true);
    });
    test('"wqerty5","yt5Rewq"', () => {
        expect(functionThree('wqerty','ytRewq')).toBe(true);
    });
    test('"dsffds","jfnsgd"', () => {
        expect(functionThree('dsffds','jfnsgd')).toBe(false);
    });
    test('null,null', () => {
        expect(functionThree(null,null)).toBe(false);
    });
    test('23,32', () => {
        expect(functionThree(23,32)).toBe(false);
    });

});