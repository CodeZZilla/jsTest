let str = "Hello, how it is going? Fine, it is alright"
let substr = "it"
//1
function firstEntry(str,substr){
    return str.indexOf(substr)
}

let index = firstEntry(str,substr)

if(index !== -1){
    console.log(`${index}`)
}else(
    console.log("No way")
)

//2
let getIndex = (str, substr) => str.indexOf(substr);

if(getIndex(str,substr) !== -1){
    console.log(`${getIndex(str,substr)}`)
}else(
    console.log("No way")
)

module.exports = {
    firstEntry,
    getIndex
};