let buttons = document.getElementById("buttons");
let output = document.getElementById("output");

let number1 = 0; // first number entered into the calculator
let number2 = 0; // second number entered
let operation = ""; // current operation being performed ("+", "-", etc)

// add a button that inputs a number into the calculator
function addNumber(number) {
    // create button, add number, and add class
    let button = document.createElement("button");
    button.textContent = number;
    button.className = "calculator-button";

    // add a click event to it
    button.addEventListener("click", () => {
        // if the output is "_", then clear it
        if (output.textContent == "_") {
            output.textContent = "";
        }

        // add number to the output
        output.textContent += number
    })

    // append it to buttons
    buttons.appendChild(button);
}

// add an operator to the calculator ("+", "-", etc)
function addOperator(symbol, callback) {
    // create button, add symbol and add class
    let button = document.createElement("button");
    button.textContent = symbol;
    button.className = "calculator-button";

    // add a click event to it to callback function
    button.addEventListener("click", callback);

    // append it to buttons
    buttons.appendChild(button);
}

// sets number1 to the current calculator output
function inputNumber1() {
    number1 = Number.parseInt(output.textContent);
    output.textContent = "_"; // change output to "_" (empty)
}

// add two numbers
function add() {
    inputNumber1();
    operation = "+";
}

// subtract two numbers
function minus() {
    inputNumber1();
    operation = "-";
}

// inputs number2 and then solves
function equals() {
    number2 = Number.parseInt(output.textContent);

    if (operation == "+") {
        output.textContent = number1 + number2;
    }

    if (operation == "-") {
        output.textContent = number1 - number2;
    }
}

// wipes the calculator
function clear() {
    number1 = 0;
    number2 = 0;
    operation = "";
    output.textContent = "_";
}

// add all of the buttons to the calculator in order
function addButtons() {
    // 1-3
    for (let i = 1; i <= 3; i++) {
        addNumber(i);
    }

    // add plus button
    addOperator("+", add);

    // 4-6
    for (let i = 4; i <= 6; i++) {
        addNumber(i);
    }

    // add minus button
    addOperator("-", minus)

    // 7-9
    for (let i = 7; i <= 9; i++) {
        addNumber(i);
    }

    // add equals button
    addOperator("=", equals)

    // 0
    addNumber(0);
    
    // add clear button
    addOperator("clr", clear);
}

addButtons();