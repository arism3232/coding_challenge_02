// Task 1 - Working with Arrays
let products = ["Lip Balm", "Hand Cream", "Mints", "Gum", "Hand Sanitizer"]; // Array of products
products.push("Floss"); // Adding new product at the end of array
products.pop(); // Removing last product from the end of array
console.log("Updated product list:", products);

// Task 2 - Accessing and Modifying Arrays
let scores = [100, 99, 98, 97, 96]; // Array of scores
scores[1] = 92; // Updating the second score
let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Updated scores:", scores);
console.log("Average score:", averageScore);

// Task 3 - Working with Objects
let employee = {
    name: "Shin Ryujin",
    age: 23,
    department: "Customer Service",
    isActive: true
};
employee.department = "Sales"; // Updating department
employee.position = "Team Lead"; // Adding new property
console.log("Updated employee record:", employee);
