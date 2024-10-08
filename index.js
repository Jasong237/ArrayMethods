const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name));
students.forEach((student) => console.log(student.grade));

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

/* const smartStudents = students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student)); */

/* const oldStudents = students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student)); */

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "HP", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Question 1
const items = products.forEach((product) => console.log(product));

// Question 2 not done yet

//

// Question 3
const categories = ["Electronics", "Accessories", "Furniture"];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

// Question 1
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

// Question 2
const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

// Question 3
const bestProducts = products.filter((product) => 4.5 <= product.rating);
console.log("Best Products", bestProducts);

// Question 1
const bProductsNames = products
  .filter((product) => 4.5 <= product.rating)
  .forEach((product) => console.log(product.name));

// Question 2
const affordableProducts = products
  .filter((product) => product.price < 1000)
  .forEach((product) => console.log(product));
