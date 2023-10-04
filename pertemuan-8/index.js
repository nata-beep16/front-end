//Rst parameter

// const penjumlahanArray = (a, b, c) => {
//     const array = [ a, b, c];
//     let total = 0;
//     array.forEach((item) => {
//         total = total + item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3); //6

//Dengan Rest parameter, beda dari diatas adalah tidak perlu memerlukan dia punya parameter.
//Rest itu sisa
// const penjumlahanArray = (...params) => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3, 4, 5, 6, 7); //6

// const penjumlahanArray = (a, b, c, ...params) => { //abc itu akan memiliki nilai dari 123, params itu harus diakhir
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3, 4, 5, 6, 7); 

//Spread Operator
// let array1 = [1, 2, 3, 4, 5];
// console.log(array1);

//let array1 = [1, 2, 3, 4, 5];
//console.log(...array1); //spread itu dibuka, jadi pemgbungkus dibuka
//fungsinya untuk:
//1. Duplikasi array
//let array2 =  array1; //ini nama yang sama, seperti dirumah dipanggil lain dan dikampus nama lain
// let array2 =  [...array1];
// console.log(array2);
// array1.push(6);
// console.log(`Array 1 = ${array1}`);
// console.log(`Array 2 = ${array2}`);
//2. Menggabungkan array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, 4, ...array2, ...array3]
// console.log(combineArray6);

//Pada Objeck
// let john = {
//     fullName: "John",
//     age: 30,
//     address: "Manado",
// };
//duplikasi objek
// let student = {...john};
// john = {... john, job: "Teahcer"}; //menambah properti baru dari job
// console.log(john);

//Menggabungkan Objek
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combineObj = {...obj1, ...obj2};

//Destructuring
let buah = ["mangga", "pisang", "anggur"];
//let [, , buah3] = buah; //yang diambil hanya buah anggur saja, komanya tetap karena memperhatika urutannya
//console.log(buah3);
let [, , buah3, ...buahLain] = buah; 
console.log(buahLain);

let orang = {
    nama: "Joko", ;
    umur: 18,
    sudahMenikah: false
};

let {nama, umur, sudahMenikah } = orang;
console.log(nama, age, sudahMenikah);