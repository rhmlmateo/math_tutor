document.getElementById("inputResult")
.addEventListener("keyup",
    function(event)
    {
        document.getElementById("txtResult").style.backgroundColor = "white";
        document.getElementById("txtResult").innerHTML = "-";

        event.preventDefault();
        if (event.keyCode === 13)
        {
            checkResult();
        }
    }
);

var numItems = 0;
var numCorrect = 0;

function displayEquation()
{
    var digit = new Number(document.getElementById("inputDigits").value);
    document.getElementById("txtStats").innerHTML = "Score: " + numCorrect + " / " + numItems;
    document.getElementById("lblFirstNum").textContent = Math.floor(Math.random() * Math.pow(10, digit));
    document.getElementById("lblSecondNum").textContent = Math.floor(Math.random() * Math.pow(10, digit));
    document.getElementById("inputResult").value = "";
    document.getElementById("inputResult").focus();
}

function checkResult()
{
    numItems++;
    var firstNum = new Number(document.getElementById("lblFirstNum").textContent);
    var secondNum = new Number(document.getElementById("lblSecondNum").textContent);
    var answer = new Number(document.getElementById("inputResult").value);
    var correctAnswer =  firstNum + secondNum;

    if (correctAnswer == answer)
    {
        document.getElementById("txtResult").style.backgroundColor = "green";
        document.getElementById("txtResult").innerHTML = "Correct!";
        numCorrect++;
    }
    else
    {
        document.getElementById("txtResult").style.backgroundColor = "red";
        document.getElementById("txtResult").innerHTML = "Incorrect!";
    }

    document.getElementById("txtLastAnswer").innerHTML = "Your last answer: " + answer;
    document.getElementById("txtResult").innerHTML += ' ' + firstNum + " + " + secondNum + " is " + correctAnswer;

    displayEquation();
}
