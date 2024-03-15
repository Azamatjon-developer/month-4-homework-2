
let number = +prompt("Enter your favorite number ...")

if( number % 4 == 0) {
    if(number % 6 == 0) {
        console.log(" Siz kiritgan son 4 ga ham 6 ga  ham bo'linadi")
    }else{
        console.log(" Siz kiritgan son 4 ga bo'linadi  ammo 6 ga bo'linmaydi  ")
    }

}else if (number % 6 == 0){
    console.log("Siz kiritgan son 6 ga bo'linadi  4 ga bo'linmaydi   ")
}else{
    "siz kiritgan son 4 ga ham 6 ga ham bo'linadi ... "
}
