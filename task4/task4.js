
let str = 'lorem ipsum lorem ipsum lorem ipsum'
let replacer = '%20'
let replacedStr = (str,replacer) =>{
    if(replacer === ' ')
        return -1
    else
        return str.replaceAll(' ', replacer);
}
console.log(replacedStr(str,replacer));

module.exports = {replacedStr}