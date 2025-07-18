// TypeScript Syntax Reference

// Basic Types
let tsMessage: string = 'Hello TypeScript';
let count: number = 42;
let isActive: boolean = true;
let value: null = null;
let data: undefined = undefined;

// Arrays
let tsNumbers: number[] = [1, 2, 3, 4, 5];
let tsFruits: Array<string> = ['apple', 'banana', 'orange'];
let tsMixed: (string | number)[] = ['hello', 42, 'world'];

// Tuples
let coordinate: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ['John', 30, true];

// Enums
enum Color {
    Red,
    Green,
    Blue
}

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const selectedColor: Color = Color.Red;
const movement: Direction = Direction.Up;

// Any and Unknown
let anything: any = 'could be anything';
let unknownValue: unknown = 'safer than any';

// Type Assertions
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;
let altStrLength: number = (<string>someValue).length;

// Union Types
let id: string | number = 123;
let tsStatus: 'loading' | 'success' | 'error' = 'loading';

// Literal Types
type Theme = 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';

let currentTheme: Theme = 'light';
let buttonSize: Size = 'medium';

// Type Aliases
type User = {
    id: number;
    name: string;
    email: string;
};

type Point = {
    x: number;
    y: number;
};

// Interfaces
interface Person {
    readonly id: number;
    name: string;
    age?: number; // Optional property
    email: string;
}

interface Employee extends Person {
    department: string;
    salary: number;
}

// Interface for functions
interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a, b) => a + b;

// Object Types
let user: Person = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
};

let employee: Employee = {
    id: 1,
    name: 'Jane Smith',
    email: 'jane@company.com',
    department: 'Engineering',
    salary: 75000
};

// Function Types
function tsGreet(name: string): string {
    return `Hello, ${name}!`;
}

function calculate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

// Arrow Function Types
const multiply = (a: number, b: number): number => a * b;
const divide: (a: number, b: number) => number = (a, b) => a / b;

// Optional and Default Parameters
function createUser(name: string, age?: number, isActive: boolean = true): User {
    return {
        id: Math.random(),
        name,
        email: `${name.toLowerCase()}@example.com`
    };
}

// Rest Parameters
function tsSum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function Overloads
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: string | number | boolean): string {
    return String(value);
}

// Classes
class TSAnimal {
    protected name: string;
    private _age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    
    public speak(): string {
        return `${this.name} makes a sound`;
    }
    
    get age(): number {
        return this._age;
    }
    
    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        }
    }
    
    static getSpecies(): string {
        return 'Unknown';
    }
}

class TSDog extends TSAnimal {
    private breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    speak(): string {
        return `${this.name} barks`;
    }
    
    getBreed(): string {
        return this.breed;
    }
}

// Abstract Classes
abstract class Shape {
    abstract area(): number;
    
    display(): void {
        console.log(`Area: ${this.area()}`);
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    area(): number {
        return this.width * this.height;
    }
}

// Generics
function identity<T>(arg: T): T {
    return arg;
}

function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

// Generic Interfaces
interface Repository<T> {
    findById(id: number): T | undefined;
    findAll(): T[];
    save(entity: T): T;
    delete(id: number): boolean;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Generic Classes
class DataStore<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    get(index: number): T | undefined {
        return this.items[index];
    }
    
    getAll(): T[] {
        return [...this.items];
    }
}

// Generic Constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Utility Types
interface UserProfile {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

// Partial - makes all properties optional
type PartialUser = Partial<UserProfile>;

// Required - makes all properties required
type RequiredUser = Required<UserProfile>;

// Pick - select specific properties
type UserBasicInfo = Pick<UserProfile, 'id' | 'name' | 'email'>;

// Omit - exclude specific properties
type UserWithoutId = Omit<UserProfile, 'id'>;

// Record - create type with specific keys and values
type UserRoles = Record<string, string[]>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<UserProfile>;

// Type Guards
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function isUser(obj: unknown): obj is User {
    return typeof obj === 'object' && 
           obj !== null && 
           'id' in obj && 
           'name' in obj && 
           'email' in obj;
}

// Conditional Types
type CustomNonNullable<T> = T extends null | undefined ? never : T;

type ApiResult<T> = T extends string 
    ? { message: T } 
    : T extends number 
    ? { count: T } 
    : { data: T };

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// Index Signatures
interface StringDictionary {
    [key: string]: string;
}

interface NumberDictionary {
    [key: string]: number;
    length: number; // OK, length is a number
}

// Modules and Namespaces
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    
    export class EmailValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
        }
    }
}

// Async/Await with Types
async function fetchUser(id: number): Promise<User> {
    const response = await fetch(`/api/users/${id}`);
    const data: User = await response.json();
    return data;
}

async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Promise Types
type AsyncResult<T> = Promise<T>;
type AsyncUser = AsyncResult<User>;
type AsyncUsers = AsyncResult<User[]>;

// Advanced Types
type EventMap = {
    click: { x: number; y: number };
    keypress: { key: string };
    load: {};
};

type EventKeys = keyof EventMap;
type EventHandler<K extends EventKeys> = (event: EventMap[K]) => void;

// Discriminated Unions
interface LoadingState {
    status: 'loading';
}

interface SuccessState {
    status: 'success';
    data: any;
}

interface ErrorState {
    status: 'error';
    error: string;
}

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
    switch (state.status) {
        case 'loading':
            console.log('Loading...');
            break;
        case 'success':
            console.log('Data:', state.data);
            break;
        case 'error':
            console.log('Error:', state.error);
            break;
    }
}

// Type Inference
let inferredString = 'Hello'; // inferred as string
let inferredNumber = 42; // inferred as number
let inferredArray = [1, 2, 3]; // inferred as number[]

// Context Type
window.onload = function(event) {
    // event is inferred as Event
    console.log(event.target);
};

// Best Return Type
function createArray() {
    return [1, 2, 3]; // inferred as number[]
}

// Template Literal Types
type World = 'world';
type Greeting = `hello ${World}`; // 'hello world'

type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // 'onClick'

// Examples of usage
const userStore = new DataStore<User>();
const numberStore = new DataStore<number>();

const tsDog = new TSDog('Rex', 3, 'German Shepherd');
const rect = new Rectangle(10, 20);

const validator = new Validation.EmailValidator();
const isValid = validator.isAcceptable('test@example.com'); 