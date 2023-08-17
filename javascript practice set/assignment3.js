// # Question 1;
var age = 19;
alert("I am "+age+" years old");


// # Question 2;
var visitCount = +localStorage.getItem("visitCount");
visitCount = visitCount + 1;
localStorage.setItem("visitCount", visitCount);
alert("You have visited this page " + visitCount + " times.");


// # Question 3;
var birthyear = 2004;
alert("My birth year is: "+birthyear+"\nData type of my declared variable is "+ typeof birthyear);


// # Question 4;
var visitor_sname = "Muhammad saad usmani";
var product_title = "T-Shirts";
var quantity = 5;
document.write(visitor_sname+"ordered "+product_title+" "+quantity+"(s) on XYZ clothing store");


