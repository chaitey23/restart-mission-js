function add(num1, num2) {
    return num1 + num2
}
const add2 = (num1, num2) => num1 * num2
console.log(add2(10, 10));

// single arrow function
const getSquare = (x) => x * x;
const getHalf = num => num / 2;
const firstElement = nums => nums[0];
console.log(getSquare(4));
console.log(getHalf(10));
console.log(firstElement([12, 99, 78]));

// multiline arrow function
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result
}
console.log(doMath(2, 4),);
