
function initialize()
{
    document.getElementById("body").innerHTML =
    "<header role=\"banner\">"+
    "<h1>"+
    "    <p>"+
    "        <label for=\"inputDigits\">Number of digits:</label>"+
    "        <select id=\"inputDigits\" onchange=\"displayEquation()\" style=\"padding:5px 5px; font-size:16px; border-radius: 6px;\">"+
    "            <option value=\"1\">1</option>"+
    "            <option value=\"2\">2</option>"+
    "            <option value=\"3\">3</option>"+
    "        </select>"+
    "    </p>"+
    "    <label id=\"lblFirstNum\"></label> "+operator+" " +
    "    <label id=\"lblSecondNum\"></label> = "+
    "    <input type=\"text\" id=\"inputResult\" style=\"font-size:30px; border-color: orange; padding: 10px 10px; border-radius: 6px;\" size=\"3\"><br>"+
    "    <p id=\"txtResult\">-</p>"+
    "    <p id=\"txtStats\"></p>"+
    "</h1>"+
    "<p style=\"text-align: center;\"><a href=\"../index.html\" title=\"back\">Back</a></p>"+
    "<div style=\"text-align: center\" id=\"divWrongAnswers\">"+
    "</div>"+
    "<br>"+
    "</header>";
    displayEquation();
    document.getElementById("inputResult")
    .addEventListener("keyup",
        function(event)
        {
            if(document.getElementById("inputResult").value != "")
            {
                document.getElementById("txtResult").style.backgroundColor = "white";
                document.getElementById("txtResult").innerHTML = "-";

                event.preventDefault();
                if (event.keyCode === 13)
                {
                    checkResult();
                }
            }
        }
        );
}

var numItems = 0;
var numCorrect = 0;

function displayEquation()
{
    getNewSetofNumbers();

    document.getElementById("lblFirstNum").textContent = firstNum;
    document.getElementById("lblSecondNum").textContent = secondNum;
    document.getElementById("txtStats").innerHTML = "Score: " + numCorrect + "<br>Items:" + numItems;
    document.getElementById("inputResult").value = "";
    document.getElementById("inputResult").focus();
}

function checkResult()
{
    numItems++;
    var answer = new Number(document.getElementById("inputResult").value);
    var correctAnswer =  operation();

    var divStyle;
    if (correctAnswer == answer)
    {
        document.getElementById("txtResult").style.backgroundColor = "lightgreen";
        document.getElementById("txtResult").innerHTML = "Correct!";
        numCorrect++;
        divStyle = ' style="background-color:lightgreen" ';
    }
    else
    {
        document.getElementById("txtResult").style.backgroundColor = "pink";
        document.getElementById("txtResult").innerHTML = "Incorrect!";            
        divStyle = ' style="background-color:pink" ';
    }
    var txtResult = firstNum + " " + operator + " " + secondNum + " is " + correctAnswer;
    document.getElementById("divWrongAnswers").innerHTML = "<div "+ divStyle +" id='"+numCorrect + "_of_" + numItems+"'>"
                                                                + txtResult +". Your answer is " + answer 
                                                            +".</br></div>"
                                                            + document.getElementById("divWrongAnswers").innerHTML;

    displayEquation();
}