let string = prompt("enter a string")
let word = prompt("enter a word to search")
let count = 0;
function Count(str,word){
    for(let i = 0 ; i<str.length ; i++){
        if(str[i] === word){
            count++;
        }
    }
    return count;
}
document.write( "word " + word + " occurs " +  Count(string,word) + " times");
