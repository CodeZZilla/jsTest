let isPalindrome = (num) => {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        const tmp = num % 10;
        reversedNum = reversedNum * 10 + tmp;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
};


console.log(isPalindrome(121));
console.log(isPalindrome(122));
