const {checkArraySum} = require('../checkArraySum')

describe('checkArraySum',()=>{
    test('[1, 2, 4, 4] 8',()=>{
        expect(checkArraySum([1, 2, 4, 4],8)).toEqual(true);
    })
    test('[1, 2, 4, 9] 8',()=>{
        expect(checkArraySum([1, 2, 4, 9],8)).toEqual(false);
    })
    test('["1", 2, 4, "9"] "19"',()=>{
        expect(checkArraySum(['1', 2, 4, '9'],'19')).toEqual(true);
    })
    test('[] "19"',()=>{
        expect(checkArraySum([],'19')).toEqual(false);
    })
})