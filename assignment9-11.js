// # Question 1:
var cityName = prompt("Enter a city name:");
cityName = cityName.toLocaleLowerCase();
if (cityName === "karachi") {
  console.log("Welcome to the city of lights");
} else {
  console.log("Welcome to " + cityName);
}


// # Question 2:
var gender = prompt("Enter your gender (male/female):");
gender = gender.toLowerCase();

if (gender === "male") {
  console.log("Good Morning Sir.");
} else if (gender === "female") {
  console.log("Good Morning Ma’am.");
} else {
  console.log("Good Morning.");
}


// # Question 3:
let traffic_Signal = prompt("Enter trafic light color:");
traffic_Signal = traffic_Signal.toLocaleLowerCase();
if(traffic_Signal === 'red')
{
    console.log("Must Stop!");
}
else if(traffic_Signal === 'yellow')
{
    console.log("Ready To Move!");
}
else if(traffic_Signal === 'green')
{
    console.log("Move Now!");
}
else
{
    console.log("Wrong Entery!");
}

// # Question 4:
const remainingFuel = parseFloat(prompt("Enter the remaining fuel in litres:"));

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel in your car");
}

// # Question 5:
a:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

b: 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

e:
if (true){
alert("True");
}
if (false){
alert("False");
}

f:
if("car" < "cat"){
alert("car is smaller than cat");
}


// # Question 6:
let obtained_Marks = +prompt("Enter obtained marks in three subjects: ");
let total_Marks = +prompt("Enter total marks of three subjects: ");
let percentage = obtained_Marks / total_Marks * 100;

if(percentage >= 80)
{
   document.write("Obtained Marks: "+obtained_Marks);
   document.write("<br>Total Marks: "+total_Marks);
   document.write("<br>Percentage: "+percentage);
   document.write("<br>Grade: A");
   document.write("<br>Remarks: Excellent!");
}
else if(percentage >= 70)
{
   document.write("Obtained Marks: "+obtained_Marks);
   document.write("Total Marks: "+total_Marks);
   document.write("Percentage: "+percentage);
   document.write("Grade: B");
   document.write("Remarks: Good!");
}
else if(percentage >= 60)
{
   document.write("Obtained Marks: "+obtained_Marks);
   document.write("Total Marks: "+total_Marks);
   document.write("Percentage: "+percentage);
   document.write("Grade: C");
   document.write("Remarks: You need to improve...");
}
else
{
   document.write("Obtained Marks: "+obtained_Marks);
   document.write("Total Marks: "+total_Marks);
   document.write("Percentage: "+percentage);
   document.write("Grade: Fail");
   document.write("Remarks: Sorry...");
}

// # Question 7:
let secretNumber = 7;
let guessingNumber = +prompt("Guess the number: ");

if(guessingNumber === secretNumber)
{
    alert("Bingo! Correct answer...");
}
else if((guessingNumber === secretNumber+1) || (guessingNumber === secretNumber-1))
{
    alert("Close enough to the correct answer...");
}
else{
    alert("Sorry! Better luck next time...");
}


// # Question 8:
let number = +prompt("Enter number: ");

if(number%3===0)
{
    document.write("Number("+number+") is divisible by 3.");
}
else
{
    document.write("Number("+number+") is not divisible by 3.");
}


// # Question 9:
let number2 = +prompt("Enter number: ");

if(number2 % 2===0)
{
    document.write("Number("+number2+") is even.");
}
else
{
    document.write("Number("+number2+") is odd.");
}


// # Question 10:
const userInput = prompt("Enter the temperature in Celsius:");
const temperature = parseFloat(userInput);

if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("It's freezing outside!");
}


// # Question 11:
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /, %):");

let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        console.log("Division by zero is not allowed.");
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    console.log("Invalid operation.");
}

if (result !== undefined) {
    console.log(`Result: ${result}`);
}
