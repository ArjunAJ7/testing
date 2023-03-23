// console.log("hello");
// let c = { a: 1, b: 2, c: 3 };
// const obj = { ...c, d: 3, f: 5 };
// obj.l = 6;
// console.log(obj);
// const arr = [1, 2, 4, 5];
// const [a, ...b] = arr;
// console.log(`a : ${a} b: ${b}`);
// for (const [i, val] of arr.entries()) {
//   console.log(`i: ${i} \n val: ${val}`);
// }

// const arrSlice = function (emp) {
//   console.log(emp.project.splice(1));
// };
// console.log(Math.random());

//creating and using promises
// const prom = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve("Yes");
//   } else {
//     reject("No");
//   }
// });

// prom.then((resolve) => console.log(resolve)).catch((err) => console.log(err));

//Testing out functions

// const str = "Hi welcome to bonbloc";
// const emp = {
//   name: "Sai",
//   dob: "born",
//   doj: "joined",
//   dept: 3,
//   project: ["dog", "cat"],
//   admin: true,
//   details: function () {
//     let x = this.name + " " + String(this.admin);
//     console.log(x);
//     return this.name.concat(String(this.admin));
//   },
// };
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [[1, 2, 3], ["hi", "hello", "bye"], { a: 1, b: 2, c: 3 }];

// let a = 10;
// let b = "20";
// let c = true;
// console.log(a + b);
// console.log(b + a);
// console.log(a * b);
// var employee = [
//   { name: "sai", age: 11, salary: 50000 },
//   { name: "alice", age: 21, salary: 30000 },
//   { name: "modhi", age: 60, salary: 60000 },
// ];

// employee.filter((val) => val.age > 25).map((val) => (val.salary += 10000));

// employee.forEach((val, i, arr) => {
//   if (val.age > 25) {
//     arr[i].salary += 10000;
//   }
// });
// employee.forEach((emp) => {
//   console.log(`Salary of ${emp.name} is ${emp.salary}`);
// });

// console.log(empDet);
// console.log(employee.fil);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You have been given an array of objects, where each object contains a string property called "name"
//  and a number property called "score". Your task is to write a JavaScript function
//  that takes this array as input and returns the name of the object with the highest score.

// const scores = [
//   { name: "John", score: 42 },
//   { name: "Jane", score: 73 },
//   { name: "Bob", score: 100 },
//   { name: "Mary", score: 59 },
// ];

// const findHighest = function (scores) {
//   let high = scores[0].score;
//   console.log(high);
//   let ind = 0;
//   scores.forEach((val, i, arr) => {
//     if (val.score > high) {
//       high = val.score;
//       ind = i;
//       console.log(`The index is ${i} and value is ${high}`);
//     }
//   });
//   return scores[ind].name;
// };

// console.log(findHighest(scores));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given an array of strings that represent user email addresses.
//  Your task is to write a JavaScript function that takes this array as input and returns an object
// that contains the number of unique domains and the number of users associated with each domain.

// const emails = [
//   "john@example.com",
//   "jane@example.com",
//   "john@example.com",
//   "bob@gmail.com",
//   "mary@yahoo.com",
//   "bob@gmail.com",
//   "alice@hotmail.com",
// ];

// const findUnique = function (emails) {
//   let emailId = [];
//   let userNames = [];
//   emails.forEach((val) => {
//     let [name, email] = val.split("@");
//     userNames.push(name);
//     emailId.push(email);
//   });
//   userNames.sort();
//   emailId.sort();
//   console.log(userNames, emailId);

//   let count = 0;
//   // function obj(count, user){
//   //   this.Count=count;
//   //   this.User=user;
//   // };
//   let obj = {};
//   let user = [];
//   for (let i = 0; i < emailId.length; ) {
//     for (let j = i; i < emailId.length; j++) {
//       if (emailId[i] == emailId[j]) {
//         count++;
//         user.push(userNames[j]);
//       } else {
//         console.log(user);
//         obj[emailId[i]] = { Count: count, User: user[0] };

//         i = j + 1;
//         count = 0;
//         user.splice(0, user.length);
//         break;
//       }
//     }
//   }
//   console.log(obj);
// };
// const out = findUnique(emails);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const inputArray = ["I like to eat", "My favorite food is", "I have a pet"];
// const inputObject = { eat: "pizza", food: "sushi" };

