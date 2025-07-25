// JavaScript Patterns & Advanced Concepts

// Closures
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y; // inner function has access to x
    };
}

const addFive = outerFunction(5);
const result = addFive(3); // 8

// Counter with closure
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();

// Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        };
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const addTwo = curriedAdd(2);

// Partial Application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

const multiply = (a, b, c) => a * b * c;
const doublePartial = partial(multiply, 2);

// Memoization
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Debounce
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle
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

// String/Character Manipulation
const str = 'Hello World';
const charCode = str.charCodeAt(0); // 72 (ASCII code for 'H')
const fromCharCode = String.fromCharCode(72, 101, 108, 108, 111); // 'Hello'
const padded = 'test'.padStart(8, '0'); // '0000test'

// Bitwise Operations
const a = 5;  // 101 in binary
const b = 3;  // 011 in binary

const bitwiseAnd = a & b;    // 1 (001)
const bitwiseOr = a | b;     // 7 (111)
const bitwiseXor = a ^ b;    // 6 (110)
const leftShift = a << 1;    // 10 (1010)
const rightShift = a >> 1;   // 2 (010)

// Bitwise Utilities
const isEven = num => (num & 1) === 0;
const isPowerOfTwo = num => (num & (num - 1)) === 0;
const hasFlag = (flags, flag) => (flags & flag) === flag;

// Array Utilities
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

function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

// Object Utilities
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function pick(obj, keys) {
    return keys.reduce((picked, key) => {
        if (key in obj) picked[key] = obj[key];
        return picked;
    }, {});
}

function omit(obj, keys) {
    const keysSet = new Set(keys);
    return Object.keys(obj).reduce((result, key) => {
        if (!keysSet.has(key)) result[key] = obj[key];
        return result;
    }, {});
}

// Observer Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Singleton Pattern
const Singleton = (function() {
    let instance;
    
    function createInstance() {
        return {
            name: 'Singleton Instance',
            method: function() {
                return 'Singleton method called';
            }
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Factory Pattern
function createShape(type, ...args) {
    switch (type) {
        case 'circle':
            return { type: 'circle', radius: args[0] };
        case 'rectangle':
            return { type: 'rectangle', width: args[0], height: args[1] };
        case 'triangle':
            return { type: 'triangle', base: args[0], height: args[1] };
        default:
            throw new Error('Unknown shape type');
    }
}

// Pipe/Compose Functions
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

// Usage examples
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const pipeline = pipe(addOne, double, square);
const composition = compose(square, double, addOne);

// Async Utilities
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) throw error;
            await delay(1000 * attempt); // Exponential backoff
        }
    }
}

// Performance Utilities
function measureTime(fn) {
    return function(...args) {
        const start = performance.now();
        const result = fn.apply(this, args);
        const end = performance.now();
        console.log(`${fn.name} took ${end - start} milliseconds`);
        return result;
    };
}

// Type Checking Utilities
const isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
const isArray = isType('Array');
const isObject = isType('Object');
const isString = isType('String');
const isNumber = isType('Number');
const isFunction = isType('Function'); 