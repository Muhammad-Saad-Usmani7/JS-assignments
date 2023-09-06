// # Question 1:
// const multiDimArray = [];



// # Question 2:
// let arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(let i=0; i<arr.length; i++)
// {
//    for(let j=0; j<4; j++)
//    {
//       document.write(arr[i][j]);
//    }
//    document.write("<br>");
// }



// # Question 3:
// for(let a=1; a<11; a++)
// {
//       console.log(a);
// }



// # Question 4:
// let number = +prompt("Enter number: ");
// let Length = +prompt("Enter table length: ");

// for(let b=1; b<=Length; b++)
// {
//       document.write(`${number}  x  ${b} = ${number * b} <br>`);
// }



// # Question 5:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
   
// for(let c=0 ; c<fruits.length; c++)
// {
//       console.log(fruits[c]);
// }
      
// for(let d=0 ; d<fruits.length; d++)
// {
//       console.log("Element at index "+d+" is "+fruits[d]);
// }



// # Question 6:
// document.write("<h2>Counting:</h2>");
// for(let e=1; e<16; e+=1)
// {
//    document.write(e+",");
// }
// document.write("<br>");
// document.write("<h2>Reverse counting:</h2>");
// for(let f=10; f>0; f-=1)
// {
//    document.write(f+",");
// }
// document.write("<br>");
// document.write("<h2>Even:</h2>");
// for(let g=0; g<21; g++)
// {
//    if(g%2===0)
//    {
//    document.write(g+",");
//    }
// }
// document.write("<br>");
// document.write("<h2>Odd:</h2>");
// for(let h=0; h<21; h++)
// {
//    if(h%2!=0)
//    {
//    document.write(h+",");
//    }
// }
// document.write("<br>");
// document.write("<h2>Series:</h2>");
// for(let k=2; k<21; k+=2)
// {
//    document.write(k+"k,");  
// }



// # Question 7:
// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let search = prompt("Enter item: ");
// let flag = true;
// for(let n=0; n<items.length; n++)
// {
//       if(search === items[n])
//       {
//             alert(`${search} is available at index ${n} in our bakery.`);
//             flag = false;
//       }
      
// }
// if(flag)
// alert(`We are sorry.${search} is not available in our bakery.`);


// # Question 8:
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for(let l=0; l<A.length; l++)
// {
//    if(largest < A[l])
//    {
//       largest = A[l];
//    }
// }
// console.log(largest);



// # Question 9:
// let B = [24, 53, 78, 91, 12];
// let smallest = B[0];
// for(let l=0; l<B.length; l++)
// {
//    if(smallest > B[l])
//    {
//       smallest = B[l];
//    }
// }
// console.log(smallest);



// # Question 10:
// document.write("Multiples of 5 are:  ")
// for(let m=1; m<=20; m++)
// {
//       document.write(5 * m + ",");
// }