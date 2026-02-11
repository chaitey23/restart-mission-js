// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter(x => x > 3);
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// console.log(result);
const students = [

    { id: 1, name: "chaitey", marks: 90 },
    { id: 2, name: "shaitey", marks: 80 },
    { id: 3, name: "khaitey", marks: 99 },
    { id: 4, name: "lhaitey", marks: 10 },
]
const names = students.map(student => student.name)
// console.log(names);
const goodStudents = students.filter(student => student.marks > 80)
console.log(goodStudents);
const goodStudent = students.find(student => student.marks > 80)
console.log(goodStudent);