// const changearr = function (arr, obj) {
//   [val1, val2] = [...Object.keys(obj)];
//   [b1, b2] = [...Object.values(obj)];
//   console.log(typeof val1);
//   console.log(Object.keys(obj));
//   let str = [];
//   arr.forEach((val) => {
//     if (val.includes(val1)) {
//       str.push(val.replace(val1, obj[val1]));
//     } else if (val.includes(val2)) {
//       str.push(val.replace(val2, obj[val2]));
//     } else {
//       str.push(val);
//     }
//   });
//   return str;
// };

// const bano = changearr(inputArray, inputObject);
// console.log(bano);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given a string containing a list of tasks that need to be completed,
// separated by commas. Each task has a priority level assigned to it,
//  indicated by a number in parentheses following the task name. Your task is to write a JavaScript function
// that takes this string as input and returns an object that contains the tasks sorted by priority level.
// const tasks =
//   " Clean the house (3), Buy groceries (1), Do laundry (2), Walk the dog (1), Wash dishes (2)";

// const sorting = function (tasks) {
//   let str = tasks.split(",");
//   console.log(str);
//   let reg = /[0-9]/;
//   let out = {};
//   str.forEach((val) => {
//     let i = val.search(reg);
//     let num = val[i];
//     let strin = val.slice(0, i - 2);
//     if (!out[num]) {
//       let ar = [];
//       ar.push(strin);
//       out[num] = ar;
//     } else {
//       out[num].push(strin);
//     }
//   });
//   return out;
// };

// let results = sorting(tasks);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem Statement:

// You have been given two arrays of objects,
// where each object contains a string property called "name" and a number property called "score".
// Your task is to write a JavaScript function that takes these arrays as input and
//  returns an object that contains the combined scores for each unique name.

// const scores1 = [
//   { name: "John", score: 42 },
//   { name: "Jane", score: 73 },
//   { name: "Bob", score: 100 },
//   { name: "Mary", score: 59 },
// ];

// const scores2 = [
//   { name: "John", score: 15 },
//   { name: "Jane", score: 20 },
//   { name: "Bob", score: 35 },
//   { name: "Alice", score: 88 },
// ];

// const sumUp = function (score1, score2) {
//   let out = {};
//   for (let i = 0; i < score1.length; i++) {
//     score2.forEach((ele) => {
//       if (score1[i].name == ele.name) {
//         out[ele.name] = ele.score + score1[i].score;
//       }
//     });
//     if (!out[score1[i].name]) {
//       out[score1[i].name] = score1[i].score;
//     }
//   }
//   score2.forEach((ele) => {
//     if (!out[ele.name]) {
//       out[ele.name] = ele.score;
//     }
//   });
//   return out;
// };

// const out = sumUp(scores1, scores2);
// console.log(out);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// You have been given an array of objects,
// where each object contains two properties:
// a string property called "name" and a number property called "age".
// Your task is to write a JavaScript function that takes this array as input and
// returns an object that contains the number of people in each age group.
// Age groups are defined as follows:
// Children: age < 18
// Adults: 18 <= age < 65
// Seniors: age >= 65

// const people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 32 },
//   { name: "Bob", age: 12 },
//   { name: "Mary", age: 78 },
//   { name: "Alice", age: 42 },
//   { name: "Dan", age: 5 },
//   { name: "Eve", age: 81 },
//   { name: "Frank", age: 48 },
//   { name: "Gina", age: 63 },
// ];

// const grouped = function (people) {
//   let out = { Children: 0, Adults: 0, Seniors: 0 };
//   people.forEach((ele) => {
//     if (ele.age < 18) out["Children"]++;
//     else if (ele.age <= 65) out["Adults"]++;
//     else out["Seniors"]++;
//   });
//   return out;
// };

// const out = grouped(people);
// console.log(out);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj = { a: 1, b: 2, c: 3 };
// const mp = new Map();
// const out = {};
// for (const [key, val] of Object.entries(obj)) {
//   console.log(key, val);
//   mp.set(key, val);
// }
// console.log(mp);

// mp.forEach((val, key) => {
//   out[key] = val;
// });
// console.log(out);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Here's a problem statement that involves array, string, and object manipulation in JavaScript:

