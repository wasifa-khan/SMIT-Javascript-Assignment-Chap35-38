let start_number = +prompt("enter a starting number")
let end_number = +prompt("enter an ending number")

function counting(start_number , end_number){
    if(start_number > end_number){
        for (let i = start_number ; i >= end_number ; i--){
            document.write(i + "<br>")
        }
    }
    else if(start_number < end_number){
        for (let i = start_number ; i <= end_number ; i++){
            document.write(i + "<br>")
        }
    }
    else if(start_number === end_number){
        document.write("both numbers are equal")
    }
}

counting(start_number , end_number);