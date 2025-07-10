//Comparing two variables using comparison operators
let a=2; 
let b=3;
console.log("a:",a+" ","b:",b)
console.log("a > b: ",a>b)
console.log("a < b: ",a<b)
console.log("a >= b: ",a>=b)
console.log("a <= b: ",a<=b)
console.log("a == b: ",a==b)
console.log("a != b: ",a!=b)
console.log("a === b: ",a===b)
console.log("a !== b: ",a!==b)

//Program to check whether the number is even or odd
let n=10
if(n%2==0){
    console.log(n+" is","Even Number")
} else {
    console.log(n+" is","Odd Number")
}

//Program to check if a person is adult or not
person=18;
if(person>=18){
    console.log("Person is Adult")
} else {
    console.log("Person is not Adult")
}

//Program to check student's score
let score=88;
if(score>=90){
    console.log("A")
} else if(score>=75){
    console.log("B")
} else if(score>=60){
    console.log("C")
} else if(score>=45){
    console.log("D")
} else {
    console.log("E")
}

//Program to check temperature
let temp=7;
if(temp<=10){
    console.log("Cold")
}else if(temp>10 && temp<=19){
    console.log("Cool")
}else if(temp>=20 && temp<30){
    console.log("Warm")
}else if(temp>=30){
    console.log("Hot")
}else{
    console.log("Enter temperature from 20")
}


