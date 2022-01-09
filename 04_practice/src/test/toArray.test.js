const {toArray}=require('../toArray');

describe('toArray',()=>{
    test('empty',()=>{
        expect(toArray()).toEqual([]);
    })
    test('[1, 2, [3, 4, [5]]]',()=>{
        expect(toArray([1, 2, [3, 4, [5]]])).toEqual([1,2,3,4,5]);
    })
    test('[1, 2, [3, 4, [{a:5}]]]',()=>{
        expect(toArray([1, 2, [3, 4, [{a:5}]]])).toEqual([1,2,3,4]);
    })
})