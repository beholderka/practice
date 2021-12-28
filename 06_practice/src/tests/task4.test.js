const {isEmpty} = require('../task4');

describe('isEmpty',function () {
    test('""',function () {
        expect(isEmpty()).toEqual(false);
    })
    test('null',function () {
        expect(isEmpty(null)).toEqual(true);
    })
    test('{}',function () {
        expect(isEmpty({})).toEqual(true);
    })
    test('{a:1}',function () {
        expect(isEmpty({a:1})).toEqual(false);
    })
    test('{a:undefined}',function () {
        expect(isEmpty({a:undefined})).toEqual(true);
    })
    test('{[Symbol("id")]:undefined}',function () {
        expect(isEmpty({[Symbol("id")]:undefined})).toEqual(true);
    })

    test('{[Symbol("id")]:1}',function () {
        expect(isEmpty({[Symbol("id")]:1})).toEqual(false);
    })
    test('{a:{b:{c:undefined}}}',function () {
        expect(isEmpty({a:{b:{c:undefined}}})).toEqual(false);
    })
})