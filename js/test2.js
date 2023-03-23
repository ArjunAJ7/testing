// const employees = [
//   {
//     id: 1,
//     firstName: "john",
//     lastname: "mark",
//     age: 25,
//     CertificationCpmletiondate: new Date("2022-05-10"),
//   },
//   {
//     id: 2,
//     firstName: "stew",
//     lastname: "antony",
//     age: 32,
//     CertificationCpmletiondate: new Date("2023-02-20"),
//   },
//   {
//     id: 3,
//     firstName: "arjun",
//     lastname: "vinod",
//     age: 25,
//     CertificationCpmletiondate: new Date("2022-12-15"),
//   },
// ];
// const customers = [
//   { id: 1, CosName: "alphin", ph: 8833993362 },
//   { id: 2, CosName: "rahul", ph: 8347639392 },
//   { id: 3, CosName: "roshini", ph: 983627687494 },
// ];
// const product = [
//   { id: 1, productName: "ps5", rate: 1000 },
//   { id: 1, productName: "Xbox360", rate: 866 },
//   { id: 1, productName: "Console", rate: 800 },
// ];
// console.log(employees);
// // employees[0].skills = "js ,html";
// // employees[0].doj = "22/2/2020";
// // employees[1].skills = "java node js ";
// // employees[1].doj = "2/4/2020";
// // employees[2].skills = "python ,sql";
// // employees[2].doj = "1/8/2019";
// for (let i = 0; i < employees.length; i++) {
//   employees[i].skills = "skill set ";
//   employees[i].doj = new Date();
//   employees[i].Certification = "javascrpt,python" + i;
//   employees[i].salary = 10000 + i * 10000;
//   const oneYear = new Date();
//   oneYear.setFullYear(oneYear.getFullYear() - 1);
//   if (employees[i].CertificationCpmletiondate > oneYear) {
//     employees[i].salary += 10000;
//   }
// }
// console.log(employees);

// const emp1 = [
//   { name: "sd", age: 23 },
//   { name: "ss", age: 33 },
// ];
// console.log(emp1);

// //emp1.map((x) => x.age++);

// console.log(empco

// const a = [1, 3, 5, 8];
// a.map((val, i, arr) => {
//   arr[i]++;
// });

// console.log(a);

// const a = [1, 2, 3, 4];

// a.filter((x) => x > 2).map((x, i, ar) => ar[i]++);
// console.log(a);
// a.map((x, i, arr) => {
//   if (x > 2) {
//     arr[i]++;
//   }
// });
// console.log(a);

// const customers = [
//   { id: 1, CosName: "alphin", ph: 8833993362 },
//   { id: 2, CosName: "rahul", ph: 8347639392 },
//   { id: 3, CosName: "roshini", ph: 983627687494 },
// ];
// console.log(customers);
// customers.filter((x) => x.id > 1).map((x) => (x.ph = 0));
// console.log(customers);

// let out = customers.findIndex((x) => x.id == 3);
// console.log(out);

// let out =[];

// customers.map((val,i,arr)=>{})
// const customer = [
//   { id: 1, premium: false, invoicePrice: 40000 },
//   { id: 3, premium: true, invoicePrice: 60000 },
//   { id: 5, premium: false, invoicePrice: 80000 },
//   { id: 7, premium: true, invoicePrice: 90000 },
// ];

// for (const val of customer) {
//   let values = Object.values(val); // [1,false,40000]
//   let keys = Object.keys(val); // [id, premiu]
//   let entry = Object.entries(val); // [[id,1],[pre,fal]]
//   //   console.log(values);
//   //   console.log(entry);
// }

// const abc = { id: 1, premium: false, invoicePrice: 40000 };

// for (const [key, val] of Object.entries(abc)) {
//   console.log(key, val);
// }

const freshProduct = [
  { proid: 1000, proname: "centalis", procategory: "tablet", prdiscount: true },
  { proid: 1001, proname: "ascoriID", procategory: "cyrup", prdiscount: true },
  { proid: 1002, proname: "dolopar", procategory: "tablet", prdiscount: false },
];

const filterpro = function (arr, table) {
  let out = [];
  arr
    .filter((val) => val.procategory == table)
    .map((ele) => {
      out.push({ proid: ele.proid, proname: ele.proname });
    });

  return out;
};

const out = filterpro(freshProduct, "tablet");

console.log(out);
