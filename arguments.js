// function sum (a,b,c){
//   const newArg = [...arguments];
// console.log(newArg);



// }
// sum(12,20,30,40,50,60)

function add(a, b) {
  console.log(arguments);
  const params = [...arguments];
  console.log(params);

}
add(2, 3, 4, 5, 6)
