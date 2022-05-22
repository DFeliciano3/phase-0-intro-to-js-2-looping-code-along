// Code your solutions in this file
const newArray = [];


function writeCards(names, event) {
    for (let a = 0; a < names.length; a++) {
    newArray.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    // debugger;
    }

  return newArray;
}

writeCards ();

function countDown(int) {
    let a=10;
    while (a >= 0) {
        console.log(a);
        a--
    }
    return int;
}