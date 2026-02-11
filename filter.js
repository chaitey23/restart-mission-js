// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter(x => x > 3);
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// console.log(result);
// const students = [

//     { id: 1, name: "chaitey", marks: 90 },
//     { id: 2, name: "shaitey", marks: 80 },
//     { id: 3, name: "khaitey", marks: 99 },
//     { id: 4, name: "lhaitey", marks: 10 },
// ]
// const names = students.map(student => student.name)
// console.log(names);
// const goodStudents = students.filter(student => student.marks > 80)
// console.log(goodStudents);
// const goodStudent = students.find(student => student.marks > 80)
// console.log(goodStudent);
// const numbers = [5, 12, 8, 20, 3];
// const result = numbers.filter(num => num > 10);
// console.log(result);
const ages = [15, 22, 17, 30, 12];
const olderAge = ages.filter(age => age > 18);
// console.log(olderAge);
const words = ["apple", "hi", "banana", "ok"];
const fruit = words.filter(word => word.length > 3)
const numbers = [10, 25, 30, 45];
const bigNumber = numbers.find(num => num > 20);
const users = [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Salam" }
];
const userId = users.find(user => user.id == 2);
console.log(userId);
const products = [
    { name: "Phone", price: 15000 },
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 500 }
];
const price = products.find(price => price.price < 1000);
console.log(price);

