// Java Syntax Reference

import java.util.*;
import java.util.stream.*;
import java.io.*;
import java.nio.file.*;
import java.time.*;
import java.util.function.*;

public class Main {
    // Instance variables
    private String name;
    private int age;
    private static int instanceCount = 0; // Class variable
    
    // Constructor
    public Main(String name, int age) {
        this.name = name;
        this.age = age;
        instanceCount++;
    }
    
    // Default constructor
    public Main() {
        this("Unknown", 0);
    }
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    
    // Static method
    public static int getInstanceCount() {
        return instanceCount;
    }
    
    // Override toString
    @Override
    public String toString() {
        return String.format("Main{name='%s', age=%d}", name, age);
    }
    
    // Override equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Main main = (Main) obj;
        return age == main.age && Objects.equals(name, main.name);
    }
    
    // Override hashCode
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    public static void main(String[] args) {
        // Primitive Data Types
        byte byteVar = 127;
        short shortVar = 32767;
        int intVar = 2147483647;
        long longVar = 9223372036854775807L;
        float floatVar = 3.14f;
        double doubleVar = 3.14159265359;
        char charVar = 'A';
        boolean boolVar = true;
        
        // String Operations
        String str1 = "Hello";
        String str2 = "World";
        String combined = str1 + " " + str2;
        String formatted = String.format("Hello %s, you are %d years old", "John", 30);
        String upperCase = str1.toUpperCase();
        String lowerCase = str1.toLowerCase();
        int length = str1.length();
        char firstChar = str1.charAt(0);
        String substring = str1.substring(1, 4);
        boolean contains = str1.contains("ell");
        String[] parts = combined.split(" ");
        
        // Arrays
        int[] numbers = {1, 2, 3, 4, 5};
        String[] fruits = {"apple", "banana", "orange"};
        int[] dynamicArray = new int[10];
        
        // Array operations
        Arrays.fill(dynamicArray, 0);
        Arrays.sort(numbers);
        int foundIndex = Arrays.binarySearch(numbers, 3);
        String arrayString = Arrays.toString(numbers);
        
        // 2D Arrays
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        // ArrayList
        List<String> fruitList = new ArrayList<>();
        fruitList.add("apple");
        fruitList.add("banana");
        fruitList.add("orange");
        fruitList.add(1, "grape"); // Insert at index
        String firstFruit = fruitList.get(0);
        fruitList.remove("banana");
        fruitList.remove(0); // Remove by index
        boolean hasApple = fruitList.contains("apple");
        int size = fruitList.size();
        
        // LinkedList
        List<Integer> linkedNumbers = new LinkedList<>();
        linkedNumbers.add(1);
        linkedNumbers.add(2);
        linkedNumbers.add(3);
        
        // HashMap
        Map<String, Integer> ageMap = new HashMap<>();
        ageMap.put("John", 30);
        ageMap.put("Jane", 25);
        ageMap.put("Bob", 35);
        Integer johnAge = ageMap.get("John");
        Integer defaultAge = ageMap.getOrDefault("Unknown", 0);
        boolean hasJohn = ageMap.containsKey("John");
        Set<String> keys = ageMap.keySet();
        Collection<Integer> values = ageMap.values();
        Set<Map.Entry<String, Integer>> entries = ageMap.entrySet();
        
        // HashSet
        Set<String> uniqueFruits = new HashSet<>();
        uniqueFruits.add("apple");
        uniqueFruits.add("banana");
        uniqueFruits.add("apple"); // Duplicate, won't be added
        boolean hasUniqueBanana = uniqueFruits.contains("banana");
        
        // TreeSet (sorted)
        Set<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(5);
        sortedNumbers.add(1);
        sortedNumbers.add(3);
        
        // Control Structures
        // If-else
        int score = 85;
        String grade;
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        
        // Ternary operator
        String result = (score >= 60) ? "Pass" : "Fail";
        
        // Switch statement
        int day = 3;
        String dayName;
        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            default:
                dayName = "Unknown";
        }
        
        // Enhanced switch (Java 14+)
        String dayNameNew = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            default -> "Unknown";
        };
        
        // Loops
        // For loop
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // Enhanced for loop (for-each)
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
        
        for (int number : numbers) {
            System.out.println("Number: " + number);
        }
        
        // While loop
        int count = 0;
        while (count < 5) {
            System.out.println("While count: " + count);
            count++;
        }
        
        // Do-while loop
        int doCount = 0;
        do {
            System.out.println("Do-while count: " + doCount);
            doCount++;
        } while (doCount < 3);
        
        // Exception Handling
        try {
            int division = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes");
        }
        
        // Try with resources
        try (BufferedReader reader = Files.newBufferedReader(Paths.get("sample.txt"))) {
            String line = reader.readLine();
            System.out.println(line);
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
        
        // Method calls
        printMessage("Hello from method");
        int sum = addNumbers(5, 3);
        int maxNumber = Math.max(10, 20);
        double randomValue = Math.random();
        
        // Object creation and usage
        Main person1 = new Main("Alice", 30);
        Main person2 = new Main();
        person2.setName("Bob");
        person2.setAge(25);
        
        System.out.println(person1);
        System.out.println("Instance count: " + Main.getInstanceCount());
        
        // Stream API examples
        List<Integer> numberList = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Filter and collect
        List<Integer> evenNumbers = numberList.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        
        // Map and reduce
        int sumOfSquares = numberList.stream()
            .mapToInt(n -> n * n)
            .sum();
        
        // Find operations
        Optional<Integer> firstEven = numberList.stream()
            .filter(n -> n % 2 == 0)
            .findFirst();
        
        boolean anyGreaterThan5 = numberList.stream()
            .anyMatch(n -> n > 5);
        
        // Sorting
        List<String> sortedFruits = fruitList.stream()
            .sorted()
            .collect(Collectors.toList());
        
        // Date and Time
        LocalDate today = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        LocalDateTime now = LocalDateTime.now();
        ZonedDateTime zonedNow = ZonedDateTime.now();
        
        LocalDate specificDate = LocalDate.of(2024, 1, 1);
        LocalDate nextWeek = today.plusWeeks(1);
        long daysBetween = ChronoUnit.DAYS.between(specificDate, today);
        
        // Lambda expressions
        // Functional interfaces
        Predicate<Integer> isEven = n -> n % 2 == 0;
        Function<String, Integer> stringLength = s -> s.length();
        Consumer<String> printer = System.out::println;
        Supplier<Double> randomSupplier = Math::random;
        
        // Using lambdas
        fruitList.forEach(printer);
        boolean isNumberEven = isEven.test(4);
        int appleLength = stringLength.apply("apple");
        double randomNum = randomSupplier.get();
        
        // Method references
        fruitList.stream()
            .map(String::toUpperCase)
            .forEach(System.out::println);
        
        // Optional usage
        Optional<String> optionalFruit = fruitList.stream().findFirst();
        if (optionalFruit.isPresent()) {
            System.out.println("Found: " + optionalFruit.get());
        }
        
        String fruitOrDefault = optionalFruit.orElse("No fruit");
        optionalFruit.ifPresent(f -> System.out.println("Fruit: " + f));
        
        // Generic method call
        String[] stringArray = {"a", "b", "c"};
        Integer[] integerArray = {1, 2, 3};
        printArray(stringArray);
        printArray(integerArray);
        
        // Enum usage
        Day today_enum = Day.MONDAY;
        Season currentSeason = Season.SPRING;
        
        System.out.println("Today is: " + today_enum);
        System.out.println("Season: " + currentSeason.getDisplayName());
        
        // Working with files
        try {
            // Write to file
            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
            Files.write(Paths.get("output.txt"), lines);
            
            // Read from file
            List<String> readLines = Files.readAllLines(Paths.get("output.txt"));
            readLines.forEach(System.out::println);
            
        } catch (IOException e) {
            System.out.println("File operation error: " + e.getMessage());
        }
    }
    
    // Static method
    public static void printMessage(String message) {
        System.out.println("Message: " + message);
    }
    
    // Method with return value
    public static int addNumbers(int a, int b) {
        return a + b;
    }
    
    // Overloaded method
    public static int addNumbers(int a, int b, int c) {
        return a + b + c;
    }
    
    // Generic method
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    // Varargs method
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
}