// You are given a string that represents a list of people and their birth dates in the format "name:MM/DD/YYYY".
//  Your task is to create an object that groups people by their birth year and sorts them in ascending order by their birth month.

//output
// {
//   '1985': [
//     { name: 'Bob', birthdate: '02/06/1985' }
//   ],
//   '1990': [
//     { name: 'Alice', birthdate: '01/05/1990' },
//     { name: 'Avery', birthdate: '04/08/1990' }
//   ],
//   '1995': [
//     { name: 'Charlie', birthdate: '03/07/1995' }
//   ]
// }

// const inputString =
//   "Alice:01/05/1990,Bob:02/06/1985,Charlie:03/07/1995,Avery:04/08/1990";

// let groupObj = function (inputStr) {
//   let str = inputStr.split(",");
//   let obj = {};
//   //let temp =[];
//   str.forEach((ele) => {
//     const [name, date] = ele.split(":");
//     let year = date.slice(6);
//     if (!obj[year]) {
//       obj[year] = [{ name: name, birthdate: date }];
//     } else {
//       obj[year].push({ name: name, birthdate: date });
//     }
//   });
//   return obj;
//   // console.log(str);
//   // console.log(obj);
//   // console.log(year);
// };

// let out = groupObj(inputString);
// console.log(out);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// You're given an array of strings arr, where each string represents a sentence.
//  Write a function wordCount(arr) that takes the arr as input and returns an object containing the count
//  of each word in the array. The keys in the object should be the unique words in the array
//  and the values should be the number of times each word appears.

// For example, given the following arr:

// const arr = [
//   "The quick brown fox jumps over the lazy dog.",
//   "I like to eat pizza.",
//   "The brown dog barks at the fox.",
//   "My favorite color is green.",
//   "The quick brown cat jumps over the lazy dog.",
// ];
// console.log(arr);
// const wordCount = function (arr) {
//   let regex = /(^)?\w+/g;
//   let str = arr.join(" ");
//   let array1 = str.match(regex); //.map((ele) => ele.trim());
//   console.log(array1);
//   let out = {};
//   array1.forEach((ele) => {
//     if (!out[ele]) {
//       out[ele] = 1;
//     } else {
//       out[ele]++;
//     }
//   });
//   return out;
// };

// const out = wordCount(arr);
// console.log(out);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//testing

// const obj = { name: "kks", age: 23 };

// for (let val in obj) {
//   console.log(val, " ", obj[val]);
// }
// const array1 = [1, 2, 3, 4];

// let b = array1.reduce((acc, curl) => {
//   return acc + curl;
// }, 15);
// console.log(b);

//
// const arr = [
//   { name: "sjj", age: 12 },
//   { name: "fkks", age: 53 },
//   { name: "gkks", age: 27 },
//   { name: "kkks", age: 26 },
//   { name: "lkks", age: 23 },
// ];

// const out = arr.reduce((acc, curl) => {
//   return acc.age > curl.age ? acc : curl;
// });
// console.log(out);

// const arr = [[1, 2, 3], 4, 5];
// const double = (num) => [num * 2];
// console.log(arr.flatMap(double));

// const person = { name: "John", age: 30 };
// person = { name: "ksk", age: 34 };
// let b = person;
// b.name = "balggg";

// console.log(b);
// console.log(person);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem statement:

// You are given an array of objects representing users' data.
// Each object contains the following properties: name (string), email (string), and age (number).

// Your task is to create a function in JavaScript that takes in this
// array and returns a new array containing only the objects of users who are adults
//  (age greater than or equal to 18), sorted alphabetically by their names.

// const usersData = [
//   { name: "John", email: "john@example.com", age: 23 },
//   { name: "Jane", email: "jane@example.com", age: 16 },
//   { name: "Bob", email: "bob@example.com", age: 18 },
//   { name: "Alice", email: "alice@example.com", age: 27 },
// ];

// function filterAdultUsers(usersData) {
//   const out = usersData.filter((val) => val.age >= 18);
//   out.sort((a, b) => a.name.localeCompare(b.name));
//   return out;
// }

