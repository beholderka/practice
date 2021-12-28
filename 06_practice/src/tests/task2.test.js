const {isEqual} = require('../task2');
const id =Symbol("id");
describe('isEqual',function () {
    test('""',function () {
        expect(isEqual()).toEqual(false);
    })
    test('null null', function () {
        expect(isEqual(null,null)).toEqual(true);
    })
    test('[],[]',function () {
        expect(isEqual([],[])).toEqual(false);
    })
    test('{},{}',function () {
        expect(isEqual({},{})).toEqual(true);
    })
    test('{a:3},{b:1}',function () {
        expect(isEqual({a:3},{b:1})).toEqual(false);
    })

    test('{b:1},{b:1}',function () {
        expect(isEqual({b:1},{b:1})).toEqual(true);
    })

    test('{b:1,c:{a:2}},{b:1,c:{a:2}}',function () {
        expect(isEqual({b:1,c:{a:2}},{b:1,c:{a:2}})).toEqual(true);
    })

    test('{b:1,c:{b:2}},{b:1,c:{a:2}}',function () {
        expect(isEqual({b:1,c:{b:2}},{b:1,c:{a:2}})).toEqual(false);
    })
    test('{b:1,c:{b:2,[id]:2}},{b:1,c:{b:2,[id]:2}}',function () {
        expect(isEqual({b:1,c:{b:2,[id]:2}},{b:1,c:{b:2,[id]:2}})).toEqual(true);
    })
    test('{b:1,c:{b:2,[Symbol(id)]:2}},{b:1,c:{b:2,[Symbol(id)]:2}}',function () {
        expect(isEqual({b:1,c:{b:2,[Symbol('id')]:2}},{b:1,c:{b:2,[Symbol('id')]:2}})).toEqual(false);
    })

    test('{b:1,c:{b:2,[id]:{a:1}}},{b:1,c:{b:2,[id]:{a:1}}}',function () {
        expect(isEqual({b:1,c:{b:2,[id]:{a:1}}},{b:1,c:{b:2,[id]:{a:1}}})).toEqual(true);
    })
    test('{b:1,c:{b:2,d:{e:3}}},{b:1,c:{b:2,d:{e:3}}}',function () {
        expect(isEqual({b:1,c:{b:2,d:{e:3}}},{b:1,c:{b:2,d:{e:3}}})).toEqual(true);
    })
})