const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");
const icon = document.getElementById("icon");
const clear = document.getElementById("C");
const paranthesis = document.getElementById("paranthesis");
const percent = document.getElementById("%");
const divide = document.getElementById("/");
const multiply = document.getElementById("*");
const plus = document.getElementById("+");
const subtract = document.getElementById("-");
const point = document.getElementById(".");
const equalTo = document.getElementById("equal");

const digits = Array.from(document.getElementsByClassName("digit"));

first.value = "";
let operator = "";
second.value = "";
result.value = "";

icon.onclick = function(){
    let arr = Array.from(first.value);
    arr.pop();
    first.value = arr.join("");
    second.textContent = first.value;
    second.value ="";
    first.value = "";
    first.textContent = "";
}

clear.onclick = function() {
    first.value= "";
    first.textContent = "";
    result.textContent = "";
    result.value = "";
    second.value = "";
    second.textContent = "";
}

paranthesis.onclick = function(e){
    e.target.classList.toggle("open");
    if(e.target.className == "btn op open"){
        first.value += "(";
        second.textContent = first.value;
    } else {
        first.value += ")";
        second.textContent = first.value;
    }
}

percent.onclick = function(){
   let arr = Array.from(first.value);
   let index = arr[arr.length -1];
   let part = arr.slice(0, index).join("");
   let lastItem = arr[arr.length-1];
   if(lastItem >= 0){
       first.value += "%";
       lastItem = parseFloat(part)/100;
   }

    second.textContent = first.value;
    return  result.textContent = lastItem;
}


point.onclick= function(){
    let arr = Array.from(first.value);
    let lastItem = parseInt(arr[arr.length-1]);
    if(lastItem >= 0){
        first.value += ".";
    }
    first.textContent = first.value
   return first.value;
  }


  digits.forEach(digit => digit.addEventListener("click", (e)=> {
    first.value += e.target.id;
    second.textContent = first.value;
    math();
    return first.value; 
    }))

function doThis(e){
    
    let arr = Array.from(first.value);
    let lastItem = arr[arr.length-1];
    operator = e.target.id;
    
    if(typeof first.value === "number"){
        first.value += operator;
    }
    if(lastItem >= 0 || lastItem === ")"  || lastItem === "%"){
        first.value += operator;
    }
    second.value = first.value;
    first.textContent = second.value;
    first.value = "";
    result.textContent = "";
    
    second.textContent = " ";
    
}  


function math(){
    let arr = Array.from(second.value);
    let length = arr.length;
    indexOfOperator= length-1;
    let operand = arr.slice(0, indexOfOperator).join("");
    operand = parseFloat(operand);
    
   
    switch(arr[indexOfOperator]){
        case("undefined"):
            result.textContent = " ";
        break;
        case("/"):
           result.value = operand / first.value;
           first.textContent = second.value + first.value;
           first.value = result.value;
           second.textContent = result.value;
          
        break;
        case("*"):
            result.value = operand * first.value;
            first.textContent = second.value + first.value;
           first.value = result.value;
           second.textContent = result.value;
        break;
        case("+"):
            result.value = operand + first.value;
            first.textContent = second.value + first.value;
           first.value = result.value;
           second.textContent = result.value;
        break;
        case("-"):
           result.value = operand - first.value;
           first.textContent = second.value + first.value;
           first.value = result.value;
           second.textContent = result.value;
        break;
        default:
            result.value = "";
            result.textContent = " ";
    }
    
    return first.value;
}

function outcome(){
    first.textContent = first.value;
    second.textContent = "";
    first.style.cssText = 'color: rgba(128, 255, 0, 0.61); font-size: 2rem';
}

divide.onclick = doThis;
multiply.onclick = doThis;
plus.onclick = doThis;
subtract.onclick = doThis;
equalTo.onclick = outcome;