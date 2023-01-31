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
// document.getElementById("demo3").innerHTML = name3;

//converting number to string 

let num = 5;
let con = num.toString();
let pad = con.padEnd(4, "2");
// document.getElementById("demo3").innerHTML = pad;

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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;
// for (let i = 0; i < fLen; i++){
//     let ar[i] = fruits[i];
//     document.getElementById("demo3").innerHTML = ar[i];
// }
const fruits = ["banana", "Orange", "Apple"];
document.getElementById("demo3").innerHTML = fruits;

function myFunction2() {
    fruits.push("Lemon");
document.getElementById("demo3").innerHTML = fruits;
}

const fruits1 =["banana", "Orange", "Apple"];
document.getElementById("demo3").innerHTML = fruits1.toString();

const fruits2 = ["a", "b", "c", "d"];
document.getElementById("demo3").innerHTML = fruits2.join(" + ");

const fruits3 = ["a", "bb", "cc", "aaaa"];
fruits3.shift();
document.getElementById("demo3").innerHTML = fruits3;

const myGirls = ["Cecilie", "Lone"];
const myboys = ["emil", "Tobias", "Linus"];
const myChildren = myboys.concat(myGirls);
document.getElementById("demo3").innerHTML = myChildren;

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 0, "aaa", "qqq");
document.getElementById("demo3").innerHTML = fruits4;

const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
let removed = fruits5.splice(2, 2, "aa", "bbb");
document.getElementById("demo3").innerHTML = fruits5;
// document.getElementById("demo3").innerHTML = removed;

const someThing = ["Banana", "Orange", "Apple", "Mango"];
someThing.splice(0,2);
document.getElementById("demo3").innerHTML = someThing;

const sor = ["1", "2", "1", "3"];
sor.reverse();
document.getElementById("demo3").innerHTML = sor;


const number = [1, 2, 3, 4, 5];
let n = "";
number.forEach(myFunction3);
document.getElementById("demo3").innerHTML = n;

function myFunction3(value, index, number) {
    n += value + "<br>";
}

const number1 = [1, 2, 3, 4, 5];
let allOver18 = number1.every(myFunctions);

document.getElementById("demo3").innerHTML = allOver18;

function myFunctions(value) {
    return value > 19;
}

const number2 = [1, 2, 3, 4, 5];
const keys = number2.keys();

let txt = "";
for (let x of keys) {
    txt += x + "<br>"
}
document.getElementById("demo3").innerHTML = txt;

//Java script Date() method....
let d = new Date();
document.getElementById("demo3").innerHTML = d;


const d1 = new Date("October 13, 2014 11:11:00");
document.getElementById("demo3").innerHTML = d1;

const d2 = new Date(2023, 1, 5, 12, 30, 11);
document.getElementById("demo3").innerHTML = d2;

const d3 = new Date("2023-01-18");
document.getElementById("demo3").innerHTML = d3;

const date = new Date("2012-03-22");
document.getElementById("demo3").innerHTML = date.getMonth()+1;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d11 = new Date("2022-10-11");
let month = months[d11.getMonth()];
document.getElementById("demo3").innerHTML = month;

const d22 = new Date();
d22.setFullYear(2022);
document.getElementById("demo3").innerHTML = d22;

document.getElementById("demo3").innerHTML = Math.PI;


if (new Date().getHours() < 18) {
    document.getElementById("demo3").innerHTML = "Good Day!"
}

let hour = new Date().getHours();
let greeting ;
if (hour > 18) {
    greeting = "GOod Day!"
}
else {
    greeting = "Good Evening!"
}
document.getElementById("demo3").innerHTML = greeting;
 

// switch statments in java script.....

let day;
switch (new Date().getDay()) {
    case 0:
       day = "sunday" ;
       break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
     case 4:
        day = "Thursday";
        break;
    case 2:
        day = "Friday";
        break;
    case 3:
        day = "Saturday";
        break;
    default :
      day = "opps"
}

document.getElementById("demo3").innerHTML = day;

// For loop........
const loop = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let print = "";
for (let i=0; i<loop.length; i++){
    print += loop[i] + "<br>";
}
document.getElementById("demo3").innerHTML = print;

