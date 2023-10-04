//Array
const students = ['john', 'petter', 'jack', 'jane'];
const numbers = [1, 2, 3, 4, 5];
const john = ['john', 'doe', 33, true]; //Js memungkinkan seperti ini dgn beda array

console.log(students);
console.log(numbers);
console.log(john);
//Index
console.log(students[2]); //menampilkan nama index ke 2
students[2] = "Bob"; //mengganti jadi nama lain
console.log(students);
//Length
console.log(students.length);
console.log(students(students.length - 1)); //menampilkan yang paling terakhir
//Mengakses seluruh elemen array
for (let i=0; i<students.length; i++); {
    console.log(students[i]);
}

//Array method
//toString()
console.log(students.toString());
//Join()
console.log(john.join(" "));  //didalam joinnya bisa diganti dengan yang lain
console.log(john.join("#"));
//Pop, hapus elemen terakhir
john.pop();
console.log(john);
//push, menambah yang paling terakhir
john.push("Good morning");
console.log(john);
//shift, keluarkan elemen pertama atau depan
john.shift();
console.log(john);
//unshift, tambah paling depan
john.unshift("Hello");
console.log(john);
//splice, ditengah" ditambah atau diganti
john.splice(3, 0, true);
console.log(john);
//slice, pindahkan ke array yang baru
let john2 = john.slice(2, 4);
console.log(john2);
//concat, gabung 2 atau lebih array
let output = john.concat(numbers);
//let output = john.concat(numbers, john2); //ingin gabung lebih dari 1 array
console.log(output);


//Object, pakai kurung kurawal
let john = {
    firstName: "John", 
    lastName: "Doe",
    age: 33,
    isMarried: true,
    grade: [80, 90, 100], //dalam object ada array
    address: {
        city: "Manado",
        province: "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function(){
        console.log("Hello World");
        console.log("Hello my name is " + this.firstName); //akses data diatas
    },
};

//Dot notation
console.log(john.firstName);
console.log(john.grade);
console.log(john.grade[2]);
console.log(john.address.city);
console.log(john.sayGreetings());

//Bracket notation
console.log(john["firstName"]);
console.log(john["grade"][2]);
console.log(john["address"]["city"]);
console.log(john["sayGreetings"]());

john.job = "Teacher";
console.log(john);

//Array Object

let students = [
 {
    id: 1,
    name: "john",
 },
 {
    id: 2,
    name: "jack",
 },
 {
    id: 3,
    name: "Peter",
 }
]

//foreach()
students.forEach(function(item){
    console.log(item.name);
});

//map(), sama dengan foreach
let output = students.map(function (item) {
    return item.name;
});
console.log(output);

//Filter(), cari nilai yang diperlu namun return banyak data
let output = students.filter(function (item) {
    return item.name === "john";
});
console.log(output);

//Find(), mengembalikkan 1 data saja, object yang didapat pertama
let output = students.find(function (item) {
    return item.name;
});
console.log(output);