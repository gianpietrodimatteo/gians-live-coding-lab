// JavaScript Basic Syntax Reference

// Variables and Constants
let variableName = 'value';
const constantName = 'immutable';
var oldStyleVariable = 'legacy';

// Data Types
const string = 'Hello World';
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;

// Basic String Operations
const str = 'Hello World';
const upperCase = str.toUpperCase();
const lowerCase = str.toLowerCase();
const strLength = str.length;
const charAt = str.charAt(0);
const substring = str.substring(1, 5);
const indexOf = str.indexOf('o');

// Arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];

// Basic Array Methods
fruits.push('grape');           // Add to end
fruits.pop();                   // Remove from end
fruits.unshift('mango');        // Add to beginning
fruits.shift();                 // Remove from beginning
const arrayLength = fruits.length;
const index = fruits.indexOf('banana');

// Objects
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Object Access
const personName = person.name;
const personAge = person['age'];
person.country = 'USA';
delete person.city;

// Functions
function add(a, b) {
    return a + b;
}

function greet(name) {
    return 'Hello ' + name;
}

// Conditionals
const userAge = 25;
if (userAge >= 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// Ternary Operator
const status = userAge >= 18 ? 'Adult' : 'Minor';

// Switch Statement
const day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of week');
        break;
    case 'Friday':
        console.log('End of week');
        break;
    default:
        console.log('Regular day');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const fruit of fruits) {
    console.log(fruit);
}

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Basic Error Handling
try {
    const result = someRiskyOperation();
    console.log(result);
} catch (error) {
    console.log('Error:', error.message);
}

// Basic DOM (Browser only)
if (typeof document !== 'undefined') {
    const element = document.getElementById('myId');
    const elements = document.querySelectorAll('.myClass');
    
    element.textContent = 'New text';
    element.classList.add('active');
    
    element.addEventListener('click', function() {
        console.log('Clicked!');
    });
}

// Math Operations
const sum = 10 + 5;
const product = 10 * 5;
const remainder = 10 % 3;
const rounded = Math.round(3.7);
const random = Math.random();

// Type Checking
console.log(typeof 'hello');    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(Array.isArray([])); // true 