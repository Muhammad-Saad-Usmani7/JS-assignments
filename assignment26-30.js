
// # Question 1:
// let num = +prompt("Enter positive value");

// console.log(num);
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));



// # Question 2:
// let num = +prompt("Enter negative value");

// console.log(num);
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));



// # Question 3:
// let num = +prompt("Enter negative value");

// console.log(num);
// console.log(Math.abs(num));



// # Question 4:
// for(let i = 0;i<2;i++){
// let diceValue = Math.round((Math.random()*5+1));
// document.write("Random dice value = " + diceValue+"<br>");
// };



// # Question 5:
// let diceValue = Math.round((Math.random()*1+1));

// if(diceValue == 2)
// {
//   console.log("Random Coin Value: Heads");
// }
// else if(diceValue == 1)
// {
//   console.log("Random Coin Value: Tails");
// };



// # Question 6:
// let diceValue = Math.round((Math.random()*99+1));

// for(let j =0; j<100 ; j++)
// {
//   document.write("Random Number: " + diceValue + "<br>");
//   diceValue = Math.round((Math.random()*99+1));
// };



// # Question 7:
// let input = prompt("Enter your weight in kilograms.");

// let y="";

// for(let j=0 ; j<input.length ; j++)
// {
//   if( input[j]==="." || (!isNaN(input[j])))
//   {
//     y += input[j];
//   }
// }
// console.log(+y + "kilograms");



// # Question 8:
// let userInput = +prompt("Guess the number: ")
// {
//   for(let k=0; k<5;k++){
//   let randomNumber = Math.round((Math.random()*9+1));
//   if(userInput == randomNumber)
//   {
//     console.log("Congratulations you guessed it!");break;
//   }
//   else{
//     console.log("Try next time.");
//   }
//   userInput = +prompt("Guess the number: ")
// };
// };