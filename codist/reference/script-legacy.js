// Legacy JavaScript (Pre-ES6) Reference

// Variable Declarations (var behavior)
var globalVar = 'function scoped';
function testVarScope() {
    if (true) {
        var insideBlock = 'still function scoped';
    }
    console.log(insideBlock); // accessible
}

// Function Expressions
var functionExpression = function(a, b) {
    return a + b;
};

// Named Function Expression
var factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

// Anonymous Function (as callback)
[1, 2, 3].map(function(x) { 
    return x * 2; 
});

// IIFE (Immediately Invoked Function Expression)
var result = (function(a, b) {
    return a + b;
})(5, 3);

// Module Pattern with IIFE
var myModule = (function() {
    var privateVar = 'secret';
    var privateMethod = function() {
        return 'private';
    };
    
    return {
        publicMethod: function() {
            return privateVar;
        },
        anotherMethod: function() {
            return privateMethod();
        }
    };
})();

// Constructor Functions (Pre-class syntax)
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Method inside constructor (not recommended)
    this.sayHello = function() {
        return 'Hello, I am ' + this.name;
    };
}

// Adding methods to prototype
Person.prototype.getAge = function() {
    return this.age;
};

Person.prototype.setAge = function(newAge) {
    this.age = newAge;
};

Person.prototype.greet = function() {
    return 'Hello from ' + this.name;
};

// Static method (function property)
Person.getSpecies = function() {
    return 'Homo sapiens';
};

// Inheritance with prototypes
function Employee(name, age, department) {
    Person.call(this, name, age); // Call parent constructor
    this.department = department;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Override parent method
Employee.prototype.greet = function() {
    return 'Hello, I work in ' + this.department;
};

// New method
Employee.prototype.work = function() {
    return this.name + ' is working';
};

// Factory Pattern
function createUser(name, role) {
    return {
        name: name,
        role: role,
        sayHello: function() {
            return 'Hello, I am ' + this.name;
        },
        getRole: function() {
            return this.role;
        }
    };
}

// Object Creation Patterns
var obj1 = new Object();
obj1.name = 'John';

var obj2 = Object.create(null); // No prototype
obj2.name = 'Jane';

// Polyfill Example (Array.forEach for old browsers)
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

// Namespace Pattern
var MyApp = MyApp || {};
MyApp.utils = {
    trim: function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    },
    isArray: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
};

// Revealing Module Pattern
var calculator = (function() {
    var result = 0;
    
    function add(x) {
        result += x;
        return this;
    }
    
    function multiply(x) {
        result *= x;
        return this;
    }
    
    function getResult() {
        return result;
    }
    
    function reset() {
        result = 0;
        return this;
    }
    
    // Reveal public methods
    return {
        add: add,
        multiply: multiply,
        getResult: getResult,
        reset: reset
    };
})();

// Old-style string concatenation
var message = 'Hello ' + name + ', you are ' + age + ' years old';

// Old-style array methods
var numbers = [1, 2, 3, 4, 5];
var doubled = [];
for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// Old-style object property access
var person = { name: 'John', age: 30 };
var name = person.name;
var age = person['age'];

// Function hoisting example
console.log(hoistedFunction()); // Works due to hoisting

function hoistedFunction() {
    return 'I am hoisted';
}

// var hoisting example
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'Now I have a value'; 