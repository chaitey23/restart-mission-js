// const friend = ['sokina','jorina','hena'];
// console.log(...friend);
// const newArray = ['hero alam',...friend];
// console.log(newArray);


// const number = [41,55,78,3652,8852];
// console.log(Math.max(...number));
const number = [23, 45, 111, 90]
console.log(number);
console.log(...number);
const max = Math.max(...number)
console.log(max);
const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [...first, 9, 8, 7]
second.push(6);
console.log(second);
console.log(third);
const person = {
    name: "chaitey",
    age: 20
}
const employee = {
    designation: "dev", ...person
};
console.log(employee);
