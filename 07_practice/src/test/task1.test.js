const {MyString} = require('../js/task1')

describe('class MyString reverse',()=>{
    const myString = new MyString();
    test('123',()=>{
        expect(myString.reverse(123)).toEqual('321');
    })
    test('""',()=>{
        expect(myString.reverse('')).toEqual('');
    })
    test('"hello"',()=>{
        expect(myString.reverse('hello')).toEqual('olleh');
    })
})

describe('class MyString ucFirst',()=>{
    const myString = new MyString();
    test('123',()=>{
        expect(myString.ucFirst(123)).toEqual('123');
    })
    test('""',()=>{
        expect(myString.ucFirst('')).toEqual('');
    })
    test('"hello"',()=>{
        expect(myString.ucFirst('hello')).toEqual('Hello');
    })
})

describe('class MyString ucWords',()=>{
    const myString = new MyString();
    test('hi hello hi',()=>{
        expect(myString.ucWords('hi hello hi')).toEqual('Hi Hello Hi');
    })
    test('""',()=>{
        expect(myString.ucWords('')).toEqual('');
    })
    test('"hello"',()=>{
        expect(myString.ucWords('hello')).toEqual('Hello');
    })
})
