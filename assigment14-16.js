// # Question 1:
// const futureStudentNames = [];


// # Question 2:
// const futureStudentNames = new Array();


// # Question 3:
// const stringArray = ["apple", "banana", "cherry", "date"];



// # Question 4:
// const numbersArray = [1 , 2 , 3 , 4];


// # Question 5:
// const booleanArray = [true , false,];


// # Question 6:
// const mixedArray = [1 , "Saad" , 2 , "Usman"];
// mixedArray.forEach(function(mixedArray){
//     console.log(mixedArray);
// });


// # Question 7:
// const arrays = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"];
// arrays.forEach(function(a,b,c,){
//     document.write(b+") " + a + "<br>");
// });


// # Question 8:
// const namesArray = ["Usman" , "Maryam" , "Salman"];
// const scoreArray = [448 , 443 , 437];
// let i = 0;
// namesArray.forEach(function(namesArray){  
//      document.write(`Score of ${namesArray} is ${scoreArray[i]}. Percentage is: ${(scoreArray[i]/500 * 100).toFixed(2)}<br>`);
//      i++;
// });


// # Question 9:
// const colors = ['red', 'blue', 'green', 'yellow'];

// document.write('<strong>Original Array:</strong> ' + colors.join(', ') + '<br>');

// const newColor = prompt('Enter a color to add to the beginning of the array:');

// if (newColor !== null && newColor !== '') {
//   colors.unshift(newColor);
// }

// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');
// const newColorEnd = prompt('Enter a color to add to the end of the array:');
// if (newColorEnd !== null && newColorEnd !== '') {
//   colors.push(newColorEnd);
// }

// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// colors.unshift('purple', 'orange');
// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// colors.shift();
// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// colors.pop();
// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// const indexToAdd = parseInt(prompt('Enter the index to add a color:'));
// const colorToAdd = prompt('Enter the color to add:');

// if (isNaN(indexToAdd) || indexToAdd < 0 || indexToAdd > colors.length) {
//   alert('Invalid index. Please enter a valid index.');
// } else if (colorToAdd !== null && colorToAdd !== '') {
//   colors.splice(indexToAdd, 0, colorToAdd);
// }
// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// const indexToDelete = parseInt(prompt('Enter the index to delete a color:'));
// const colorToDelete = prompt('Enter how many colors to delete:');

// colors.splice(indexToDelete,colorToDelete);
// document.write('<strong>Updated Array:</strong> ' + colors.join(', ') + '<br>');

// # Question 10:
// const studentScores = [85, 72, 93, 88, 76, 90, 78];

// studentScores.sort(function(a, b) {
//   return a - b; 
// });

// console.log("Sorted Student Scores (Ascending Order):");
// console.log(studentScores);


// # Question 11:
// let cityNames = ["Karachi" , "Lahore" , "Peshawar" , "Islamabad" , "Quetta"];
// let copyArray = cityNames.slice(2);
// console.log(copyArray);

// # Question 12:
// let arr = ["This" , "is" , "my" , "cat"];
// let newArr = arr.join(" ");
// console.log(newArr);


// # Question 13:
// const queue = [];

// queue.push('item1');
// queue.push('item2');
// queue.push('item3');

// const firstItem = queue.shift(); 
// const secondItem = queue.shift(); 

// console.log(firstItem); 
// console.log(secondItem); 
// console.log(queue); 


// # Question 14:
// const stack = [];
// stack.push('item1');
// stack.push('item2');
// stack.push('item3');

// const lastItem = stack.pop(); 
// const secondLastItem = stack.pop(); 

// console.log(lastItem); 
// console.log(secondLastItem); 

// console.log(stack); 


// # Question 15:
// const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// let selectMenu = '<select id="manufacturerSelect">';

// for(let i=0; i<manufacturers.length; i++)
// {
//     selectMenu += "<option value = ' "+ manufacturers[i] + " '> "+manufacturers[i]+"</option>";
// }

// selectMenu += "</select>";
// document.write(selectMenu);