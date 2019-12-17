const calcHistory = document.getElementById("history");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");


function add() {
    let num1AsInt = Number.parseInt(num1.value);
    let num2AsInt = Number.parseInt(num2.value);
    let result = num1AsInt + num2AsInt;
    const newHist = document.createElement("p");
    newHist.innerText = num1AsInt + " + " + num2AsInt + " = " + result;

    newHist.addEventListener('click', ()=> document.getElementById("num1").value = num1AsInt);
    newHist.addEventListener('click', ()=> document.getElementById("num2").value = num2AsInt);
    newHist.addEventListener('mousemove', ()=> alert("STOP MOVING"));

    calcHistory.appendChild(newHist);
    return result;
}

function subtract() {
    const num1AsInt = Number.parseInt(num1.value);
    const num2AsInt = Number.parseInt(num2.value);
    let result = num1AsInt - num2AsInt;
    const newHist = document.createElement("p");
    newHist.innerText = num1AsInt + " - " + num2AsInt + " = " + result;

    newHist.addEventListener('click', ()=> document.getElementById("num1").value = num1AsInt);
    newHist.addEventListener('click', ()=> document.getElementById("num2").value = num2AsInt);
    
    calcHistory.appendChild(newHist);
    return result;
}

function multiply() {
    let num1AsInt = Number.parseInt(num1.value);
    let num2AsInt = Number.parseInt(num2.value);
    let result = num1AsInt * num2AsInt;
    const newHist = document.createElement("p");
    newHist.innerText = num1AsInt + " x " + num2AsInt + " = " + result;

    newHist.addEventListener('click', ()=> document.getElementById("num1").value = num1AsInt);
    newHist.addEventListener('click', ()=> document.getElementById("num2").value = num2AsInt);

    calcHistory.appendChild(newHist);
    return result;
}

function divide() {
    let num1AsInt = Number.parseInt(num1.value);
    let num2AsInt = Number.parseInt(num2.value);
    let result = num1AsInt / num2AsInt;
    const newHist = document.createElement("p");
    newHist.innerText = num1AsInt + " / " + num2AsInt + " = " + result;

    newHist.addEventListener('click', ()=> document.getElementById("num1").value = num1AsInt);
    newHist.addEventListener('click', ()=> document.getElementById("num2").value = num2AsInt);

    calcHistory.appendChild(newHist);
    return result;
}

function clearIt() {

    calcHistory.innerText = "";
}