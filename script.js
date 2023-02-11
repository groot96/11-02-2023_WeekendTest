/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((val)=>{
    if (val.marks>50) {
      console.log(val);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((val)=>{
    if (val.marks>50) {
      console.log(val);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newArr = { id: 4, name: "susan", age: "20", marks:45 };
  arr.push(newArr);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.map((rem)=>{
if (rem.marks > 50) {
  console.log(rem);
}
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let secArr = [
    { id: 4, name: "Dhiru", age: "30", marks:65 },
    { id: 5, name: "Prashant", age: "24", marks:95 },
    { id: 6, name: "Tushar", age: "28", marks:87 },];

let concatArr = arr.concat(secArr);
console.log(concatArr);
}