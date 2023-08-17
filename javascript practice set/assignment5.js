
// # Question 1;
var x=3,y=4;
var add = x+y;
document.write(add+"<br>");


// # Question 2;
var i=3,j=4;
var subtract = i-j;
document.write(subtract+"<br>");

var a=3,b=4;
var multiply = a*b;
document.write(multiply+"<br>");

var c=9,d=3;
var divide = c/d;
document.write(divide+"\n");


// # Question 3;

var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the initial value of the variable.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable after increment.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable after addition.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable after decrement.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l. Show the remainder in the browser.
document.write("The remainder is: " + remainder);



// # Question 4;
var ticketPrice = 600; 
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
console.log("Total cost for " + numberOfTickets + " tickets is " + totalCost + " PKR.");


// # Question 5;
var number = parseInt(prompt("Enter a number to display its multiplication table:"));
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}


// # Question 6;
var celsiusTemperature = 28; 
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
var fahrenheitTemperature2 = 82;
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// # Question 7;
var priceItem1 = 500; 
var priceItem2 = 300; 
var quantityItem1 = 2; 
var quantityItem2 = 3; 
var shippingCharges = 50; 

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart Receipt</h2>");
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("<hr>");
document.write("Total Cost: " + totalCost + " PKR<br>")


// # Question 8;
var totalMarks = 100;
var marksObtained = 85;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total marks: "+totalMarks+"<br>");
document.write("Marks obtained: "+marksObtained+"<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");


// # Question 9;
var usDollars = 10;
var saudiRiyals = 25;

var usdToPkrRate = 104.80;
var saudiRiyalToPkrRate = 28;

var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * saudiRiyalToPkrRate);
document.write("Total Currency in PKR: " + totalPkr.toFixed(2) + "<br>");


// # Question 10;
var num = 20;
var result = (((num + 5) * 10) / 2);

console.log("Final Result: " + result);


// # Question 11;
var currentYear = new Date().getFullYear(); 
var birthYear = 1990; 
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age1 + " or " + age2 + " years old.");


// # Question 12;
var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

console.log("The radius of a circle is: "+radius);
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2)+"<br>");


// # Question 13;
var favoriteSnack = "Chocolate bars";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmount = daysRemaining * amountPerDay;

document.write("Favorite Snack: "+favoriteSnack+"<br>");
document.write("Current Age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount Of Snacks Per Day: "+amountPerDay+"<br>");
document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);









