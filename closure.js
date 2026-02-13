function sum() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}
const result = sum()
result()
result()


function counter() {
    let count = 0;
    function innerFunction() {
        console.log("Inner the inner function,some one called me");
    }
    return innerFunction;
}
const output = counter();
console.log(output());
function counter() {
    let count = 0;
    return function () {
        count = count + 1;
        console.log("Inner the inner function", count);

    }
}
const innerFucn = counter();
innerFucn();
innerFucn()
innerFucn()
innerFucn()
innerFucn()
innerFucn()
innerFucn()
const rahimCountet = counter();
rahimCountet();
rahimCountet();
rahimCountet();
rahimCountet();
rahimCountet();
innerFucn()
