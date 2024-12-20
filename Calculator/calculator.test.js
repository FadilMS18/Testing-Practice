import calculator from "./calculator.js";

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