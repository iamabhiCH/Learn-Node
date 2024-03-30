// WAP to calculate the area of the rectangle  using user input for length and breadth and print output.

const prompt = require("prompt-sync")();

const l = parseInt(prompt("Enter the length of rectangle :"));
const b = parseInt(prompt("Enter the breadth of rectangle :"));

const area = l * b;

console.log("Area of the rectangle : "+area);