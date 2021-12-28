const {intersectionObject} = require('../task1');
const id =Symbol("id");
describe('intersectionObject', function () {
    test('without arg', function () {
        expect(intersectionObject()).toEqual(false);
    });
    test('null null', function () {
        expect(intersectionObject(null, null)).toEqual(false);
    })
    test('undefined null', function () {
        expect(intersectionObject(undefined, null)).toEqual(false);
    })
    test('{a:2} {b:2}', function () {
        expect(intersectionObject({a: 2}, {b: 2})).toEqual({});
    });
    test('{a:2} {a:2}', function () {
        expect(intersectionObject({a: 2}, {a: 2})).toEqual({a: 2});
    });
    test('[ Symbol("id")]:1', function () {
        expect(intersectionObject({a: 2,[ id]:1}, {a: 2,[ id]:1})).toEqual({a: 2,[ id]:1});
    });
    test('[ Symbol("id")] ', function () {
        expect(intersectionObject({a: 2,[ Symbol("id")]:1}, {a: 2,[ Symbol("id")]:1})).toEqual({a: 2});
    });

    test('{a:2,b:1} {a:2}', function () {
        expect(intersectionObject({a: 2, b: 1}, {a: 2})).toEqual({a: 2});
    });

    test('{a:1,b:2,c:3} {b:3,a:2,c:1}', function () {
        expect(intersectionObject({a:1,b:2,c:3}, {b:3,a:2,c:1})).toEqual({});
    });
    test('{} {}', function () {
        expect(intersectionObject({}, {})).toEqual({});
    });
})