// Abstract class
abstract class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Abstract method
    public abstract void makeSound();
    
    // Concrete method
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
}

// Concrete class extending abstract class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " fetches the ball");
    }
    
    public String getBreed() { return breed; }
}

// Interface
interface Drawable {
    void draw(); // implicitly public and abstract
    
    // Default method (Java 8+)
    default void display() {
        System.out.println("Displaying drawable object");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("This is a drawable interface");
    }
}

// Class implementing interface
class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }
    
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Multiple interface implementation
interface Movable {
    void move(int x, int y);
}

class MovableCircle extends Circle implements Movable {
    private int x, y;
    
    public MovableCircle(double radius, int x, int y) {
        super(radius);
        this.x = x;
        this.y = y;
    }
    
    @Override
    public void move(int newX, int newY) {
        this.x = newX;
        this.y = newY;
        System.out.println("Circle moved to (" + x + ", " + y + ")");
    }
    
    public int getX() { return x; }
    public int getY() { return y; }
}

// Enum
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Enum with constructor and methods
enum Season {
    SPRING("Spring Season"),
    SUMMER("Summer Season"),
    FALL("Fall Season"),
    WINTER("Winter Season");
    
    private String displayName;
    
    Season(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}

// Generic class
class Box<T> {
    private T content;
    
    public Box(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;
    }
    
    public void setContent(T content) {
        this.content = content;
    }
    
    public <U> void printType(U item) {
        System.out.println("Item type: " + item.getClass().getSimpleName());
    }
}

// Custom exception
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
    
    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
} 