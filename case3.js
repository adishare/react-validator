// Please make a function to check a character that is paired with each other, and if you find
// a character that is not paired then it is errors.
// For example “(())” are valid, “(()(“ are not valid. you can create variable as array or
// strings, it is flexible.

function checkAllPaired(string) {
    let characters = string.split('')
    let notPairedChar = new Set()

    characters.forEach(char => notPairedChar.delete(char) || notPairedChar.add(char) )

    return notPairedChar.values().next().value === undefined
}

// -------------------------------------------------------

console.log(checkAllPaired('(())')) // true
console.log(checkAllPaired('(()(')) // false
console.log(checkAllPaired('$$&&@@&^&^')) // true
console.log(checkAllPaired('AaaA')) // ture
console.log(checkAllPaired('CGC')) // false