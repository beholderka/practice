const {decodeMorse} = require('../decodeMorse')

describe('decodeMorse',()=>{
    test('define',()=>{
        expect(decodeMorse).toBeDefined();
    })
    test('empty string',()=>{
        expect(decodeMorse('')).toBe('');
    })
    test('HEY JUDE',()=>{
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
    })
    test('HEY SOS',()=>{
        expect(decodeMorse('.... . -.--   ...---...')).toBe('HEY SOS');
    })
})