const obj = {
    fname:"jai",
    lname:"kumar",
    age:22
};
let txt1 = " ";
for (let x in obj) {
    txt1 += obj[x] + " ";
}
document.getElementById("demo3").innerHTML = txt1;

const numbs = [1, 2, 3, 4, 5];
let txt2 = "";
numbs.forEach(myFunction4) 
    document.getElementById("demo3").innerHTML = txt2;


function myFunction4(value, index, array){
    txt2 += value + "<br>";
}

const some = ["BMW", "Volvo", "Mini"];
let loopIn = "";
for (x of some){
    loopIn += x + "<br>"
}
document.getElementById("demo3").innerHTML = loopIn;


//creating the new set ...
const letters = new Set([1, 2, 3]);
let sets = " ";
for (const x of letters) {
    sets += x;
}
document.getElementById("demo3").innerHTML = sets;

// creating the map 

// const mapping = new Map([
//     ["apple", 400],
//     ["banana", 22],
//     ["orange", 222]
// ]);
// document.getElementById("demo3").innerHTML = mapping.get("apple");

const mapping = new Map();
 mapping.set("apples", 500);
 mapping.set("banana", 200);
 mapping.set("orange", 200);

 mapping.set("apples", 250);
 document.getElementById("demo3").innerHTML = mapping.has("banana");

 // Error handling .....
 try {
    adddlert("welcome")
 }
 catch(someWrong) {
    document.getElementById("demo3").innerHTML = someWrong;

 }

 function myFunctionError() {
    const message = document.getElementById("demo5").innerHTML = "";
    let x = document.getElementById("demo4").value;
    try {
        if(isNaN(x)) throw "This is not a number ";
        if (x < 5) throw "The Number is low ";
        if(x > 10) throw " the number is High";
    }
    catch(error) {
        message.innerHTML = "Input is " + error;
    }
 }

 let num11 = 1;
 try {
   decodeURI("%%%%")
 }
 catch(err) {
    document.getElementById("demo3").innerHTML = err;
 }

 const person11 = {
    firstName: "jai",
    lastName: "Kumar",
    id: 123,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
 };
 document.getElementById("demo3").innerHTML = person11.fullName();

 //Arrow Function ....

 let myFunctionArrow = (a,b) => a * b;
 document.getElementById("demo3").innerHTML = myFunctionArrow(2, 5);

 let hello = " ";
 hello = function() {
    return "hello world!";
 }
 document.getElementById("demo3").innerHTML = hello();

 hello = () => {
    return "hello world!!!!!!"
 }
 document.getElementById("demo3").innerHTML = hello()

 helo = 2;
 document.getElementById("demo3").innerHTML = helo;
 helo ="x";
 document.getElementById("demo3").innerHTML = helo;

 let add = (a, b) => a + b;
 document.getElementById("demo3").innerHTML = add(6, 7);

 for (let i = 0; i < 10 ; i++) {

 }
//CLASSES
 class cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age(x) {
        return x - this.year;
    }
 }

 let date1 = new Date();
 let year = date.getFullYear();
 let myCar = new cars("BMW", "2022");
 let myCarUp = new cars("BMW", "2014");
document.getElementById("demo3").innerHTML = myCarUp.age(year);


// Creating object using object Literal......
let movie = {
   name:"RRR",
   release:2022,
   directer:"SSR"
}
// console.log(movie)
document.getElementById("demo3").innerHTML = movie.name;
// Adding new properties in Object 
movie.budget = "500 crores"
console.log(movie)

// TO Create an Object by using new operator object constructor

let movie1 = new Object();
movie1.name = "KGF";
movie1.release = "2022";
movie1.director = "prashanthNeel";

console.log(movie1)

// Using new operator with Constructer function....
class user {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
}

let user1 = new user("jaikumar", 22, "pavagada");
console.log(user1);

// const person2 = {
//   fname:" John",
//   lname:" Doe",
//   age: 25,
//   car: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fait"
//   }
// };
// person2.nationality = "english";
// delete person2.age;
// text = "";

