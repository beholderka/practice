const {checkEqualObject} = require('../checkEqualObject')

const id =Symbol("id");
describe('checkEqualObject',()=>{
    test('true',()=>{
        expect(checkEqualObject({ a: 1, b: 1 }, { a: 1, b: 1 })).toBe(true);
    })
    test('""',function () {
        expect(checkEqualObject()).toEqual(false);
    })
    test('null null', function () {
        expect(checkEqualObject(null,null)).toEqual(true);
    })
    test('{},{}',function () {
        expect(checkEqualObject({},{})).toEqual(true);
    })

    test('[]',function () {
        expect(checkEqualObject([],[])).toEqual(true);
    })
    test('[1,2,3]',function () {
        expect(checkEqualObject([1,2,3],[1,2,3])).toEqual(true);
    })
    test('{a:3},{b:1}',function () {
        expect(checkEqualObject({a:3},{b:1})).toEqual(false);
    })

    test('{b:1},{b:1}',function () {
        expect(checkEqualObject({b:1},{b:1})).toEqual(true);
    })

    test('{b:1,c:{a:2}},{b:1,c:{a:2}}',function () {
        expect(checkEqualObject({b:1,c:{a:2}},{b:1,c:{a:2}})).toEqual(true);
    })

    test('{b:1,c:{b:2}},{c:{b:2}}',function () {
        expect(checkEqualObject({b:1,c:{a:2}},{c:{a:2}})).toEqual(false);
    })

    test('{b:1,c:[1,2,3]},{b:1,c:[1,2,3]}',function () {
        expect(checkEqualObject({b:1,c:[1,2,3]},{b:1,c:[1,2,3]})).toEqual(true);
    })

    test('{b:1,c:[1,2,{d:1}]},{b:1,c:[1,2,{d:1}]}',function () {
        expect(checkEqualObject({b:1,c:[1,2,{d:1}]},{b:1,c:[1,2,{d:1}]})).toEqual(true);
    })
    test('{b:1,c:{b:2,[id]:2}},{b:1,c:{b:2,[id]:2}}',function () {
        expect(checkEqualObject({b:1,c:{b:2,[id]:2}},{b:1,c:{b:2,[id]:2}})).toEqual(true);
    })
    test('{b:1,c:{b:2,[Symbol(id)]:2}},{b:1,c:{b:2,[Symbol(id)]:2}}',function () {
        expect(checkEqualObject({b:1,c:{b:2,[Symbol('id')]:2}},{b:1,c:{b:2,[Symbol('id')]:2}})).toEqual(true);
    })

    test('{b:1,c:{b:2,[id]:{a:1}}},{b:1,c:{b:2,[id]:{a:1}}}',function () {
        expect(checkEqualObject({b:1,c:{b:2,[id]:{a:1}}},{b:1,c:{b:2,[id]:{a:1}}})).toEqual(true);
    })
    test('{b:1,c:{b:2,d:{e:3}}},{b:1,c:{b:2,d:{e:3}}}',function () {
        expect(checkEqualObject({b:1,c:{b:2,d:{e:3}}},{b:1,c:{b:2,d:{e:3}}})).toEqual(true);
    })
})