// Given a number, n, return an array containing n unique 
//random numbers between 1-10, inclusive. 
//(That is, do not repeat any numbers in the returned list.)
// You can trust that this function will never be called 
//with n < 0 or n > 10.

// For example:
// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)
// Write your code below this line.
function luckyNumbers (num){
    let possiblenumbers = [1, 2, 3, 5,8,9,4, 5, 6, 7, 8, 9, 10];
    let luckyNums =[]
    for(let i = 0; i < num; i++){
        let y = Math.floor(Math.random() * possiblenumbers.length);
        luckyNums.push(possiblenumbers[y])
        possiblenumbers.splice(y,1)
    }
    return luckyNums
}
console.log(luckyNumbers(4))
console.log(luckyNumbers(6))

// let invokednum =(luckyNumbers(4))
// console.log(invokednum)

// const nums = new Set();
// while(nums.size !== 8) {
//   nums.add(Math.floor(Math.random() * 100) + 1);
// }

// console.log([...nums]);