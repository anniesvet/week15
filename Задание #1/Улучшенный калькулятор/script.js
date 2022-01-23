
// function plus() {
//     let numberOne = document.getElementById('getNumber').value;
//     let numberTwo = document.getElementById('getResult').value;
//     let result = +numberOne + +numberTwo;

//     document.getElementById('showResult').value = result;
// }

// function minus() {
//     let numberOne = document.getElementById('getNumber').value;
//     let numberTwo = document.getElementById('getResult').value;
//     let result = numberOne - numberTwo;

//     document.getElementById('showResult').value = result;
// }

// function times() {
//     let numberOne = document.getElementById('getNumber').value;
//     let numberTwo = document.getElementById('getResult').value;
//     let result = numberOne * numberTwo;

//     document.getElementById('showResult').value = result;
// }

// function divide() {
//     let numberOne = document.getElementById('getNumber').value;
//     let numberTwo = document.getElementById('getResult').value;
//     let result = numberOne / numberTwo;

//     document.getElementById('showResult').value = result;
// }

let op; 

function calcResult() {

let result;

let getNumber1 = document.getElementById("getNumber1").value;
let getNumber2 = document.getElementById("getNumber2").value;

switch(op) {
    case '+':
        result = +getNumber1 + +getNumber2;
        break;
    case '-':
        result = getNumber1 - getNumber2;
        break;
    case '*':
        result = getNumber1 * getNumber2;
        break;
    case '/':
        result = getNumber1 / getNumber2;
        break;
}

document.getElementById("result").innerHTML = result;

if (isNaN(result)) {
    alert('Кажется, вы ввели не число');
    document.getElementById("result").innerHTML = 'Попробуйте ввести числа для вычисления';
}

if (result === Infinity) {
    alert('На ноль делить нельзя!');
    document.getElementById("result").innerHTML = 'Попробуйте поделить не на 0';
}

}



