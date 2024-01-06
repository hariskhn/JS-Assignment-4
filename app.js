/************ Chapter 17 - 20 ************/

//Question 1
// var multiDimArr = [[1, 2], [3, 4], [5, 6]];

// Question 2
// var multiDimArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Question 3
// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br />");
// }

// Question 4
// var num = Number(prompt("Enter a number to show it's multiplication table"));
// var length = Number(prompt("Enter the length of the multiplication table"));
// for(var i = 1; i <= length; i++){
//     document.write(`${num} X ${i} = ${num*i}<br />`);
// }

// Question 5
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br />");
// }
// document.write("<br />");
// for(var i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br />`);
// }

// Question 6
// document.write("<b>Counting:</b><br/><br />");
// for(var i = 1; i < 16; i++){
//     document.write(i + ", ");
// }
// document.write("<br/><br /><b>Reverse counting:</b><br /><br />")
// for(var i = 10; i > 0; i--){
//     document.write(i + ", ");
// }
// document.write("<br/><br /><b>Even:</b><br /><br />")
// for(var i = 0; i < 21; i = i + 2){
//     document.write(i + ", ");
// }
// document.write("<br/><br /><b>Odd:</b><br /><br />")
// for(var i = 1; i < 20; i = i + 2){
//     document.write(i + ", ");
// }
// document.write("<br/><br /><b>Series:</b><br /><br />")
// for(var i = 2; i < 21; i = i + 2){
//     document.write(i + "k, ");
// }

// Question 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/mam?");
// var flag = false
// for(var i = 0; i < A.length; i++){
//     if(userInput == A[i]){
//         flag = true;
//         break;
//     }else{
//         continue;
//     }
// }
// if(flag){
//     document.write(`${userInput} is <b>available</b> at index ${i} in our bakery.`);
// }else{
//     document.write(`We are sorry ${userInput} is<b> not available</b> in our bakery.`);
// }

// Question 8
// var a = [24, 53, 78, 91, 12];
// var largest = a[0];
// for(var i = 1; i < a.length; i++){
//     if(a[i] > largest){
//         largest = a[i];
//     }else{
//         continue;
//     }
// }
// document.write("Array items: " + a);
// document.write("<br />The largest number is " + largest);

// Question 9
// var a = [24, 53, 78, 91, 12];
// var smallest = a[0];
// for(var i = 1; i < a.length; i++){
//     if(a[i] < smallest){
//         smallest = a[i];
//     }else{
//         continue;
//     }
// }
// document.write("Array items: " + a);
// document.write("<br />The smallest number is " + smallest);

// Question 10
// for(var i = 5; i <= 100; i = i + 5){
//     document.write(i + ",");
// }

/************ Chapter 21 - 25 ************/

//Question 1
// var first = prompt("Write your first name:");
// var last = prompt("Write your last name:");
// var fullName = first + " " + last;
// alert("Hi " + fullName);