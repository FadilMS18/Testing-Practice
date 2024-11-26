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
console.clear()


function chiperShift(str, shift = 3){
    let alphabet = ('abcdefghijklmnopqrstuvwxyz')
    let encrypted = ''
    for(let i = 0; i < str.length; i++){
        let current = str.charAt(i)
        let index;
        if(current == current.toUpperCase()){
            index = alphabet.indexOf(current.toLowerCase())
            if(index < 0){
                encrypted += str.charAt(i)
                continue;
            }
            encrypted += alphabet[(index + shift) % 26].toUpperCase()
            continue;
        }
        index = alphabet.indexOf(str.charAt(i))
        encrypted += alphabet[(index + shift) % 26]
    }
    return encrypted
}

// shorter version of Caesar Chiper
// function chiperShift(str, shift = 3){
//     let alphabet = ('abcdefghijklmnopqrstuvwxyz')
//     let encrypted = ''
//     for(let i = 0; i < str.length; i++){
//         let current = str[i]
//         let isUpperCase = current === current.toUpperCase()
//         let index = alphabet.indexOf(current.toLowerCase())
//         if(index < 0){
//             encrypted += str.charAt(i)
//             continue;
//         }
//         encrypted += isUpperCase 
//         ? alphabet[(index + shift) % 26].toUpperCase() 
//         : alphabet[([index + shift]) % 26]
//     }
//     return encrypted
// }

function analyzeArray(array){
    let average = 0;
    for(let i = 0; i < array.length; i++){
        average += array[i]
    }
    average = parseFloat((average / array.length).toFixed(2))
    return {
        min: array[0],
        max: array[array.length - 1 ],
        length: array.length,
        average,
    }
}
console.log(analyzeArray([1,2,3,4,5]))


export {show, capitalize, reverse, calculator, chiperShift, analyzeArray}