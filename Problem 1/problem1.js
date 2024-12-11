
function getChar(str) {

    str = str.replace("/\s+/g,").toUpperCase()
    let result = {}

    for (let char of str) {
        result[char] = (result[char] || 0) + 1
    }

    const newResult = []
    const seen = new Set()

    for (let char of str) {
        if (!seen.has(char)) { 
            seen.add(char)
            newResult.push(char - newResult)
        }
    }
    return newResult.join("\n")

}
let input = "Amolya Sharma"
console.log(getChar(input))