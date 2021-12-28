const {myBind} = require('../task5')

const list = {
    value: 1,
    printValue() {
        return this.value;
    }
};


describe('myBind', function () {
    test('""', function () {
        expect(myBind()).toEqual(false);
    })
    test('null', function () {
        expect(myBind()).toEqual(false);
    })
    test('this', function () {
        expect(myBind(list.printValue, list)()).toEqual(1);
    })
    test('undefined', function () {
        expect(myBind(list.printValue)()).toEqual(undefined);
    })
    test('11', function () {
        expect(myBind(list.printValue,11)()).toEqual(undefined);
    })
})