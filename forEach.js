// const numbers = [1, 2, 3, 4];
// const square = numbers.forEach(number => console.log(number * 2)
// );

// const names = ["A", "B", "C"];
// const greetingFriend = names.forEach(name => console.log(`hello ${name}`)
// )

// const cart = [
//     { name: "Shirt", price: 500 },
//     { name: "Pant", price: 1000 }
// ];
// let total = 0;
// cart.forEach(item => {
//     total += item.price
// })
// console.log(total);
// const students = [
//     { name: "Rahim", score: 45 },
//     { name: "Karim", score: 75 },
//     { name: "Salam", score: 60 },
//     { name: "Jannatul", score: 85 }
// ];
// const studentName = students.map(student => student.name);
// console.log(studentName);
// const mark = students.filter(student => student.score > 60);
// console.log(mark);
// const frvtStudent = students.find(student => student.score > 80);
// console.log(frvtStudent);
const products = [
    { name: "Phone", price: 15000, stock: 10 },
    { name: "Laptop", price: 55000, stock: 0 },
    { name: "Mouse", price: 500, stock: 30 },
    { name: "Keyboard", price: 1000, stock: 5 }
];
// const stockProduct = products.filter(product => product.stock);
// console.log(stockProduct);
// const productPrice = products.filter(product => product.price < 1000);
// console.log(productPrice);
// let total = 0;
// products.forEach(product => {
//     total += product.price;
// })
// console.log(total);
const employees = [
    { id: 1, name: "Rahim", dept: "IT" },
    { id: 2, name: "Karim", dept: "HR" },
    { id: 3, name: "Salam", dept: "IT" },
    { id: 4, name: "Jannatul", dept: "Finance" }
];
const itGuy = employees.filter(employee => employee.dept == "IT");
console.log(itGuy);

const id = employees.find(employee => employee.id == 3)
console.log(id);
const list = employees.map(employee => employee.name);
console.log(list);
