//select number buttons
var numberBtn = document.querySelectorAll("#numbers > .num");
//select operation buttons
var equalsBtn = document.querySelector("#equals");
//select calculator operations display
var display = document.querySelector("#display");
//select calculator results display
var resultsDisplay = document.querySelector("#result");
//create placeholder and initialize to zero for first value
var firstValue = 0;
//create array to hold every clicked number
var first = [];
var trackFirst = [];
//create placeholder and initialize to zero for second value
var secondValue = 0;
//create variable to store the results of operations
var result = 0;

//add click listeners to number buttons
for (var i = 0; i < numberBtn.length; i++){
    numberBtn[i].onclick = function(){
        display.innerText += this.textContent;
        //add the clicked number to the end of the first array
        first.push(this.textContent);
        // trackFirst.push(this.textContent);
        // console.log(trackFirst);
        console.log(first);
        //join every number as string data type in array and convert to number data type
            //store the result in the secondValue variable for further operations
        secondValue = Number(first.join(""));
    }
}

//select the "point (.)" button
var dotBtn = document.getElementById("dot");
//add click listener to dotBtn
dotBtn.onclick = function(){
    //test to see if there is no dot in the value for operation.
        //if there isn't add a dot, if there is don't add any more dots.
    if(first.indexOf(".") < 0){
        first.push(this.textContent);
        display.innerText += this.textContent;
        console.log(first);
    }
}
//add click listener to equals button 
equalsBtn.onclick = equals;

//create add button variable
var addBtn = document.querySelector("#add");
//create subtract button variable
var subtractBtn = document.querySelector("#subtract");
//create multiplication button variable
var multiplyBtn = document.querySelector("#multiply");
//create division button variable
var divideBtn = document.querySelector("#divide");

//add click listener to add button
addBtn.addEventListener("click", calculate);
//add click listener to subtract button
subtractBtn.addEventListener("click", calculate);
//add click listener to multiplication button
multiplyBtn.addEventListener("click", calculate);
//add click listener to division button
divideBtn.addEventListener("click", calculate);

//create function to handle swapping of values
function swapValues(){
    //set x to the value of the "firstNum" variable for addition
    if(result === 0){
       firstValue = secondValue; 
    } else {
        firstValue = result;
        result = 0;
    }    
}
// create function to calculate values
function calculate(){
    //see line 7 for declaration of display variable 
        //add operation sign to display
    if(result === 0 && display.innerText === ""){
        display.innerText = "";
    } else if((display.innerText).search(/(\+|-|×|÷)/g) >= 0){
        display.innerText;
    } else {
        display.innerText += this.textContent;
        swapValues();
    }

    //add the firstvalue to screen if the operation sign is the first button to be clicked;
    if ((display.innerText).indexOf("+") === 0){
        display.innerText = firstValue + "+";
        //reset the result display to zero when the resulting value has been displayed
        resultsDisplay.innerText = "0";
    }
    else if((display.innerText).indexOf("-") === 0){
        display.innerText = firstValue + "-";
        //reset the result display to zero when the resulting value has been displayed
        resultsDisplay.innerText = "0";
    } 
    else if((display.innerText).indexOf("×") === 0){
        display.innerText = firstValue + "×";
        //reset the result display to zero when the resulting value has been displayed
        resultsDisplay.innerText = "0";
    } 
    else if((display.innerText).indexOf("÷") === 0){
        display.innerText = firstValue + "÷";
        //reset the result display to zero when the resulting value has been displayed
        resultsDisplay.innerText = "0";
    }
    //reset "first" array to be empty so we can hold second set of values for operation
    first = [];
    secondValue = 0;
    //run equals operation if an operator has been clicked
    // equals();
}

//create function to equals operation
function equals(){
    if((display.innerText).indexOf("+") >= 1){
        result = firstValue + secondValue;   
    } 
    else if((display.innerText).indexOf("-") >= 1){
        result = firstValue - secondValue;
    } 
    else if((display.innerText).indexOf("×") >= 1){
        result = firstValue * secondValue;
    } 
    else if((display.innerText).indexOf("÷") >= 1){
        result = firstValue / secondValue;
    }   
    //set result display to the result of operations
    resultsDisplay.innerText = result;
    //set main display to empty
    display.innerText = "";
    //set value placeholders to zero
    firstValue = 0, secondValue = 0;
    //reset "first" array to be empty so we can hold second set of values for operation
    // trackFirst = first;
    first = [];
    console.log(trackFirst);
}

//create cancel button variable
var cancelBtn = document.querySelector("#cancel");

//add click listener to cancel button
cancelBtn.onclick = cancel; 

function cancel(){
    display.innerText = "";
    //reset "first" array to be empty so we can hold second set of values for operation
    first = [];
    //reset "result" variable to be zero so we can start a new iteration
    result = 0;
    resultsDisplay.innerText = result;
}

// var newLast = "";
// function deleteItem(){
//     var lastValue = (display.innerText).charAt  (
//                                                     (
//                                                         (display.innerText)
//                                                         .length - 1
//                                                     )
//                                                 ); 
//     newLast = (display.innerText).replace(lastValue,"");
//     display.innerText = newLast;
//     // first = trackFirst;

//     if(first.length !== 0){
//         first.pop();
//     } console.log(trackFirst);
// }