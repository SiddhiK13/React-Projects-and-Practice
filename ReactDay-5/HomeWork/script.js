// 1. Write a program to calculate the addition, subtraction, multiplication, and division of two numbers in the same program using functions.
function calculate(num1, num2){
    console.log("Addition: " +(num1 + num2));
    console.log("Substract: "+ (num1-num2));
    console.log("multiplication: "+ (num1*num2));
    console.log("Division: "+ (num1/num2));
}
calculate(10,5);

// 2. Write a program to print the gross salary of the employee depending upon his basic salary using elseif and function.

function calculateGrossSalary(basicSalary) {
  let grossSalary;
  if (basicSalary <= 10000) {
    grossSalary = basicSalary + (basicSalary * 0.2); 
  } else if (basicSalary <= 20000) {
    grossSalary = basicSalary + (basicSalary * 0.3); 
  } else {
    grossSalary = basicSalary + (basicSalary * 0.4); 
  }
  return grossSalary;
}
let basic = 25000;
let gross = calculateGrossSalary(basic);
console.log("Gross Salary = " + gross);


// 3. Write a program to calculate the area of a triangle using a function.
function areaOfTriangle(side1,side2,side3){
    console.log("Area of triangle is :" ,side1+side2+side3);
}
areaOfTriangle(2,5,8);

// 4. Write a program to calculate the circumference using a function.
function circumference(radius){
    let circumference = 2 * Math.PI * radius;
    return circumference;
}
let result = circumference(5);
console.log("Circumference is: " + result);

// 5. Write a program to check whether the number is even or odd using function.
function checkEvenOdd(number){
    if(number%2==0){
        console.log(number + " is even number");
    }
    else{
        console.log(number + " is odd number");
    }
}
checkEvenOdd(7);

// 6. Write a program to check if the number is prime or not using a function.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let number = 11;
if (isPrime(number)) {
    console.log(number + " is a prime number");
    } else {
    console.log(number + " is not a prime number");
}

// 7. Write a program to find the perimeter of a rectangle using a function.

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
let length = 10;
let width = 5;
let perimeter = perimeterOfRectangle(length, width);
console.log("Perimeter of rectangle: " + perimeter);