// for (let x in person2) {
//     text += person2[x];
// }
// document.getElementById("demo3").innerHTML =person2.car.car2;

// const myObj = {
//     name: "jai",
//     age: 22,
//     cars:
// }

// Methods in javascript

// const personName = {
//     fname: " jai",
//     lname: "kumar",
//     age: 22,
//     fullName: function() {
//         return this.fname + " " + this.lname + " " + this.age;
//     }
// };

// document.getElementById("demo3").innerHTML = personName.fullName();

// // let per = {
//     firstName: "jai",
//     lastName: "kumar",
//     age: "22"
// };
// per.nationality = "english";
// delete per.age;
// let text33 = "";
// for (let x in per) {
//     text33 += per[x];
// }
// document.getElementById(demo3).innerHTML = text33;

//Nested Objects..
// const myObject = {
//     name: "jai",
//     lname: "kumar",
//     cars: {
//         car1: "BMW",
//         car2: "Ford"
//     }
// };

//Nested Arrays and Objects.....
let xx = "";
const myObjects = {
    name: "jaikumar",
    age: 222,
    cars: [
        {name: "Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models:["320", "X3", "X5"]}
    ]
}

// for (let i in myObjects) {
//    xx += myObjects.cars[i].name;
//    for(let j in myObjects.cars) {
//     xx += myObjects.cars[i].models[j];
//    }
// }
document.getElementById("demo3").innerHTML = xx;

// JavaScript Object Methods 
const pers = {
    firstName: "jaikumar",
    lastName: "......",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo5").innerHTML = pers.fullName();

let person22 = {
name: "John",
    age: 30,
    city: "new York"
};


// document.getElementById("demo11").innerHTML = Object.values(person22);

document.getElementById("demo5").innerHTML = JSON.stringify(person22);

// Java Script Object Accessors...
const accessors = {
    name: "jaikumar",
    age: 22,
    language: "english",
    get lang() {
        return this.language;
    }
};
// document.getElementById("demo11").innerHTML = accessors.lang;

const accessor = {
    name: "jaikumar",
    age: 22,
    language: " ",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }

};
accessor.lang = "Kannada";

// document.getElementById("demo11").innerHTML = accessor.language;

// java Script Object Constructor...

// class Person {
//     constructor(first, last, age) {
//         this.fname = first;
//         this.lname = last;
//         this.age = age;

//     }
// }
// const myName = new Person("jai", "kumar", 22);
// // // document.getElementById("demo3").innerHTML = myName.age;
// // console.log(myName);

// class PersonA {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last,
//             this.age = age;
//         this.eyeColor = eye;
//     }
// }
// const myFather = new PersonA("john", "Doe", 50, "blue");
// const myMother = new PersonA("Sally", "Rally", 44, "green");
// console.log(  myFather.age );
// document.getElementById("demo5").innerHTML = "myfather age is " + myFather.age + "myMother age is " + myMother.age;
// class MyFunction {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eye = eye;

//     }
// }

// MyFunction.prototype.nationality = "english";
// const myFather1 = new Person("John", "Doe", 50, "blue");
// document.getElementById("demo3").innerHTML =
// "The nationality of my father is " + myFather1.nationality; 

// java script iterables...

const someThing2 = "Jaikumar";

let txt3 = "";
for (const x of someThing2) {
    txt3 += x + "<br>";

}
document.getElementById("demo3").innerHTML = txt3;

// create a set ...
const setts = new Set(["a", "b", "c"]);
document.getElementById("demo5").innerHTML = setts.size;

const literals = new Set();

// literals.add("a");

// const a = "a";
// const b = "b";

// literals.add(a);
// literals.add(b);

//Maps in Java script 
let fruits11 = new Map([
    ["apples", 500],
    ["banana", 200],
    ["Oranges", 100]
]);

document.getElementById("demo3").innerHTML = fruits11.get("apples");

const fruits12 = new Map();
fruits12.set("apples", 1000);
fruits12.set("banana", 230);

document.getElementById("demo3").innerHTML = fruits12.has("apples")

//Functions in javascript

const xxx = function (a, b) {  return a+b };
document.getElementById("demo3").innerHTML = xxx(2,3);

( function () {
    document.getElementById("demo3").innerHTML = "Hello I called myself";
}

) ( );

function myFunction(a, b) {
    return a + b;
}

let p = myFunction(4, 5);
document.getElementById("demo3").innerHTML = p;

const g = (x,y) => x+y;
document.getElementById("demo3").innerHTML = g(2, 3);

// document.getElementById("demo3").innerHTML = findMax(2, 4, 9);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("demo3").innerHTML = findMax(3, 9, -12, 3);

const myObje = {
    firstName: "Jai",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("demo3").innerHTML = myObje.fullName();

function myFunction11(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;

}
const person_t = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person_t1 = {
    firstName: "John",
    lastName: "Doe"
}
const person_t2 = {
    firstName: "Marry",
    lastName: "Doe"
}
let barrow = person_t.fullName.bind(person_t1);
document.getElementById("demo3").innerHTML = barrow;

const person12 = {
      firstName: "Jai",
      lastName: "Kumar",
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
};

const person13 = {
    firstName: "John",
    lastName: "Doe"
};

let barrowing = person12.fullName.bind(person13);
document.getElementById("demo3").innerHTML = barrowing();

// DOM Document objecr model  in javscript.....

const element = document.getElementById("intro");

document.getElementById("demo8").innerHTML = element.innerHTML;

const element1 = document.getElementsByTagName("p");
document.getElementById("demo8").innerHTML = element1[1].innerHTML;

const element2 = document.getElementById("main");
const elementx = element2.getElementsByTagName("p");

document.getElementById("demo8").innerHTML = elementx[0].innerHTML;

document.getElementById("demo11").style.color = "blue";

function changeText(id) {
    id.innerHTML = "Oops!";
}

function displayDate() {
    document.getElementById("demo22").innerHTML = Date();
}

// Using Events ..
// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//     document.getElementById("demo12").innerHTML = Date();
// }
// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Hello world");
// })

var xyz = document.getElementById("myBtn");
xyz.addEventListener("mouseover", myFunction);
xyz.addEventListener("click", mySecondFunction);
xyz.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo12").innerHTML +="Mouse Over!!!!<br>";
}

function mySecondFunction() {
    document.getElementById("dmeo12").innerHTML += "CLICKED <br>";
}

function myThirdFunction() {
   document.getElementById("demo12").innerHTML += "MouseOut <br>";
}

// document.getElementById("demo13").innerHTML = "screen width is " + navigator.appCodeName;

function myConfirm() {
    var txt = "";
    if (confirm("press a button")) {
        txt = "you pressed OK!"
    }
    else {
        txt = "you pressed Cancel!"
    }
    document.getElementById("demo13").innerHTML = txt;
}

// function myValid() {
//     const intObj =document.getElementById("id1");
//     if(! intObj.checkValidity()) {
//         document.getElementById("id2").innerHTML =
//         intObj.validationMessage;
//     } else {
//         document.getElementById("id2").innerHTML = "Input OK";
//     }
// }

function myValid() {
    let text = "Value OK";
    if (document.getElementById("id1").validity.rangeOverflow) {
        text = "Value too large";
    }
}

localStorage.setItem("name", "jaikumar");
document.getElementById("id2").innerHTML =
localStorage.getItem("name");


// promises in javaScript 

function myDisplayer(some) {
    document.getElementById("id2").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;

    if (x ==0) {
        myResolve("OK")
    }
    else {
        myReject("Some error is there");
    }
});
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

