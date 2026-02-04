const number = [1, 2, 3, 4, 5, 6, 7];
for (const num of number) {
    // console.log(number);

}
const employee = {
    name: "chaitey",
    designation: "developer",
    salary: 15000,
    experience: 1
}
for (const key in employee) {
    const value = employee[key];
    console.log(key, value);
}