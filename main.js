console.log('Hello, world!')

function show(){
    return 'CONSOLE'
}

function capitalize(string){
    let capital = string.charAt(0).toUpperCase()
    return capital + string.slice(1)
}


function reverse(string){
    let reversed = string.split('').reverse()
    return reversed.join('')
}

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => parseInt(a / b)
}

console.log(10 / 3)

export {show, capitalize, reverse, calculator}