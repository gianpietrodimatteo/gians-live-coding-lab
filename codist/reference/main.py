# Python Syntax Reference

# Variables and Basic Types
name = "John Doe"
age = 30
height = 5.9
is_active = True
value = None

# String Operations
first_name = "John"
last_name = "Doe"
full_name = f"{first_name} {last_name}"
upper_name = name.upper()
lower_name = name.lower()
name_parts = name.split(" ")
joined_name = " ".join(name_parts)

# Numbers
integer = 42
floating = 3.14159
complex_num = 3 + 4j

# Mathematical Operations
result = 10 + 5 * 2
power = 2 ** 3
division = 10 / 3
floor_division = 10 // 3
modulo = 10 % 3

# Lists
fruits = ["apple", "banana", "orange", "grape"]
numbers = [1, 2, 3, 4, 5]
mixed_list = ["string", 42, True, None]

# List Methods
fruits.append("mango")
fruits.insert(1, "kiwi")
fruits.remove("banana")
popped = fruits.pop()
fruits.extend(["pear", "peach"])
fruits.sort()
fruits.reverse()

# List Comprehensions
squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]
word_lengths = [len(word) for word in fruits]

# Tuples
coordinates = (10, 20)
person_info = ("John", 30, "Engineer")
single_item_tuple = ("item",)

# Tuple Unpacking
x, y = coordinates
name, age, profession = person_info

# Dictionaries
person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "is_active": True
}

# Dictionary Methods
keys = person.keys()
values = person.values()
items = person.items()
name = person.get("name", "Unknown")
person.update({"country": "USA", "age": 31})

# Dictionary Comprehensions
squared_dict = {x: x**2 for x in range(5)}
filtered_dict = {k: v for k, v in person.items() if isinstance(v, str)}

# Sets
unique_numbers = {1, 2, 3, 4, 5}
fruits_set = {"apple", "banana", "orange"}

# Set Operations
fruits_set.add("mango")
fruits_set.discard("banana")
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2
intersection = set1 & set2
difference = set1 - set2

# Conditionals
if age >= 18:
    status = "Adult"
elif age >= 13:
    status = "Teenager"
else:
    status = "Child"

# Ternary Operator
status = "Adult" if age >= 18 else "Minor"

# Loops
# For loop with range
for i in range(5):
    print(i)

# For loop with list
for fruit in fruits:
    print(fruit)

# For loop with enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# For loop with dictionary
for key, value in person.items():
    print(f"{key}: {value}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Functions
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def add_numbers(a, b):
    return a + b

def calculate(*args, **kwargs):
    operation = kwargs.get("operation", "sum")
    if operation == "sum":
        return sum(args)
    elif operation == "product":
        result = 1
        for num in args:
            result *= num
        return result

# Lambda Functions
square = lambda x: x**2
add = lambda a, b: a + b
is_even = lambda x: x % 2 == 0

# Higher-order Functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared = list(map(square, numbers))
evens = list(filter(is_even, numbers))
from functools import reduce
total = reduce(add, numbers)

# Classes and Objects
class Animal:
    species_count = 0  # Class variable
    
    def __init__(self, name, species):
        self.name = name
        self.species = species
        Animal.species_count += 1
    
    def speak(self):
        return f"{self.name} makes a sound"
    
    def __str__(self):
        return f"{self.name} the {self.species}"
    
    def __repr__(self):
        return f"Animal('{self.name}', '{self.species}')"
    
    @classmethod
    def get_species_count(cls):
        return cls.species_count
    
    @staticmethod
    def is_valid_name(name):
        return isinstance(name, str) and len(name) > 0

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Canine")
        self.breed = breed
    
    def speak(self):
        return f"{self.name} barks"
    
    def fetch(self):
        return f"{self.name} fetches the ball"

# Object Creation and Usage
dog = Dog("Rex", "German Shepherd")
print(dog.speak())
print(dog.fetch())

# Properties and Decorators
class Person:
    def __init__(self, first_name, last_name):
        self._first_name = first_name
        self._last_name = last_name
        self._age = 0
    
    @property
    def full_name(self):
        return f"{self._first_name} {self._last_name}"
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if value >= 0:
            self._age = value
        else:
            raise ValueError("Age must be non-negative")

# Exception Handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No exception occurred")
finally:
    print("This always executes")

# Custom Exceptions
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

def validate_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
    return age

# File Operations
# Writing to file
try:
    with open("sample.txt", "w") as file:
        file.write("Hello, World!\n")
        file.write("Python file operations\n")
except IOError as e:
    print(f"Error writing file: {e}")

# Reading from file
try:
    with open("sample.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found")
except IOError as e:
    print(f"Error reading file: {e}")

# Working with JSON
import json

data = {
    "name": "John Doe",
    "age": 30,
    "hobbies": ["reading", "coding", "hiking"]
}

# Convert to JSON string
json_string = json.dumps(data, indent=2)

# Parse JSON string
parsed_data = json.loads(json_string)

# Modules and Imports
import math
import datetime as dt
from random import randint, choice
from collections import defaultdict, Counter

# Using imported modules
pi = math.pi
sqrt_16 = math.sqrt(16)
now = dt.datetime.now()
random_number = randint(1, 100)
random_fruit = choice(fruits)

# Collections
# defaultdict
dd = defaultdict(list)
dd["fruits"].append("apple")

# Counter
word_count = Counter("hello world")
letter_frequencies = Counter(fruits)

# Regular Expressions
import re

email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
phone_pattern = r'^\d{3}-\d{3}-\d{4}$'

def validate_email(email):
    return re.match(email_pattern, email) is not None

def extract_numbers(text):
    return re.findall(r'\d+', text)

# List slicing
numbers = list(range(10))
first_three = numbers[:3]
last_three = numbers[-3:]
middle = numbers[2:7]
every_second = numbers[::2]
reversed_list = numbers[::-1]

# String formatting
name = "Alice"
age = 25
formatted_f = f"Name: {name}, Age: {age}"
formatted_format = "Name: {}, Age: {}".format(name, age)
formatted_percent = "Name: %s, Age: %d" % (name, age)

# Generators
def fibonacci_generator(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# Generator expression
squares_gen = (x**2 for x in range(10))

# Decorators
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Function completed"

# Context Managers
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Usage: with FileManager("test.txt", "w") as f:
#            f.write("Hello")

# Iterator Protocol
class NumberIterator:
    def __init__(self, max_num):
        self.max_num = max_num
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max_num:
            num = self.current
            self.current += 1
            return num
        else:
            raise StopIteration

# Useful Built-in Functions
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
maximum = max(numbers)
minimum = min(numbers)
length = len(numbers)
all_positive = all(x > 0 for x in numbers)
any_even = any(x % 2 == 0 for x in numbers)

# Zip and enumerate
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
paired = list(zip(names, ages))
enumerated = list(enumerate(names))

# Sorting
sorted_numbers = sorted(numbers, reverse=True)
sorted_names = sorted(names, key=len)

# Type hints (Python 3.5+)
from typing import List, Dict, Optional, Union

def process_items(items: List[str]) -> Dict[str, int]:
    return {item: len(item) for item in items}

def find_user(user_id: int) -> Optional[Dict[str, Union[str, int]]]:
    # Mock function that might return None
    if user_id > 0:
        return {"id": user_id, "name": "User"}
    return None

# Main execution guard
if __name__ == "__main__":
    print("This script is being run directly")
    print(f"Greeting: {greet('Python')}")
    print(f"Sum: {add_numbers(5, 3)}")
    print(f"Animal count: {Animal.get_species_count()}") 