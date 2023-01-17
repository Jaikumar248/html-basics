const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo").innerHTML = "The Total is: " + total;

const pi = 3.14;
let person = "jai";
let answer = "yes I am!"
document.getElementById("demo").innerHTML = pi + "<br>" + person + "<br>" + answer;

try {
    const cars = ["saab", "Volvo", "BMW"];
    cars = ["toyato", "Volvo", "Audi"];
}
catch (err) {
    document.getElementById("demo").innerHTML = err;
}

let x;
x=9;
x = "jaikumar";

document.getElementById("demo").innerHTML = x;

let car1 = "volvo xc60";
let car2 = "volvo xc60";

document.getElementById("demo").innerHTML = car1 + "<br>" + car2

// Arrays
let array = ["jai", "abbd", "foi"]

document.getElementById("demo").innerHTML = array[1];

// Functions

function myFunction(p1, p2){
    return p1+p2;
}
document.getElementById("demo").innerHTML = myFunction(3, 3);

var a = myFunction(3, 5);
document.getElementById("demo").innerHTML = a;

function myFunction(b, c) {
    return b + c;
}

//Local Variables
// objects.....

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
document.getElementById("demo").innerHTML = "The car model is" + " " +  car.model;

const person1 = {
    firstName: "Jai",
    lastName: "kumar",
    id: "123",
    fullName: function() {
        return this.firstName + " " + this.id;
    }



}

document.getElementById("demo").innerHTML = person1.fullName();

//String in Java Script..
let text = "jaikumar";
document.getElementById("demo").innerHTML = text.length;


let text1 = "I am \"jaikumar\" ";
document.getElementById("demo").innerHTML = text1;

let text2 = "The character \\ is called backslash";
document.getElementById("demo").innerHTML = text2;

function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace("microsoft", "W3school")
}

let text3 = "I love cats. Cats are very easy to love. Cats are very popular."
text3 = text3.replaceAll("Cats", "Dogs")
document.getElementById("demo").innerHTML = text3;

function myFunction() {
    let upper = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = upper.toUpperCase();
}

function myFunction1() {
    let lower = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = lower.toLowerCase();
}
let name0 = "Hello";
let name1 = "jai";
let name2 = "kumar";
let name3 = name0.concat(" ", name1, " ", name2);
document.getElementById("demo3").innerHTML = name3;

//converting number to string 

let num = 5;
let con = num.toString();
let pad = con.padEnd(4, "2");
document.getElementById("demo3").innerHTML = pad;

// Exctracting the string characters
let char = "jaikumar";
document.getElementById("demo3").innerHTML = char.charCodeAt(2);

let char1 = "jaikumar";
let prop = char1[3];
document.getElementById("demo3").innerHTML = prop;

//converthing a String to an Array...
let array2 = "1,2, 3, 4, 5";
const myArray = array2.split(",")
document.getElementById("demo3").innerHTML = myArray[2];

let str = "I am jaikumar";
document.getElementById("demo3").innerHTML = str.lastIndexOf("I");

let str1 = "The rain in SPAIN stays mainly in the plain";
const arr1 = str1.match(/ain/gi);
document.getElementById("demo3").innerHTML = arr1.length + " " + arr1;

// matchAll() method 

let str2 = "The rain in SPAIN stays mainly in the plain cats Cats CATS";
const arr2 = str2.matchAll(/cats/gi);
document.getElementById("demo3").innerHTML = Array.from(arr2);

//includes methods

let str3 = "Hello world, welcome to the universe.";
document.getElementById("demo3").innerHTML = str3.includes("worldaa");

let str4 = "Hello world, welcome to the universe."
document.getElementById("demo3").innerHTML = str4.startsWith("Hello, 9 ")

//Interpolation 
let firstname = "jai";
let lastname = "kumar";

let interp = `Welcome ${firstname}, ${lastname}`;
document.getElementById("demo3").innerHTML = interp;

// Java Script Numbers.....
let x1 =10;
let x2 ="apple";
let x3 = x1 * x2;
document.getElementById("demo3").innerHTML = x3;

//BigInt ...
let x4 = 12345678987654323456787654n;
let x5 = BigInt(2345678900987654323456789987654);

document.getElementById("demo3").innerHTML = x4 + "<br>" + x5;

// number method 
 document.getElementById("demo3").innerHTML = 
  Number(true);

document.getElementById("demo3").innerHTML = 
 parseInt("-100") + "<br>" +
 parseInt("10 years");

 // Arrays in java script.....
const array1 = ["Saab", "BMW", "Volvo"];
document.getElementById("demo3").innerHTML = array1;

const array3 = [];
array3[0]= "Saab";
array3[2]="volvo";
document.getElementById("demo3").innerHTML = array3;

const array4 = new Array("saab", "ehwhf");
array4[1]= "BMW"
document.getElementById("demo3").innerHTML = array4;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for (let i = 0; i < fLen; i++){
    ar[i] = fruits[i];
    document.getElementById("demo3").innerHTML = ar[i];
}




