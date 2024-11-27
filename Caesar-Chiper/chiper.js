export default function chiperShift(str, shift = 3){
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