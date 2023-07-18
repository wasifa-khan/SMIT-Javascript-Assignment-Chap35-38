let num1 = +prompt("Enter the Number 1");
let num2 = +prompt("Enter the Number 2");
let operator = prompt("Enter the operator");
function calculator(num1,num2, operator){
    if(operator === "+"){
        document.write(num1 + " " + operator + " " + num2 + " = " + (num1 + num2));
    }
    else if(operator === "-"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2));
    }
    else if(operator === "*"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2));
    }
    else if(operator === "/"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2));
    }
    else if(operator === "%"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2));
    }
    else{
        document.write("Write some input");
    }
}
calculator(num1,num2,operator);