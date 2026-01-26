//1. Write a program to print your name using a function.

function printName(name){  //parameterized function used
    console.log("My Name is: "+ name);
}
printName("Siddhi");

// 2. Write a program to print the average marks of three subjects of a student.

function averageMarks(mark1,mark2,mark3){
    console.log("Average Marks: "+ (mark1+mark2+mark3)/3)
}
averageMarks(12,23,45);

// 3. Write a program to calculate the area of a circle using a function.

function area(radius){
    console.log("Area of Circle: "+ 3.14*radius*radius);
}
area(5);

// 4. Write a program to calculate the perimeter of a triangle using a function.

function perimeter(side1,side2,side3){
    console.log("Perimeter of triangle: ", side1+side2+side3);
}
perimeter(4,5,6);

// 5. Write a program to check whether the number is positive or negative using function.

function checkNumber(num){
    if(num>=0){
        console.log(num+" is a Positive Number");
    }else{
        console.log(num+" is a Negative Number")
    }
}
checkNumber(-5);


// 6. Write a program to print the square and cube of a number using a function.

function squareAndCube(num){
    console.log("Square of " + num + " is: "+ num*num);
    console.log("cube of "+num+ " is: " + num*num*num);
}
squareAndCube(3);


// 7. Write a program to check the greater number among two numbers using a function
function greaterNumber(num1,num2){
    if(num1<num2){
        console.log(num2 +" is greater number");
    }
    else{
        console.log(num1 + " is greater number");
    }
}
greaterNumber(14,6);