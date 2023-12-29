function createFibonacci1(n){
    let array = [0,1]

    for (let i = 2; i < 10; i++) {
        array[i] = array[i-1] + array[i-2]
    }

    return array[n]
}

function createFibonacci2(n){
    if(n <= 1){
        return 1;
    }else{
        return createFibonacci2(n - 1) + createFibonacci2( n - 2)
    }
}
console.log(createFibonacci1(5))
console.log(createFibonacci2(3))

