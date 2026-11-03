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


//Lab 3 Control Structure

//Grade Calculator
//Step One: Prompt the user to enter their score (0-100) and store it in a variable called score.
let input = prompt("Enter your score (0-100):");
let score = Number(input);

if (score >= 70)      { console.log("Grade: A Distinction"); }
else if (score >= 60) { console.log("Grade: B Merit"); }
else if (score >= 50) { console.log("Grade: C Pass"); }
else if (score >= 40) { console.log("Grade: D Compensated pass"); }
else                  { console.log("Grade: F Fail"); }

//Step Two
for (let i = 1; i <= 10; i++) {
  console.log("7 ×", i, "=", 7 * i);
}

//Step Three
let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Lift off!");


//Task 1 FizzBuzz
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Task 2 Temprature Classifier
const temperatures = [12, 28, -3, 37, 22, 5, 41, 18];

for (let i = 0; i < temperatures.length; i++) {
  const temp = temperatures[i];
  let classification;

  if (temp < 0) {
    classification = "Freezing";
  } else if (temp <= 14) {
    classification = "Cold";
  } else if (temp <= 29) {
    classification = "Warm";
  } else {
    classification = "Hot";
  }

  console.log(temp + "°C: " + classification);
}


//Task 3 Number Guessing Simulation
const target = 42;
let guess = 1;
let count = 1;

while (guess !== target) {
  guess++;
  count++;
}

console.log("Found the number!");
console.log("It took", count, "guesses.");