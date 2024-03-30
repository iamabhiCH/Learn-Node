const prompt = require("prompt-sync")();

const myName = prompt("Enter your name: ");
const myAge = parseInt(prompt("Enter your age: "));
const myDOB = prompt("Enter your Date of Birth: ");
const myGender = prompt("Enter your gender: ");
const myEmail = prompt("Enter your Email: ");

if (myAge >= 18) {
    console.log("Candidate can vote in the election. Here are the details of the candidate:");
    console.log("Name:", myName);
    console.log("Age:", myAge);
    console.log("Date of Birth:", myDOB);
    console.log("Gender:", myGender);
    console.log("Email:", myEmail);
} else {
    console.log("Candidate cannot vote in the election.");
    if (myGender.toLowerCase() === "male") {
        console.log("Because he is underage. The minimum age required is 18.");
    } else {
        console.log("Because she is underage. The minimum age required is 18.");
    }
}