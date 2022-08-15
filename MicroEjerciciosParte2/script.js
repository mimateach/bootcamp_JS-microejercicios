function biggerNumber(biggerNum1, biggerNum2) {
    let num1 = document.getElementById("biggerNum1").value;
    let num2 = document.getElementById("biggerNum2").value;
        if (num1 > num2) {
            return document.getElementById("biggerThan").innerHTML = parseInt(num1);
        } else if (num2 > num1){
            return document.getElementById("biggerThan").innerHTML = parseInt(num2);
        }
}

function biggerOfThree() {
    let num1 = parseInt(document.getElementById("biggerOfThree1").value);
    let num2 = parseInt(document.getElementById("biggerOfThree2").value);
    let num3 = parseInt(document.getElementById("biggerOfThree3").value);
    //const list = [num1, num3, num2];
    return document.getElementById("biggerOfThree").innerHTML = Math.max(num1, num2, num3);
    console.log(list)
}


function divisibleBy2() {
    let number = parseInt(document.getElementById("number").value);
    if (number %2 == 0) {
        return document.getElementById("resultDivisible").innerHTML= "YES";
    } else {
        return document.getElementById("resultDivisible").innerHTML= "NO";
    }
}


