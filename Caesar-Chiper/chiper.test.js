import chiperShift from "./chiper.js";

test('Should return chiper text with one string length and various shift value', ()=>{
    expect(chiperShift('a', 3)).toBe('d')
    expect(chiperShift('d', 3)).toBe('g')
    expect(chiperShift('z', 3)).toBe('c')
})

test('chiperShift should work on 2 or more string length', ()=>{
    expect(chiperShift('abc', 3)).toBe('def')
    expect(chiperShift('hello', 3)).toBe('khoor')
})

test('chiperShift should work with only one parameter', ()=>{
    expect(chiperShift('hello')).toBe('khoor')
})

test('chiperShift should also work with space or any symbols', ()=>{
    expect(chiperShift('godzilla is here', 3)).toBe('jrgclood lv khuh')
    expect(chiperShift('hello, world!')).toBe('khoor, zruog!')
})

test('chiperShift should work also with upper case', ()=>{
    expect(chiperShift('Hello, World! WOW')).toBe('Khoor, Zruog! ZRZ')
})
