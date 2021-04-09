prompt("Premi qualunque tasto per iniziare");
for(var i=1;i<101;i++){
  //var flagBoth = false;
  if(!(i%3) && !(i%5)){
    console.log("FizzBuzz")
  } else if(!(i%3)){
    console.log("Fizz")
  } else if(!(i%5)){
    console.log("Buzz")
  } else{
    console.log(i)
  }
}

//  CHECK MULTIPLE CONDITIONS TRUE
/* var a = prompt("Inserisci un numero");
if(a>0){
  console.log("prima condizione")
} else if( a>5){
  console.log("Seconda condizione")
} else{
  console.log("terza")
} */