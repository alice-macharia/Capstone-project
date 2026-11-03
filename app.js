//Lab1 Introduction to Javascript
console.log("Page loaded successfully");
console.log("My name is Aisha");
console.log("2+2=", 2+2);
console.log("Is Javascript fun?", true);


//Task 1 Console Profile
console.log("My name is Aisha");
console.log("INTE/M22/05/24");
console.log(new Date().getFullYear());
console.log("Variables");
console.log(100/4);

//Task 2 Data Types Sampler
console.log("Hello Javascript");
console.log(42);
console.log(true);
console.log("3+4=", 3+4);
console.log("3"+ "4");
console.log(3+4);

//Lab2 Variables, Data Types and Operators

//Task 1 Calculator
const num1 = 17;
const num2 = 5;

console.log("Sum:", num1 + num2);              
console.log("Difference:", num1 - num2);       
console.log("Product:", num1 * num2);          
console.log("Remainder:", num1 % num2);        
console.log("Division:", (num1 / num2).toFixed(2));

//Task 2 Student Grade Checker
let marks = 0;

marks += 30;   // Test 1
marks += 25;   // Test 2
marks += 28;   // Test 3

const distinction = 75;

console.log("Total marks:", marks);                         // 83
console.log("Achieved distinction?", marks >= distinction); // true
console.log("Exactly 100?", marks === 100);                 // false


//Task 3 Truth Table Explorer
const isLoggedIn = true;
const isAdmin = false;
const hasPermission = true;
const isActive = false;


console.log(isLoggedIn && isAdmin);          // false (admin is false)
console.log(isLoggedIn || isAdmin);          // true  (loggedIn is true)
console.log(isAdmin && hasPermission);       // false (admin is false)
console.log(hasPermission || isActive);      // true  (permission is true)
console.log(isLoggedIn && hasPermission);    // true  (both true)
console.log(isAdmin || isActive);            // false (both false)