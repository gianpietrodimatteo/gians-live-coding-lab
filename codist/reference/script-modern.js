// Modern JavaScript (ES6+) Reference

// Template Literals
const userName = 'John';
const userAge = 30;
const message = `Hello ${userName}, you are ${userAge} years old`;

// Arrow Functions
const add = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
};
const square = x => x * x;
const greet = () => 'Hello World';

// Destructuring Arrays
const colors = ['red', 'green', 'blue'];
const [first, second, ...rest] = colors;

// Destructuring Objects
const person = { name: 'Alice', age: 25, city: 'NYC' };
const { name: personName, age: personAge } = person;
const { name: fullName, city, country = 'USA' } = person; // with default

// Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
const newPerson = { ...person, age: 26, country: 'USA' };

// Rest Parameters
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

// Array Methods (Modern)
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((acc, n) => acc + n, 0);
const found = numbers.find(n => n > 2);
const exists = numbers.some(n => n > 2);
const allPositive = numbers.every(n => n > 0);

// Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static getKingdom() {
        return 'Animalia';
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

// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve('Data loaded');
            } else {
                reject(new Error('Failed to load'));
            }
        }, 1000);
    });
};

// Promise Methods
Promise.all([promise1, promise2])
    .then(results => console.log(results));

Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Async/Await
async function getData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Fetch API
const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

// Default Parameters
const greetUser = (name = 'Guest', greeting = 'Hello') => {
    return `${greeting}, ${name}!`;
};

// Object Shorthand
const createUser = (name, age) => {
    return { name, age }; // same as { name: name, age: age }
};

// Computed Property Names
const dynamicKey = 'status';
const user = {
    name: 'John',
    [dynamicKey]: 'active'
};

// For...of Loop (Modern)
for (const item of ['a', 'b', 'c']) {
    console.log(item);
}

// Map and Set
const userMap = new Map();
userMap.set('name', 'John');
userMap.set('age', 30);
const mapUserName = userMap.get('name');

const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
uniqueNumbers.add(5);
const hasThree = uniqueNumbers.has(3);

// Symbol
const id = Symbol('id');
const userObj = {
    name: 'John',
    [id]: 12345
};

// Optional Chaining (ES2020)
const address = user?.profile?.address?.street;
const phoneNumber = user?.contact?.phone?.();

// Nullish Coalescing (ES2020)
const username = user.name ?? 'Anonymous';
const port = process.env.PORT ?? 3000;

// Module Syntax (ES6 Modules)
// export const PI = 3.14159;
// export default function calculator() {}
// import { PI } from './math.js';
// import calculator from './calculator.js'; 