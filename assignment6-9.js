// # Question 1:
var a = 10;
document.write("<h2>Result:</h2>\nThe value of a is: " + a+"<br><br>----------------------<br><br>");

document.write("The value of ++a is: "+ ++a + "<br> Now the value of a is: " + a);

document.write("<br><br>The value of a++ is: "+ a++ + "<br> Now the value of a is: " + a);

document.write("<br><br>The value of --a is: "+ --a + "<br> Now the value of a is: " + a);

document.write("<br><br>The value of a-- is: "+ a-- + "<br> Now the value of a is: " + a + "<br>");


// # Question 2:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);
/*
 1. var a = 2, b = 1; initializes variables a and b with values 2 and 1, respectively.

 2. --a; decrements a by 1, making it 1. The value of a is now 1.

 3. --a - --b; --b decrements b by 1, making it 0. Then, the result of --a - --b would be 1 - 0, which is 1.

 4. --a - --b + ++b; Here, ++b increments b by 1, making it 1 again. So, the expression becomes 1 + 1, which is 2.

 5. --a - --b + ++b + b--; Now, b-- uses the current value of b (1) and then decrements it by 1. So, this step adds 1 to the previous value, resulting in 2 + 1, which equals 3.
*/


// # Question 3:
var name = prompt("Enter your name: ");
alert("Welcome: " + name);


// # Question 5:
var number = +prompt("Enter number: ");
number = number || 5;

for(let i=1 ; i<=10 ; i++)
{
    var ans = number*i;
    document.write("<br>" + number + "  x  " + i + "  =  " + ans);
    
};


// # Question 6:
var arr = [];
arr[0] = document.getElementById("one");
arr[1] = document.getElementById("two");
arr[2] = document.getElementById("three");
arr[3] = document.getElementById("four");
arr[4] = document.getElementById("five");
arr[5] = document.getElementById("six");
arr[6] = document.getElementById("seven");
arr[7] = document.getElementById("eight");
arr[8] = document.getElementById("nine");
arr[9] = document.getElementById("ten");
arr[10] = document.getElementById("eleven");
arr[11] = document.getElementById("twelve");
arr[12] = document.getElementById("thirteen");
arr[13] = document.getElementById("fourteen");
arr[14] = document.getElementById("fifteen");

for(let i=0; i<12; i++)
{
  switch(i)
  {
    case 0: case 4: case 8:
        { arr[i].innerText = prompt("Enter subject: ") };break;
    case 1: case 5: case 9:
        { arr[i].innerText = +prompt("Enter Total Marks: ") };break;
     case 2: case 6: case 10:
        { arr[i].innerText = +prompt("Enter Obtained Marks: ") }; break; 
  } 
}

for(let j=0; j<12; j++)
{
   if(j===3)
   {
    arr[j].innerText = (arr[2].innerText/arr[1].innerText * 100).toFixed(2);
   }
   else if(j===7)
   {
    arr[j].innerText = (arr[6].innerText/arr[5].innerText * 100).toFixed(2);
   }
   else if(j===11)
   {
    arr[j].innerText = (arr[10].innerText/arr[9].innerText * 100).toFixed(2);
   };
};

