if (true) {
    const data = 90;
    console.log(data);

}
// console.log(data);
// callback function
function pakhiBhai(callMeBack, patro, patri) {
    if (patri) {
        callMeBack(patri)
    }
    else {
        console.log("tor kopale biya nai");
    }

}
function callSomeOne(person) {
    console.log("calling", person);
}
pakhiBhai(callSomeOne, "jodu", "modu")