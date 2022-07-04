
document.getElementById("hi").innerHTML = "Hello World";

document.getElementById("sum").innerHTML = 3 + 5;


    
function greetings(){
    document.getElementById("greetings").innerHTML = "Hola "+ document.getElementById("username").value;
}

function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    return document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}
