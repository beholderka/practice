const {sliceArray} = require('../sliceArray')

describe('sliceArray',()=>{
    test('empty',()=>{
        expect(sliceArray()).toEqual([]);
    })
    test('[1, 2, 3, 4, 5], 2',()=>{
        expect(sliceArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    })
    test('[1, 2, 3, 4, 5], 1',()=>{
        expect(sliceArray([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
    })
    test('[1, 2, 3, 4, 5], 3',()=>{
        expect(sliceArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    })
})