// const b = filterAdultUsers(usersData);
// console.log(b);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript function that takes in this array and returns an object that shows the average salary
//  for each department, as well as the
//  total number of employees in each department. The output object should have the following structure:
//  {
//     Engineering: {
//       averageSalary: 65000,
//       totalEmployees: 3
//     },
//     Marketing: {
//       averageSalary: 55000,
//       totalEmployees: 2
//     },
//     // ...
//   }

// If a department has no employees, it should not be included in the output object.
//  The average salary should be rounded to the nearest whole number.

// const employees = [
//   {
//     name: "John Doe",
//     salary: 75000,
//     department: "Engineering",
//   },
//   {
//     name: "Jane Smith",
//     salary: 65000,
//     department: "Engineering",
//   },
//   {
//     name: "Bob Johnson",
//     salary: 55000,
//     department: "Marketing",
//   },
//   {
//     name: "Alice Williams",
//     salary: 65000,
//     department: "Marketing",
//   },
//   {
//     name: "David Lee",
//     salary: 45000,
//     department: "Sales",
//   },
// ];

// function calculateDepartmentStats(employees) {
//   const out = {};
//   employees.forEach((ele) => {
//     if (!out.hasOwnProperty(ele.department)) {
//       out[ele.department] = { averageSalary: ele.salary, totalEmployees: 1 };
//     } else {
//       out[ele.department].averageSalary += ele.salary;
//       out[ele.department].totalEmployees++;
//     }
//   });
//   //console.log(out);
//   for (const key in out) {
//     out[key].averageSalary = out[key].averageSalary / out[key].totalEmployees;
//   }

//   return out;
// }

// const out = calculateDepartmentStats(employees);
// console.log(out);

//console.log(employees[0].hasOwnProperty("age"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given an array of objects representing different stores and their inventory.
// Each object contains two properties: "name", which is the name of the store and "inventory",
//  which is an array of objects representing the items in the store's inventory.
//   Each inventory object contains two properties: "item",
//   which is the name of the item and "quantity", which is the quantity of the item in
//    the store's inventory.

// Your task is to write a function that takes this array of store objects as input
// and returns an array of objects representing the total inventory across all stores.
//  Each object in the output array should contain two properties: "item",
//   which is the name of the item, and "quantity", which is the total quantity of that
//   item across all stores.

// The output array should be sorted in descending order by quantity, so that the item
//  with the largest quantity appears first.

// const arr = [
//   {
//     name: "Store A",
//     inventory: [
//       { item: "apple", quantity: 10 },
//       { item: "banana", quantity: 5 },
//       { item: "orange", quantity: 15 },
//     ],
//   },
//   {
//     name: "Store B",
//     inventory: [
//       { item: "apple", quantity: 5 },
//       { item: "orange", quantity: 10 },
//       { item: "pear", quantity: 20 },
//     ],
//   },
//   {
//     name: "Store C",
//     inventory: [
//       { item: "apple", quantity: 15 },
//       { item: "banana", quantity: 10 },
//     ],
//   },
// ];

// function getTotalInventory(array) {
//   const out = [];
//   array.forEach((x) => {
//     x.inventory.forEach((y) => {
//       let test = true;
//       out.forEach((val) => {
//         if (val.item == y.item) {
//           test = false;
//         }
//       });
//       if (test) {
//         out.push({ item: y.item, quantity: y.quantity });
//       } else {
//         out.forEach((ele, i, out) => {
//           if (ele.item == y.item) {
//             out[i].quantity += y.quantity;
//           }
//         });
//       }
//     });
//   });
//   return out;
// }

// const out = getTotalInventory(arr);
// console.log(out);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given an array of objects representing students' grades for a particular course.
//  Each object contains the following properties:

// name: a string representing the student's name
// id: a number representing the student's unique identifier
// scores: an array of numbers representing the student's scores for the course
// Your task is to write a JavaScript function that takes this array of objects as
//  input and returns an object containing the following properties:

// average: a number representing the average score for the course across all students
// median: a number representing the median score for the course across all students
// highest: an object representing the student with the highest score, containing the
// following properties:
// name: a string representing the student's name
// id: a number representing the student's unique identifier
// score: a number representing the student's highest score for the course
// lowest: an object representing the student with the lowest score, containing the following properties:
// name: a string representing the student's name
// id: a number representing the student's unique identifier
// score: a number representing the student's lowest score for the course
// Your function should handle cases where there are ties for highest and lowest scores.
// The output object
//  should have the above properties in the order listed.

