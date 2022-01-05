const handler = require("./index");

const array = [
  {
    id: 1,
    startTime: 180,
    endTime: 220,
  },
  {
    id: 2,
    startTime: 0,
    endTime: 120,
  },
  {
    id: 3,
    startTime: 110,
    endTime: 150,
  },
];
// const array1 = [];
// for (let index = 0; index < 6; index++) {
//   const startTime = Math.trunc(Math.random() * 1440);
//   const obj = {
//     id: index + 1,
//     startTime,
//     endTime: startTime + 50,
//   };
//   array1.push(obj);
// }

console.log(handler(array, 30));
