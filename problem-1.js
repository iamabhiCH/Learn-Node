/*
    You run a movie theatre, and you want to offer discount based on a person's age. Write a 
    javascript program that asks user for their age and then display a message :
    1) If  the user is under 18 years old, "You get a 20% discount!"
    2) If  the user is ( 18 to 65 ) years old, "Normal ticket price applies!"
    3) If  the user is older than 65 years old, "You get a 35% senoir discount!"
*/

const prompt = require("prompt-sync")();
let uAge = parseInt(prompt("Please enter your age : "));

if(userAge < 18){
    console.log("You get a 20% discount!");
}
else if(uAge >= 18 && uAge <= 65){
    console.log("Normal ticket price applies!");
}
else{
    console.log("You get a 35% senoir discount!")
}
