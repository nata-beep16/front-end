// // String literal
// //---------------

// let fullName = "John Doe"
// let age = 33
// let address = "Manado"

// // Halo nama saya John Doe, umur saya 33 tahun
// //dan saya tinggal di Manado

// //cara lama
// let kalimat5 = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;
// console.log(kalimat5);

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
// console.log(kalimat6);

//Arrow Function
//--------------

//cara sebelumnya
// function sayGreetings5(nama) {
//     return `Hello ${nama}`;
// }
// console.log(sayGreetings5("John"));

// const sayGreetings6 = (nama) =>{
//     return `Hello ${nama}`;
// };

// console.log(sayGreetings6(`Natalia`));

//Implicit return value
//const sayGreetings6 = (nama) => `Hello ${nama}`;
//console.log(sayGreetings6(`Natalia`));

// Pada IIFE, langsung dijalankan tanpa dipanggil
// (() => {
//     console.log("Hello");
// })();

// let output1 = (() => `Hello`)();
// console.log(output1);

// //Pada callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//default parameter
//----------------

const sayGreetings = (name, age) => {
    if (name === undefined){
        name = "Natalia"
    }
    else if (age === undefined){
        age = 20
    }
    console.log( `Hello ${name}, i'm ${age} y/o`)
};
sayGreetings();

const sayGreetings6 = (fullName = "John Doe", age = 30) => {
    console.log(`Hello i'm ${fullName}, i'm ${age} y/o`);
};

sayGreetings6();