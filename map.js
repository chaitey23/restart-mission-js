


// let temp =[];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const sum = element + 1;
//     temp.push(sum)

// }
// console.log(temp);

// const newArray = numbers.map(num => num + 1);
// console.log(newArray);


// const numbers  = [1, 2, 3, 4, 5, 6, 7]

// const squareArraay  = numbers.map(number=> number * number)
// console.log(squareArraay);


// const friends = ['hero','zero','fero','kero']

// const newArray = friends.map(value=>{
//   return value

// })
// console.log(newArray);

// const numbers = [1, 3, 4, 5, 6, 7, 8, 4, 2]
// const double = [];
// for (const num of numbers) {
//     const result = num * 2;
//     double.push(result)
// }
// console.log(double);
// const doubleit = numbers.map(num => num * 2);
// const square = numbers.map(num => num * num)

// console.log(doubleit, square);
// const friends = ["chaitey", "mithi", "jhankar",
//     "babu",
//     "jui"
// ]
// const nameLength = friends.map(name => name.length)
// console.log(nameLength);
// const result = numbers.map((num, index) => {
//     console.log(num * index);
//     return index
// })
// console.log(result);
const numbers = [2, 4, 6, 8, 10];
const multipliedNumber = numbers.map(num => num * 3);
// console.log(multipliedNumber);
const names = ["rahim", "karim", "salam"];
const friendsName = names.map(name => name.toUpperCase());
// console.log(friendsName);
const prices = [100, 200, 300];
// const tax = prices.map(price => price + (price * 0.10))
// console.log(tax);
const discount = prices.map(price => price - (price * 0.10));
console.log(discount);
