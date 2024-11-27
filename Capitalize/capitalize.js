function show(){
    return 'CONSOLE'
}

function capitalize(string){
    let capital = string.charAt(0).toUpperCase()
    return capital + string.slice(1)
}

export {show, capitalize}