let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLOMNPQRSTUVWXYZ"
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+{};~?,./"

function generatePass(){
    let length = parseInt(document.getElementById("length").value); //length value of input
    console.log("hello")
    document.getElementById("length").value;    
    charaSet = numbers      
    if (document.getElementById("uppercase").checked){
        charaSet += uppercase
    }
   if( document.getElementById("lowercase").checked){
    charaSet += lowercase
   }
   if(document.getElementById("symbols").checked){
    charaSet += symbols
   }
   console.log(charaSet)
    password = ""                                     
    for(let i =0; i < length; i++){              // create a loop, set the length of the loop to yor length variable above
        let randomIndex = Math.floor(Math.random() * charaSet.length);   //inside the loop create a varible that sets a rondom index
        password += charaSet[randomIndex]}
    document.getElementById("password").value = password

}
document.getElementById("generate").addEventListener("click", (e) =>{
    generatePass()
})