setTimeout(function() {myFunPromise("I am jaikumar"); }, 3000);
function myFunPromise(value) {
    document.getElementById("id2").innerHTML = value;
}
function myFunTime() {
    alert('Hello jai');
}

class myClass {
    constructor (name,year) {
        this.name = name;
        this.year = year;
    }
}

let myCars = new myClass("ford", "2022");

function myForm() {
    const myObj = document.getElementById("id3");
    if (!myObj.checkValidity()) {
        document.getElementById("id3").innerHTML = 
        myObj.validationMessage;
    } else {
        document.getElementById("id3").innerHTML =
        "Input OK";
    }
}
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("xml").innerHTML = 
        this.responseText;

    }
    xhttp.open("GET", "test.txt");
    xhttp.send();
}

const lett = new Set(["a", "a", "d"]);
console.log(lett);

const maps = new Map([
    ["apples", 300],
    ["Banana", 200],


]);
class CCarr {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
}
let myccarr = new CCarr("bmw", 2023);
console.log(myccarr);

let objects = {
    name : "Jaikumar",

};
objects.fname = function() {
    return this.name;
}
    
console.log(objects.fname());

function Con(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

const myname = new Con("John", "Doe", 20);
console.log(Con.age);

let promise = new Promise(
    function(resolve, error) {

        let data = true;
        if(data) {
            resolve("promise done")
        }
        else 
        error("promise not done")

    }
)

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if(x=='') {
        alert("name must be filled out");
        return false;
    }
}
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("add").innerHTML = Date();
}

