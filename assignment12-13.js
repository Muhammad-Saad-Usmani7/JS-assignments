// # Question 1:
let x = prompt("Enter value: ");
x = x.charCodeAt(0);
if(x >=65 && x<=90)
{
    console.log("UpperCase.");
}
else if( x>=97 && x<=122)
{
    console.log("LowerCase.");
}
else if(x>=48 && x<=57)
{
    console.log("Number.");
}


// # Question 2:
let num1 = +prompt("Enter number 1: ");
let num2 = +prompt("Enter number 2: ");

let larger = (num1 > num2)? num1:num2;
console.log(`${larger} is Larger.`);


// # Question 3:
const number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// # Question 4:
const character = prompt("Enter a character:").toLowerCase();

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is not a vowel.");
}


// # Question 5:
let password = "nightingale@7"; 
let pass = prompt("Enter your password.");
if(pass === "")
{
    pass = prompt("Please enter your password!");
}
if(pass === password)
{
    alert("Correct! The password you entered matches the original password.");
}
else
{
    alert("Incorrect password");
}


// # Question 6:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}


// # Question 7:
let time = +prompt("Enter time.");

if(time >= 0 && time <1200)
{
   alert("Good Morning!");
}
else if(time >= 1200 && time < 1700)
{
   alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100)
{
   alert("Good Evening!");
}
else if(time >= 2100 && time < 2359)
{
   alert("Good night!");
}