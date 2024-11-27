import analyzeArray from "./analyze.js";

test('analyze array function should be returning an object', ()=>{
    expect(typeof(analyzeArray([1,2,3]))).toBe('object')
})

test('function should be returning property with min & max value', ()=>{
    expect(analyzeArray([1,2,3])).toHaveProperty('min')
    expect(analyzeArray([1,2,3])).toHaveProperty('max')
})

function averageCheck(array){
    let average = 0
    for(let i = 0; i < array.length; i++){
        average += array[i]
    }
    average = parseFloat((average / array.length).toFixed(2))
    return average
}

test('function will return the average number and min max also the length of an array', ()=>{
    expect(analyzeArray([1,2,3,4,5])).toMatchObject({min:1, max:5, length: 5})
    expect(analyzeArray([1,2,3,4,5])).toMatchObject({average: averageCheck([1,2,3,4,5])})
})

// TODO make a tweak in the function that unsorted array will also work  
test('function will work with unsorted array too', ()=>{
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({min:1, max:8, length:6, average:4})
    expect(analyzeArray([20, 1, 30, 5, 8])).toMatchObject({min: 1, max:30, length: 5})
    expect(analyzeArray([20, 1, 30, 5, 8])).toMatchObject({average: averageCheck([20, 1, 30, 5, 8])})
})