let btn = document.getElementById("special");
let dataele = document.getElementById("data");

// btn.addEventListener("click", loadData)

function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'test.txt', true)

    xhr.send()

    xhr.onprogress = function() {
        dataele.innerHTML = "Loading..."
    }
    xhr.onload = function() {
        dataele.innerHTML = xhr.responseText;
    }
}

class mobiles {
    constructor(n,r) {
        this.name = n;
        this.ram = r;
    }
    set priceSet(p){
        if(p<=0){
            alert("price cannot be less than zero");
        }
        else {
            this.price = p;
        }
    }
    get getName() {
        return "mobile name is" + this.name;
    }
}

let m1 = new mobiles("oneplus", "6gb");
let m2 = new mobiles("redmi", "4gb");
m1.priceSet = 180000;
console.log(m1.name)


let fil = [45, 4, 9, 16, 25];
let fil1 = fil.every(myFun);

function myFun(value, index, array) {
    return value > 12;
}
let sli = "Banana, mango, orange";
let exc = sli.slice(0, 7);
console.log(exc);

function Function1(n, a, r) {
    this.name = n;
    this.age = a;
    this.rollNo = r;
}
Function1.prototype.lang = "english"
let myFun1 = new Function1("jai", 22, 220)
console.log(myFun1.lang);

let map1 = new Map ([
    ["apples", 300],
    ["banana", 100]
])

let check = "";
for (const x of map1.entries()) {
    check += x + "<br>";
}
console.log(check)

const call = {
    fullName: function(city, conytry) {
        return this.firstName + " " + this.lastNme + " " + city + " " + country;
    }
    
}
const call1 = {
    firstName : "John",
    lastName : "Doe"

}
let push1 =  ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = push1.slice(2)
console.log(citrus)

const arrray = [1, 2, 3, 3, 4, 5];
const arrray1 = arrray.every(myMapFun);

function myMapFun(value, index, array) {
    return value > 4;
}
console.log(arrray1)

let someVar = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let someVar1 = someVar.indexOf("Banana");
console.log(someVar1);

class Var {
    constructor(brand) {
        this.varName = brand;

    }
     present() {
        return this. varName;
     }
  
}

class Var1 {
    constructor(brand, mod) {
        // super(brand);
        this.modName = mod;

    }
    show() {
        return this.present() + this.modName;
    }
}

let myvar = new Var1("ford", "Mustang");


let promise1 = new Promise(
    function(success, error) {
        let datacame = true ;
        if(datacame){
            success("Running successfully")
        }
        else {
            error("ERRORR...")
        }
    }
)

promise1.then(function(data){
    console.log(data)
})
promise1.catch(function(error)
{
    console.log(error)
}
)


document.getElementById("myBtnn").addEventListener("click", function() {
    alert("Hello world")
});

const parar = document.createElement("p");
const node = document.createTextNode("This is the new paragraph");
parar.appendChild(node);
const elements = document.getElementById("first");
elements.appendChild(parar);

const para1 = document.createElement("p");
const node1 = document.createTextNode("This is New TEXT");
para1.appendChild(node1);
const elements1 = document.getElementById("first");
const child = document.getElementById("second")
elements1.insertBefore(para1, child);

