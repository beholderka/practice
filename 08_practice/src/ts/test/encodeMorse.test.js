const {encodeMorse} = require('../encodeMorse')

describe('encodeMorse',()=>{
    test('define',()=>{
        expect(encodeMorse).toBeDefined();
    })
    test('empty string',()=>{
        expect(encodeMorse('')).toBe('');
    })
    test('HEY JUDE',()=>{
        expect(encodeMorse('HEY JUDE')).toBe('.... . -.--   .--- ..- -.. .');
    })
    test('SOS',()=>{
        expect(encodeMorse('SOS')).toBe('...---...');
    })
    test('HEY SOS',()=>{
        expect(encodeMorse('HEY SOS')).toBe('.... . -.--   ...---...');
    })
})