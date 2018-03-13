//get sides
var a = Number(prompt("Let find the square of any triangle. Enter length on all sides. a - ?"));
var b = Number(prompt('b - ?'));
var c = Number(prompt('c - ?'));
 
if (a < 0 || b < 0 || c < 0){
    alert("Incorrect data");
}


else{
//calculate square
let hp = (a+b+c)/2;
let s  = ((hp*(hp-a)*(hp-b)*(hp-c))**0.5).toFixed(2);

//find type of triangle
var typeT = 'Scalene';

var typeTriangle = function(a, b, c){
    return (Math.acos((a**2 + b**2 - c**2)/(2*b*a))*180)/Math.PI;
}

alpha = typeTriangle(a, b, c);
beta = typeTriangle(c, b, a);
gamma = typeTriangle(a, c, b);

//check the type
if (alpha==beta || alpha==gamma || gamma==beta){
    typeT = 'Isosceles';
}
else if (alpha==beta==gamma){
    typeT = 'Equilateral';
}
else if (alpha==90 || beta==90 || gamma == 90){
    typeT = 'Right';
}

//print result
alert("Type of triangle is "+typeT+" triangle and square is "+s)
}