let buttons = document.getElementById("buttons");
let output = document.getElementById("output");

for (let i = 1; i < 10; i++) {
    // create button, add number and add class
    let button = document.createElement("button");
    button.textContent = i;
    button.className = "calculator-button";
    
    // add an event listener to it
    button.addEventListener("click", () => {
        output.textContent = button.textContent + output.textContent
    })

    // append it to buttons
    buttons.appendChild(button);
}