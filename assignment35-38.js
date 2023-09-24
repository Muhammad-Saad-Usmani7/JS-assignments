// #Question 1:
// function date_and_time() {
//   let currentDate = new Date();
//   return currentDate;
// }
// console.log(date_and_time());



// #Question 2:
// let firstname = "M.saad";
// let lastname = "Usmani";

// function greet(x, y) {
//   return x + " " + y;
// }
// console.log(greet(firstname, lastname));



// #Question 3:
// let num1 = 6;
// let num2 = 8;

// function sum(x,y)
// {
//     return x+y;
// }
// console.log( sum(num1,num2) );



// #Question 4:
// let num1 = +prompt("Enter number1: ");
// let num2 = +prompt("Enter number2: ");
// let operator = prompt("Enter operation to perform: ");

// function calculation(x, y, z) {
//   switch (z) {
//     case "+": {
//       return x + y;
//       break;
//     }
//     case "-": {
//       return x - y;
//       break;
//     }
//     case "*": {
//       return x * y;
//       break;
//     }
//     case "/": {
//       return x / y;
//       break;
//     }
//     case "%": {
//       return x % y;
//       break;
//     }

//     default: {
//       return undefined;
//     }
//   }
// }
// console.log(calculation(num1, num2, operator));



// #Question 5:
// let num = +prompt("Enter number: ");

// function square(x) {
//   return Math.pow(x,2);
// }

// console.log(square(num));



// #Question 6:
// let num = +prompt("Enter number: ");

// function factorial(x) {
//   let fact = 1;
//   if (x === 0) {
//     return 1;
//   } else {
//     for (let i = 0; i < x; i++) {
//       fact += fact * i;
//     }
//   }
//   return fact;
// }

// console.log(factorial(num));



// #Question 7:
// let startingnum = +prompt("Enter starting number: ");
// let endingnum = +prompt("Enter ending number: ");

// function counting(x,y)
// {
//     for(let i=x; i<=y; i++)
//     {
//         console.log(i);
//     }
// }
// counting(startingnum,endingnum);



// #Question 8:
// let base = 2;
// let perpendicular = 3;

// function pythagorus(B,P)
// {
//     function calculation()
//     {
//         let H = 0;
//         H = B**2 + P**2;
//         return Math.sqrt(H).toFixed(2);
//     }
//     console.log( calculation()+"cm" );
// }
// pythagorus(base,perpendicular);



// #Question 9:
// let width = 4;
// let height = 5;

// function Triangle(W,H)
// {
//     let area = W * H;
//     console.log(area+"sq.cm");
// }
// Triangle(width,height);



// #Question 10:
// let str = prompt("Enter string: ");
// function Palindrome(x) {
//   let arr = [];
//   for (let j = x.length - 1; j >= 0; j--) {
//     arr.push(x[j]);
//   }
//   arr = arr.join("");
//   if (arr === x) {
//     console.log("string is palindrome");
//   } else {
//     console.log("String is not palindrome");
//   }
// };
// Palindrome(str);



// #Question 11:
// let string = "once upon a time there was a mole...";

// function capt()
// {
//     let w;
//     string = string.split(" ");
//     // console.log(string[0])
//     for(let i=0;i<string.length;i++)
//     {
//         w = string[i];
//         // console.log(w)
//         w = w[0].toUpperCase()+w.slice(1);
//         string[i] = w;
//     }
//     string = string.join(" ");
//     console.log(string);
// }
// capt();



// #Question 12:
// let string = "Web Development Tutorial";

// function capt()
// {
//     let w;
//     string = string.split(" ");
//     w = string[0];
//     for(let i=0 ; i<string.length ; i++)
//     {
//         w = w.length > string[i].length? w:string[i];
//     }
//     console.log("largest string is = '"+w+"'");
// }
// capt();



// #Question 13:
// let string = "once upon a time there was a mole...";

// function capt()
// {
//     let w = prompt('Enter letter: ');
//     let count = 0;
//     for(let i=0;i<string.length;i++)
//     {
//        if(w === string[i])
//        {
//         count++;
//        }
//     }
//     console.log(count);
// }
// capt();



// #Question 14:
// let radius  = +prompt("Enter radius of a circle: ");

// function  calcCircumference(R1)
// {
// return (2*Math.PI*R1).toFixed(2);
// };
// function   calcArea(R2)
// {
//     return (Math.PI*Math.pow(R2,2)).toFixed(2);
// }

// console.log("The circumference of circle is: "+calcCircumference(radius));
// console.log("The area of circle is: "+calcArea(radius));
