//Module
//eror mudah dicari hanya pada modul yang error saja
//reusable code, kode didalam module dapat dipakai ditempat lain
//Don't Repeat Yourself

// import { fullName, numbers as angka, john } from "./utils.js";
// import hello from "./utils.js";

// console.log(fullName);
// console.log(numbers);
// console.log(john);

//export default
//1 file cuman boleh ada 1 file export, beda dgn export biasa

//Asynchronous
//perintah dijalan perbaris, seperti antrian
//syncronous -> single thread -> blocking
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");

//asynchronous -> multi thread -> (non blocking) banya proses yang berjalan
//Ada 2 macam async
//1. paralel, ibarat kelas frontend berjalan dengan kelas paralel frontend lain
//berjalan bersama-sama

// setTimeout (() => {
//     console.log("Proses 1");
// }, 3000); 
// console.log("proses 2");
// setTimeout (() => {
//     console.log("Proses 3");
// }, 4000); 
// console.log("Proses 4");

//2. concurrent, yang paling tepat untuk JS
//2.a callback
// setTimeout (() => {
//     console.log("proses 1");
//     setTimeout(() =>{
//         console.log("Proses 2");
//         setTimeout(() =>{

//         }
//         )
//     }
//     )
// }
// )

// 2.b Promise
//buat promise
// let condition = true
// const newPromise = new Promise((resolve, reject) =>{
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

//pakai promise
// cara 1. then - catch

// newPromise.then((result) => { //fungsi yang dijalan kalau berhasil/fulfilled
//     console.log(result);
// }); 
//  .catch((error) => console.log(error));

 //2. async await (ES7)
 //async await digunakan pada fungsi

 const consumePromise = async () => {
    let result = await newPromise;
    console.log(result);
 };
 consumePromise();