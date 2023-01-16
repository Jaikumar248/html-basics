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