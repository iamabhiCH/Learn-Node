/*
    You are organizing a party and want to track the list of guest. Create an array called
    "guestList" and add the names of at least five guest. Then, WAP that checks if a given 
    name is in the list or not? If  it is present then print “Welcome to the party ["name"]",
    otherwise print “Sorry ["Name] is not invited”.
*/

const prompt = require("prompt-sync")();

const guestList = ["Akash Sharma", "Akash Madhdheshiya", "Abhinav Arya", "Chandan Tiwari", "Roshan","Manish","Shashi","Awanish"];

const guestName = prompt("Please enter your name : ");

let flag = 0;

for(let i = 0; i < guestList.length; i++){
    if(guestList[i] == guestName){
        flag = 1;
    }
}

if(flag == 1){
    console.log("Welcome to the party "+guestName);
}else{
    console.log("Sorry, "+guestName+" is not invited");
}