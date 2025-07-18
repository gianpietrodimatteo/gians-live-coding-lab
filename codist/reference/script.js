// JavaScript Syntax Reference

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
const symbol = Symbol('unique');
const bigint = 123n;

// Template Literals
const name = 'John';
const age = 30;
const message = `Hello ${name}, you are ${age} years old`;

// Arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = ['string', 42, true, null];

// Array Methods
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const found = numbers.find(num => num > 3);
const includes = numbers.includes(3);

// Array Destructuring
const [first, second, ...rest] = fruits;

// Objects
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    isActive: true
};

// Object Methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Object Destructuring
const { name: personName, age: personAge } = person;

// Object Spread
const updatedPerson = { ...person, age: 31, country: 'USA' };

// Functions
function regularFunction(param1, param2) {
    return param1 + param2;
}

// Arrow Functions
const arrowFunction = (param1, param2) => param1 + param2;
const singleParam = param => param * 2;
const noParams = () => 'Hello World';

// Default Parameters
function greet(name = 'World') {
    return `Hello, ${name}!`;
}

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Conditionals
if (age >= 18) {
    console.log('Adult');
} else if (age >= 13) {
    console.log('Teenager');
} else {
    console.log('Child');
}

// Ternary Operator
const status = age >= 18 ? 'Adult' : 'Minor';

// Switch Statement
switch (day) {
    case 'Monday':
        console.log('Start of work week');
        break;
    case 'Friday':
        console.log('TGIF');
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
    console.log(`${key}: ${person[key]}`);
}

while (condition) {
    // code block
}

// forEach Loop
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static getInfo() {
        return 'This is an Animal class';
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine');
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog('Rex', 'German Shepherd');

// Error Handling
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Error occurred:', error.message);
} finally {
    console.log('Cleanup code');
}

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve('Operation successful');
        } else {
            reject(new Error('Operation failed'));
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Promise completed'));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Fetch API
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
}

async function createPost(post) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    return response.json();
}

// DOM Manipulation
document.addEventListener('DOMContentLoaded', function() {
    // Element Selection
    const element = document.getElementById('myId');
    const elements = document.querySelectorAll('.myClass');
    const firstElement = document.querySelector('.myClass');
    
    // Element Creation
    const newElement = document.createElement('div');
    newElement.textContent = 'Hello World';
    newElement.className = 'new-element';
    
    // Element Manipulation
    element.textContent = 'New text';
    element.innerHTML = '<strong>Bold text</strong>';
    element.setAttribute('data-value', '123');
    element.classList.add('active');
    element.classList.remove('inactive');
    element.classList.toggle('visible');
    
    // Element Insertion
    document.body.appendChild(newElement);
    element.insertBefore(newElement, element.firstChild);
    
    // Event Handling
    element.addEventListener('click', function(event) {
        console.log('Element clicked');
        event.preventDefault();
    });
    
    // Form Handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form data:', data);
    });
});

// Local Storage
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// Session Storage
function saveToSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

// Regular Expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

// Utility Functions
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Array Utility Functions
function unique(array) {
    return [...new Set(array)];
}

function chunk(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
    );
}

function flatten(array) {
    return array.flat(Infinity);
}

// Object Utility Functions
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Date and Time
const now = new Date();
const timestamp = Date.now();
const isoString = now.toISOString();
const formatted = now.toLocaleDateString('en-US');

// Math Operations
const randomNumber = Math.random();
const randomInt = Math.floor(Math.random() * 100);
const rounded = Math.round(3.7);
const max = Math.max(1, 5, 3);
const min = Math.min(1, 5, 3);

// JSON Operations
const jsonString = JSON.stringify(person);
const parsedObject = JSON.parse(jsonString);

// Module Pattern (ES6 Modules would be in separate files)
const myModule = (function() {
    let privateVariable = 'private';
    
    function privateFunction() {
        return 'private function';
    }
    
    return {
        publicMethod: function() {
            return privateVariable;
        },
        anotherMethod: function() {
            return privateFunction();
        }
    };
})();

// Console Methods
console.log('Log message');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');
console.table(person);
console.time('timer');
console.timeEnd('timer'); 