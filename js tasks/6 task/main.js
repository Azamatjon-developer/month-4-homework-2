let  number = +prompt("Enter your number ... ") 

if(number % 3 == 0 && number % 5 == 0) {

    console.log("Fiz bass")

}else if(number % 3 == 0) {
    console.log("fizz")
}else if(number % 5 == 0){
    console.log(" Bass ... ")
}else{
    console.log("2 tasiga ham bolinmaydi ...")
}