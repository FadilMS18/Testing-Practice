import {show, capitalize} from './capitalize'

test('Should return "CONSOLE"', ()=>{
    expect(show()).toMatch(/CONSOLE/)
})

test("Should return first character capitalize", ()=>{
    expect(capitalize('mama')).toBe('Mama')
    expect(capitalize('dada')).toBe('Dada')
    expect(capitalize('grandDad')).toBe('GrandDad')
    expect(capitalize('Already')).toBe('Already')
})
