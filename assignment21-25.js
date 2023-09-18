// # Question 1:
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome.");



// # Question 2:
// var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhoneModel.length;

// document.write("The length of your favorite mobile phone model is: " + inputLength);



// # Question 3:
// let nationality = "Pakistani";
// console.log(nationality.indexOf('n'));



// # Question 4:
// let a = "Hello World";
// console.log(a.lastIndexOf('l'));



// # Question 5:
// let nationalityy = "Pakistani";
// console.log(nationalityy.charAt(3));



// # Question 6:
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Hello, " + fullName + "! Welcome.");



// # Question 7:
// let city = "Hyderabad";
// city = city.toLowerCase();
// let replacement = "Islama";

// for(let j=0 ; j<city.length ; j++)
// {
//     if(city.slice(j,j+3) === 'bad')
//     {
//         replacement += city.slice(j,j+3); 
//     }
// }
// document.write(replacement);



// # Question 8:
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(message.replaceAll("and","&"));



// # Question 9:
// let value = "472";
// console.log(typeof(value));
// let x = Number(value);
// console.log(typeof(x));



// # Question 10:
// let input = prompt(" ");
// alert(input.toUpperCase());



// # Question 11:
// let name = "javascript";
// console.log("Javascript");



// # Question 12:
// let num = 35.36;
// num = num.toString().replace('.','');
// console.log(num);


// # Question 13:
// let name = "M.s@@d Usmani";
// let special = /[@.,!]/;
// special.test(name);
// console.log("error");



// # Question 14:

// let arr =  ["cake", "apple pie", "cookie", "chips", "patties"];
// let search = prompt("enter: ");
// let flag=true;
// for(let i=0 ; i<arr.length ; i++)
// {
//     if(search === arr[i])
//     {
//         console.log(`The ${search} is found at index ${arr.indexOf(search)} in our Bakery`);
//          flag = false
//     }
// }
// if(flag)
// {
//     console.log("Item not found");
// }

 


// # Question 15:
// let password = prompt("Enter password: ");
// let array = [0,1,2,3,4,5,6,7,8,9];
// let L = password.length;
// let flag = true;
// for(let j=0 ; j<password.length ; j++)
// {
// if(password[0] == array[j])
// {
//     alert("Password can not begin with numbers!");
// }
// }

// if(L < 6)
// {
//     alert("Password should be atleast six characters Long!");
// }

// else{
// for(let i=1; i<password.length-1;i++)
// {
//     for(let k=0 ; k < array.length ; k++)
//     {
//         if(password[i] == array[k])
//         {
//             flag = false;break;
//         }
//     }
    
// };

// if(flag)
// {
//     alert("Password should contain Aplhabets and numbers!");
// }
// };



// # Question 16:
// var university = "University of Karachi";
// var universityArray = university.split('');

// for(let i=0 ; i<university.length ; i++)
// {
// document.write(universityArray[i]+"<br>");
// }



// # Question 17:
// let country = "Pakistan";
// console.log(country.charAt(country.length-1));



// # Question 18:
// let str = "The quick brown fox jumps over the lazy dog";
// let str2 = str.toLowerCase();
// let count=0;
// for(let l=0 ; l<str2.length ; l++)
// {
//     if(str2.slice(l,l+3)=== 'the')
//     {
//       count++;
//     }
// }
// console.log(count);


