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

// Question 2
// var userInput = prompt("Write your favorite mobile phone model");
// document.write("My favorite phone is " + userInput);
// document.write("<br />Length of string: " + userInput.length);

// Question 3
// var word = "Pakistani";
// document.write(`String: ${word}<br />Index of 'n': ${word.indexOf('n')}`);

// Question 4
// var word = "Hello World";
// document.write(`String: ${word}<br />Last Index of 'l': ${word.lastIndexOf('l')}`);

// Question 5
// var word = "Pakistani";
// document.write(`String: ${word}<br />Character at index 3: ${word.charAt(3)}`);

// Question 6
// var first = prompt("Write your first name:");
// var last = prompt("Write your last name:");
// var fullName = first.concat(" " + last);
// alert("Hi " + fullName);

// Question 7
// var word = "Hyderabad";
// document.write(`City: ${word}<br />`);
// word = word.replace("Hyder", "Islam");
// document.write("After replacement: " + word);

// Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// message = message.replace(/and/g, "&");
// document.write(message);

// Question 9
// var variable = "472";
// document.write(`Value: ${variable}<br />Type: ${typeof(variable)}<br />`);
// variable = Number(variable);
// document.write(`Value: ${variable}<br />Type: ${typeof(variable)}`);

// Question 10
// var userInput = prompt("Write something");
// document.write("User Input: " + userInput)
// userInput = userInput.toUpperCase();
// document.write("<br />Upper case: " + userInput)

// Question 11
// var userInput = prompt("Write something");
// document.write("User input: " + userInput);
// var first = userInput[0].toUpperCase();
// userInput = userInput.replace(userInput[0], first);
// document.write("<br />Title case: " + userInput);

// Question 12
// var num = 35.36;
// document.write("Number: " + num);
// num = num.toString().replace('.', '');
// document.write("<br />Result: " + num);

// Question 13
// var userInput = prompt("Write your name");
// for (;containsSpecialSymbols(userInput);) {
//     userInput = prompt("Please enter a valid username");
// }
// function containsSpecialSymbols(username) {
//     for (var j = 0; j < username.length; j++) {
//         if (username[j] == "@" || username[j] == "." || username[j] == "," || username[j] == "!") {
//             return true;
//         }
//     }
//     return false;
// }

// Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// userInput = userInput.toLowerCase();
// var flag = false;
// for(var i = 0; i<A.length; i++){
//     if(userInput === A[i]){
//         flag = true;
//         break;
//     }else{
//         continue;
//     }
// }
// if(flag){
//     document.write(`${userInput} is <b>available</b> at index ${i} in our bakery.`);
// }else{
//     document.write(`We are sorry. ${userInput} is <b>not available</b> in our bakery.`);
// }

// Question 15



// Question 16
// var university = "University of Karachi";
// university = university.split('');
// for(var i=0; i<university.length; i++){
//     document.write(university[i] + "<br />");
// }

// Question 17
// var userInput = prompt("Write something");
// document.write("User input: " + userInput + "<br />");
// document.write("Last character of input: " + userInput.charAt(userInput.length-1));

// Question 18
// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var count = 0;
// for(var i=0; i<text.length; i++){
//     if(text.slice(i, i+3) === "the"){
//         ++count;
//     }
// }
// document.write("Text: " + text + "<br />");
// document.write("There are " + count + " occurrence(s) of the word 'the'");

/************ Chapter 26 - 30 ************/

//Question 1
// var num = prompt("Write a number");
// document.write(`number: ${num}<br />round off value: ${Math.round(num)}<br />floor value: ${Math.floor(num)}<br />ceil value: ${Math.ceil(num)}`);

// Question 2
// var num = prompt("Write a number");
// document.write(`number: ${num}<br />round off value: ${Math.round(num)}<br />floor value: ${Math.floor(num)}<br />ceil value: ${Math.ceil(num)}`);

// Question 3
// var num = prompt("Write a number");
// document.write(`The absolute value of ${num} is ${Math.abs(num)}`)

// Question 4
// var num = (Math.random() * 6) + 1;
// num = Math.floor(num);
// document.write("random dice value " + num);

// Question 5
// var num = (Math.random() * 2) + 1;
// num = Math.floor(num);
// if(num === 1){
//     document.write("1<br />random coin value: Tails");
// }else{
//     document.write("2<br />random coin value: Heads");
// }

// Question 6
// var num = (Math.random()*100) + 1;
// var num = Math.floor(num);
// document.write("random number between 1 and 100: " + num);

// Question 7
// var weight = parseFloat(prompt("Enter your weight in kilograms"));
// document.write("The weight of user is " + weight + " kilograms");

// Question 8
// var num = (Math.random() * 10) + 1;
// num = Math.floor(num);
// var guess = prompt("Guess the secret number");
// if(num == guess){
//     alert("Congratulations! you got it right.");
// }else{
//     alert("Try again!");
// }