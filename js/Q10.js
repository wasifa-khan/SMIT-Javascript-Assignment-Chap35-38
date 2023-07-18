function palindrome(){
    let string = "madam";
    let str = string;
    let u = 0;
    for(let i = string.length-1 ;i >=0 ; i--){
        str = str.replace(str[u],str[i])
        u++;
    }
    if(str === string){
        document.write("yes they are palindromes")
    }
   else{
    document.write("no they are not palindromes")
   }
}

palindrome()