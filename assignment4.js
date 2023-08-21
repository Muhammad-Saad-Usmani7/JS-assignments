// # Question 1;
var x,y,z;

// # Question 2;
// var myname, $myname, my_name, myname123, my23name;//legal names..
// var my name, 12myname, m@name, myname\\ , myname+age; //illegal names..

// # Question 3;
var heading = document.querySelector("h1");
heading.innerText = "Rules for naming JS variables" ;

var para1 = document.getElementById("one");
para1.innerText = "Variables name can only contain numbers, $ and _. For example : $my_1stVariable.";

var para2 = document.getElementById("two");
para2.innerText = "VAriables must begin with $, letter or _. for example : $name, _name or name.";

var para3 = document.getElementById("three");
para3.innerText = "Variables names are case sensitive.";

var para4 = document.getElementById("four");
para4.innerText = "Variables names should not be JS keywords.";