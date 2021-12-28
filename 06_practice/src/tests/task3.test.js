const {removeDuplicates} = require('../task3');

describe('removeDuplicates',function () {
    test('""',function () {
        expect(removeDuplicates()).toEqual(false);
    })
    test('null',function () {
        expect(removeDuplicates(null)).toEqual(false);
    })
    test('[]',function () {
        expect(removeDuplicates([])).toEqual([]);
    })
    test('[1,2,3,3]',function () {
        expect(removeDuplicates([1,2,3,3])).toEqual([1,2,3]);
    })
    test('[1,2,3,3,1,1,1]',function () {
        expect(removeDuplicates([1,2,3,3,1,1,1])).toEqual([1,2,3]);
    })
    test('[1,2,3]',function () {
        expect(removeDuplicates([1,2,3])).toEqual([1,2,3]);
    })
})