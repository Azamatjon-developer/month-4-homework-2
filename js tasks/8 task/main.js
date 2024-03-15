let number = +prompt(" Enter your number") 

let birlik = number % 10 

let onlik = (number - number % 10) /10 

let result = (birlik *10 + onlik) 


if( number < 100 && number > 9) {

if (birlik > onlik)  {

    console.log(number)

}{
    console.log(result)
}

}
