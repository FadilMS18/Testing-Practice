import {show, capitalize, reverse, calculator, chiperShift} from './main.js'

test('Should return "CONSOLE"', ()=>{
    expect(show()).toMatch(/CONSOLE/)
})

test("Should return first character capitalize", ()=>{
    expect(capitalize('mama')).toBe('Mama')
    expect(capitalize('dada')).toBe('Dada')
    expect(capitalize('grandDad')).toBe('GrandDad')
    expect(capitalize('Already')).toBe('Already')
})

test("Should return reversed string", ()=>{
    expect(reverse('not reverse')).toBe('esrever ton')
    expect(reverse('Naruto')).toBe('oturaN')
    expect(reverse('Godzilla')).toBe('allizdoG')
})

test('Should return positive number, add function', ()=>{
    expect(calculator.add(2, 3)).toBe(5)
})
test('Should works on negative number, add function', ()=>{
    expect(calculator.add(-1, -2)).toBe(-3)
})

test('Should act as a subtract calculator with positive number', ()=>{
    expect(calculator.sub(5, 6)).toBe(-1)
})
test('Should act as a subtract calculator with negative number', ()=>{
    expect(calculator.sub(25, -5)).toBe(30)
})

test('Should return the two parameter multiply', ()=>{
    expect(calculator.multiply(5, 5)).toBe(25)
})
test('Should return negative numbers if one of the parameter have negative number', ()=>{
    expect(calculator.multiply(-10, 5)).toBe(-50)
})

test('Should divide the two arguments', ()=>{
    expect(calculator.divide(25, 5)).toBe(5)
    expect(calculator.divide(18, 9)).toBe(2)
})

test('The divided number should be get rid of the float numbers', ()=>{
    expect(calculator.divide(10, 3)).toBe(3)
})

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
