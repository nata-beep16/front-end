let people = ["Greg", "Mary", "Devon", "James"];

//No - 1, tampilkan dalam with for-loop
for (let i=0; i<people.length; i++){
    console.log(people[i])
};

//No - 2 , tampilkan dalam forEach
console.log("Nomor 2");
people.forEach(function(orang){
    console.log(orang);
});

//No - 3, remove greg
console.log("Nomor 3");
people.shift("Greg");
console.log(people);

//No - 4, remove james
console.log("Nomor 4");
people.pop("James");
console.log(people);

//No - 5, add matt didepan
console.log("Nomor 5");
people.unshift("Matt");
console.log(people);

//No - 6, tambah nama
console.log("Nomor 6");
people.push("Natalia");
console.log(people);

//No - 7, keluar jika mary ditemukan
console.log("Nomor 7");
for (let i=0; i<people.length; i++){
    if (people[i] === "Mary") {
        console.log("Mary");
        break;
    }
    console.log(people[i]);
};

//No - 8, pakai slice keluarkan mary dan matt
console.log("Nomor  8");
let people2 = people.slice(2);
console.log(people2);

//No - 9, pakai splice remive devon
console.log("Nomor 9");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//No - 10, concat tambah bob
console.log("Nomor 10");
let withBob = people.concat("Bob");
console.log(withBob)

//=========================================

//No - 1, add go
console.log("Nomor 1");
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

//No - 2, ganti jadi 7
programming["difficulty"] = 7

//No - 3, delete jokes
delete programming.jokes

//No - 4, add key isFun
programming.isFun =  true;

//No - 5
programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`)

console.log(programming);