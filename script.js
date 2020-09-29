name = 'Rashad';
var name;
console.log(name); 

setName(); 
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log(`Before findAverage() is called.`); 
let myAverage = findAverage(80, 88); 
console.log(`After findaverage() was called. myAverage() is ${myAverage}!`); 
function findAverage(number1, number2) {
    console.log(`Inside of findAverage().`); 
    var answer = (number1 + number2) / 2;
    return answer;
}

// Create an array called fruits
let fruits = [`grape`, `pinapple`, `strewberrys`];
let favoriteFruit; 
let leastFavoriteFruit; 

function printFruit(index) {
    console.log(`Print first fruit: ${fruits[index]}`); 
    let favoriteFruit = fruits[1];
    let leastFavoriteFruit = fruits[2]; 

    function printMyFavoriteFruit() {
        console.log(`Print my favorite fruit: ${favoriteFruit}`); 
    }
    printMyFavoriteFruit(1); 
}

console.log(`Print my least-favorite fruit: ${leastFavoriteFruit}`); 
printFruit(2); 

myName();
function myName() {
    console.log(`My name is: ${name}`);
}

