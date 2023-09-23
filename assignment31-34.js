
// # Question 1&2:
// let time1 = new Date();
// console.log(Date());
// let arr1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// // let c
// for(let j=0;j<arr1.length;j++)
// {
//     if(time1.getMonth() == j)
//     {
//       console.log(arr1[j]);
//     }
// };



// # Question 3:
// let time2 = new Date();
// let arr2 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// alert("Today is "+arr2[time2.getDay()]);



// # Question 4:
// let time3 = new Date();

//       if(time3.getDay == 0 || time3.getDay == 6)
//       {
//         console.log("It's fun day");
//       }
//       else{
//         console.log("It's working day");
//       }
      

// # Question 5:
// let time4 = new Date();

// if(time4.getDate < 16)
// {
//     console.log("First fifteen days of the month.");
// }
// else
// {
//     console.log("Last days of the month.");
// }



// # Question 6:
// let time5 = new Date();

// console.log(time5);
// console.log("Elapsed milliseconds since Jan 1, 1970 = "+Date.now() );
// console.log("Elapsed minutes since Jan 1, 1970 = "+ Date.now()/600 );



// # Question 7:
// let time6 = new Date();
// if(time6.getHours() < '12')
// {
//     console.log("It's AM");
// }
// else
// {
//     console.log("It's PM");
// };



//# Question 8:
// let time10 = new Date("2020-12-31");
// console.log(time10);


//# Question 9:
// let times = new Date('2015-06-18');
// let times2 = new Date('2023-03-23');

// let days = times2.getTime() - times.getTime();
// console.log(days / (1000 * 60 * 60 * 24)+" days has passed since 1st ramadan, 2015");



//# Question 10:
// let referenceDate = new Date('2000-01-01');
// let beginningOf2015 = new Date('2015-01-01');
// let timeDifferenceMillis = beginningOf2015 - referenceDate;
// let secondsElapsed = Math.floor(timeDifferenceMillis / 1000);

// alert("Seconds elapsed between the reference date and the beginning of 2015: "+secondsElapsed + " seconds");



//# Question 11:
// let time7 = new Date();
// console.log("Current date: "+time7);
// time7.setHours(time7.getHours()+1);
// console.log("1 hour ahead it will be: "+ time7);



//# Question 12:
// var currentDate = new Date();
// var millisecondsIn100Years = 100 * 365.25 * 24 * 60 * 60 * 1000;
// var date100YearsBack = new Date(currentDate - millisecondsIn100Years);

// alert("Date 100 years back: " + date100YearsBack);



//# Question 13:
// let age = prompt("Please enter your age:");
// age = parseInt(age);
// let currentYear = new Date().getFullYear();
// console.log(currentYear)
// let birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);




//# Question 14:
// let customerName = prompt("Enter name: ");
// let currentMonth = prompt("Enter current month: ");
// let units = +prompt("Enter number of units: ");
// let charges = 52;
// let latePaymentCharges = 368;

// console.log("Customer Name: "+ customerName);
// console.log("Month: "+ currentMonth);
// console.log("Number of units: "+ units);
// console.log("Charges per unit: "+ charges);

// console.log("Net Amount Payable (within Due Date): "+ (units * charges));
// console.log("Late Payment Surcharge: "+ latePaymentCharges);
// console.log("Gross Amount Payable (after Due Date): "+ (units * charges + latePaymentCharges) );


