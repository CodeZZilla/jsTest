
const convertToBase = (num, notation) => {
    return num.toString(notation)
}

console.log(convertToBase(10, 8))


function convertWithoutToString(num,base){
    if(num && base === 0)
        return -1

    let result = ''
    if(base === 2){
        while(num > 0){
            let tmp = num % 2
            result = tmp.toString() + result
            num = Math.floor(num / 2)
        }
        return result
    }else if(base === 8){
        while(num > 0){
            let tmp = num % 8
            result = tmp.toString() + result
            num = Math.floor(num / 8)
        }
        return result
    }else if(base === 16){
        while(num > 0){
            let tmp = num % 16
            let tmpResult = tmp < 10 ? tmp.toString() : String.fromCharCode(65 + (tmp - 10))
            result = tmpResult.toString() + result
            num = Math.floor(num / 16)
        }
        return result
    }else{
        return '2 , 8 , 16 are works only'
    }
}

console.log(convertWithoutToString(100,2))
