let matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9 ,13]
]

function isIncludes(matrix,targetValue){
    let rows = matrix.length
    let cols = matrix[0].length
    let found = false

    for (let row = 0; row < rows; row++) {
        for (let col = cols - 1; col >= 0; col--) {
            if(matrix[row][col] === targetValue){
                found = true
                break
            }else if(matrix[row][col] > targetValue){
                continue
            }else{
                break
            }
        }
        if(found){
            break
        }
    }

    return found
}

console.log(isIncludes(matrix,90))