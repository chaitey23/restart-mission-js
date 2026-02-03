const employee = {
    name: "chaitey",
    designation: "developer",
    salary: 15000,
    experience: 1
}
Object.seal(employee)
employee.salary = employee.salary + 5000
delete employee.experience
console.log(employee);