// function student(name, id, scores) {
//   this.name = name;
//   this.id = id;
//   this.scores = scores;
// }

// const std1 = new student("Sai", 20, [23, 45, 67, 32]);
// const std2 = new student("Kai", 18, [34, 56, 55, 56]);
// const std3 = new student("Rai", 21, [44, 55, 67, 12]);
// const std4 = new student("Bai", 24, [23, 67, 57, 78]);
// const std5 = new student("Mai", 21, [12, 34, 67, 90]);

// const arr = new Array(std1, std2, std3, std4, std5);

// console.log(arr);

// const findHighest = function (arr) {
//   //let out = { avg: 0, highest: {} };
//   let out = arr.reduce((acc, curl) => {
//     let t1 = acc.scores.reduce((a, c) => a + c, 0);
//     let t2 = curl.scores.reduce((a, c) => a + c, 0);
//     if (t1 > t2) {
//       return acc;
//     } else return curl;
//   });
//   return out;
// };

// const out = findHighest(arr);
// console.log(out);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem: Given an array of objects representing different books and their properties,
//  write a function that returns an array of objects representing the most popular book in each category.
//   The function should take two arguments: the array of books and an object representing the categories
//   and their corresponding values. The categories and their values should be used to group the books,
//    and the popularity of each book should be determined by the number of times it appears in the array.
//     If multiple books have the same popularity in a category, the function should return the first one
//      that appears in the array.

// var books = [
//   { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
//   {
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//   },
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//   },
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//   },
//   {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//   },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//   { title: "1984", author: "George Orwell", genre: "Fiction" },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Fiction",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//   },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
//   { title: "Sense and Sensibility", author: "Jane Austen", genre: "Romance" },
//   { title: "Emma", author: "Jane Austen", genre: "Romance" },
//   { title: "Wuthering Heights", author: "Emily Bronte", genre: "Romance" },
// ];

// var categories = {
//   genre: ["Fantasy", "Fiction", "Romance"],
// };
// // Output:
// // [
// //   {
// //     title: "The Lord of the Rings",
// //     author: "J.R.R. Tolkien",
// //     genre: "Fantasy",
// //   },
// //   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
// //   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
// // ];

// const groupBooks = function (books, cat) {
//   let out = [];
//   let { genre } = cat;
//   genre.forEach((ele) => {
//     let count = 0;
//     books.reduce((acc, curl) => {});
//   });
// };

// const out = groupBooks(books, categories);
// console.log(out);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem: Given an array of objects representing different employees and their salaries,
// write a function that returns an object representing the employee with the highest salary
// in each department. The function should take two arguments: the array of employees and an object
// representing the departments and their corresponding values. The departments and their values
// should be used to group the employees, and the employee with the highest salary should be determined
// for each department.

var employees = [
  { name: "Alice", department: "Sales", salary: 55000 },
  { name: "Bob", department: "Sales", salary: 50000 },
  { name: "Charlie", department: "Marketing", salary: 65000 },
  { name: "Dave", department: "Marketing", salary: 75000 },
  { name: "Eve", department: "Engineering", salary: 80000 },
  { name: "Frank", department: "Engineering", salary: 90000 },
  { name: "Grace", department: "Finance", salary: 55000 },
  { name: "Helen", department: "Finance", salary: 60000 },
];

var departments = {
  department: ["Sales", "Marketing", "Engineering", "Finance"],
};

//Output
// {
//   Sales: {name: "Alice", department: "Sales", salary: 55000},
//   Marketing: {name: "Dave", department: "Marketing", salary: 75000},
//   Engineering: {name: "Frank", department: "Engineering", salary: 90000},
//   Finance: {name: "Helen", department: "Finance", salary: 60000}
// }

const findHighest = function (emp, dep) {
  let out = {};
  let { department } = dep;
  department.forEach((ele) => {
    let b = emp
      .filter((val) => val.department == ele)
      .reduce((a, c) => (a.salary > c.salary ? a : c));
    out[ele] = b;
  });
  return out;
};

const out = findHighest(employees, departments);
console.log(out);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
