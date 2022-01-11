const {Validator} = require('../js/task2')

describe('class Validator isEmail',()=>{
    const validator = new Validator();
    test('123',()=>{
        expect(validator.isEmail(123)).toEqual(false);
    })
    test('""',()=>{
        expect(validator.isEmail('')).toEqual(false);
    })
    test('"hello"',()=>{
        expect(validator.isEmail('hello')).toEqual(false);
    })
    test('aaa@aaa.aa',()=>{
        expect(validator.isEmail('aaa@aaa.aa')).toEqual(true);
    })
    test('aaa@aaa.aa.ua',()=>{
        expect(validator.isEmail('aaa@aaa.aa.ua')).toEqual(true);
    })
})

describe('class Validator isDomain',()=>{
    const validator = new Validator();
    test('123',()=>{
        expect(validator.isDomain(123)).toEqual(false);
    })
    test('""',()=>{
        expect(validator.isDomain('')).toEqual(false);
    })
    test('"hello"',()=>{
        expect(validator.isDomain('hello')).toEqual(false);
    })
    test('aaa.aa',()=>{
        expect(validator.isDomain('aaa.aa')).toEqual(true);
    })
})

describe('class Validator isDate',()=>{
    const validator = new Validator();
    test('123',()=>{
        expect(validator.isDate(123)).toEqual(false);
    })
    test('""',()=>{
        expect(validator.isDate('')).toEqual(false);
    })
    test('"hello"',()=>{
        expect(validator.isDate('hello')).toEqual(false);
    })
    test('11.10.2021',()=>{
        expect(validator.isDate('11.10.2021')).toEqual(true);
    })
    test('41.10.2021',()=>{
        expect(validator.isDate('41.10.2021')).toEqual(false);
    })
    test('11.10',()=>{
        expect(validator.isDate('11.10')).toEqual(false);
    })
})

describe('class Validator isPhone',()=>{
    const validator = new Validator();
    test('123',()=>{
        expect(validator.isPhone(123)).toEqual(false);
    })
    test('""',()=>{
        expect(validator.isPhone('')).toEqual(false);
    })
    test('"hello"',()=>{
        expect(validator.isPhone('hello')).toEqual(false);
    })
    test('0951133222',()=>{
        expect(validator.isPhone('0951133222')).toEqual(true);
    })
    test('0111133222',()=>{
        expect(validator.isPhone('0111133222')).toEqual(false);
    })
    test('0 (95) 113 32 22',()=>{
        expect(validator.isPhone('0 (95) 113 32 22')).toEqual(true);
    })
})
