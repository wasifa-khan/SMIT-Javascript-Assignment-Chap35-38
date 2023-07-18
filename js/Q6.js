let number = +prompt("enter a number");
let input = number;
let parameter = number;

function factorial(parameter){
    if(parameter > 1 ){
       parameter--;
       number = number * parameter;
       factorial(parameter);
       return number;
    } 
    else{
        return 1;
    }
}

let output = factorial(parameter);
document.write("factorial of number " + input + " is : "  +output)