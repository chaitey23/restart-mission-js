const persone = {
  name: 'chaitey',
  age: 20,
  country: 'BD'
}

console.log(Object.entries(persone));

for (let [key, value] of Object.entries(persone)) {
  console.log(`key : ${key}  value : ${value}`);


}




Object.seal(persone)
Object.freeze(persone)
persone.status = 'not found'
persone.country = 'USA'
console.log(persone);


console.log(Object.keys(persone));
console.log(Object.values(persone));
console.log(Object.entries(persone));



const user = {
  name: 'chaitey'
}
const zip = user?.address?.zip

// console.log(zip);




function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2]));
const cube = x => x * x * x;
console.log(cube(2))
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);
const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);