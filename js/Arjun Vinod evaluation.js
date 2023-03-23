// array empl, customer ,prduct
//create a 3 employees inside an array
function emp(id, fname, lname, age, addr) {
  this.id = id;
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.address = addr;
}

const emp1 = new emp(322, "Rahul", "Subrah", 31, "New york");
const emp2 = new emp(532, "Abi", "Ragav", 21, "Texas");
const emp3 = new emp(432, "Vishnu", "NS", 41, "Mexico");

const employee = new Array(emp1, emp2, emp3);

//add properties skills and date of joining

let sk = ["cpp", "cpp", "java"];
let dojTemp = [
  new Date(2012, 02, 18),
  new Date(2020, 04, 12),
  new Date(2019, 05, 17),
];
employee.forEach((val, i, arr) => {
  arr[i].skills = sk[i];
  arr[i].doj = dojTemp[i];
});
//add two more employees into the array
employee.push({
  id: 365,
  firstName: "Jaya",
  lastName: "Soorya",
  age: 31,
  address: "Germany",
  skills: "javascript",
  doj: new Date(2022, 08, 22),
});

employee.push({
  id: 732,
  firstName: "Kaushal",
  lastName: "kumar",
  age: 31,
  address: "Germany",
  skills: "Blockchain",
  doj: new Date(2021, 05, 21),
});

//remove 4th employeee
employee.splice(3, 1);

//add two more properties to each employee
const sal = [20000, 30000, 40000, 50000];
let cert = [
  "Web development Certification",
  "Backend Certification",
  "Devops Certification",
  "Version Control Certification",
  "English grammer Certification",
];
let cdate = [
  new Date(2019, 02, 18),
  new Date(2021, 06, 12),
  new Date(2022, 00, 05),
  new Date(2022, 04, 05),
];

employee.forEach((val, i, arr) => {
  arr[i].salary = sal[i];
  arr[i].certifications = cert[i];
  arr[i].dateOfCertification = cdate[i];
});
//add another 2 employees
employee.push({
  id: 832,
  firstName: "Prayag",
  lastName: "kumar",
  age: 31,
  address: "America",
  skills: "Blockchain",
  doj: new Date(2021, 03, 12),
  salary: 60000,
  certifications: "Version Control Certification",
  dateOfCertification: new Date(2020, 03, 12),
});

employee.push({
  id: 932,
  firstName: "Lallu",
  lastName: "Reddy",
  age: 34,
  address: "USA",
  skills: "java",
  doj: new Date(2019, 03, 12),
  salary: 60000,
  certifications: "Version Control Certification",
  dateOfCertification: new Date(2020, 03, 12),
});
//{"blockchain": [{},{}]}

//if date of certification is within a year add 10000 to the salary
let date = new Date();
let cd = date.getFullYear();

employee.filter((val, i, arr) => {
  let dd = val.dateOfCertification.getFullYear();
  if (cd - dd <= 1) {
    arr[i].salary += 10000;
  }
});

//add credits to the employees based on the no of years since joined
employee.filter((val, i, arr) => {
  let dj = val.doj.getFullYear();
  let temp = cd - dj;
  if (temp == 1) {
    arr[i].credits = 2;
  } else if (temp == 2) {
    arr[i].credits = 4;
  } else if (temp == 3) {
    arr[i].credits = 6;
  } else if (temp == 4) {
    arr[i].credits = 8;
  } else if (temp >= 5) {
    arr[i].credits = 12;
  }
});

console.log(employee);

//group employees based on their skill, output should be object with keys as skills and values as array with employees in it

const groupEmployees1 = function (emp) {
  let out = {};
  emp.forEach((val) => {
    if (!out.hasOwnProperty(val.skills)) {
      out[val.skills] = [val];
    } else {
      out[val.skills].push(val);
    }
  });
  return out;
};

let grp1 = groupEmployees1(employee);
console.log(grp1);

const groupEmployees2 = function (emp) {
  let out = {};
  emp.reduce((acc, curl) => {
    if (!out.hasOwnProperty(curl.skills)) {
      out[curl.skills] = [curl];
    } else {
      out[curl.skills].push(curl);
    }
  }, 0);
  return out;
};
let grp2 = groupEmployees2(employee);
console.log(grp2);

//console.log(typeof out);
//console.log(out.Blockchain[-1]);

//create product array
const product = [
  {
    id: 22,
    name: "radio",
    cost: 2000,
    doc: new Date(2014, 03, 20),
    color: "blue",
  },
  {
    id: 23,
    name: "car",
    cost: 5000,
    doc: new Date(2012, 03, 20),
    color: "black",
  },
  {
    id: 24,
    name: "tv",
    cost: 7000,
    doc: new Date(2017, 03, 20),
    color: "brown",
  },
  {
    id: 22,
    name: "phone",
    cost: 6000,
    doc: new Date(2019, 03, 20),
    color: "yellow",
  },
];

//console.log(product);

// const [companyA, ...companyB] = [...product];

//put first 2 elements in companyA and last 2 in companyB

const companyA = product.slice(0, 2);
const companyB = product.slice(-2);
//console.log(companyA, companyB);

//required output [1,4,5,2,3]
//from a and b
const a = [1, 2, 3];
const b = [4, 5];
a.splice(1, 0, ...b);
console.log(a);

//create customer array
const customer = [
  { id: 1, premium: false, invoicePrice: 40000 },
  { id: 3, premium: true, invoicePrice: 60000 },
  { id: 5, premium: false, invoicePrice: 80000 },
  { id: 7, premium: true, invoicePrice: 90000 },
];
console.log(customer);
//based on premium give 10% discount for invoiceprice
customer.forEach((val, i, arr) => {
  if (val.premium) {
    arr[i].invoicePrice -= arr[i].invoicePrice / 10;
  }
});

console.log(customer);
