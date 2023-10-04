// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap dengan menggunakan bentuk IIFE dan callback function

// (function (){
//     let ganjilGenap = 8;
//     let isEligible = ganjilGenap %2 == 0 ? "Genap" : "Ganjil";
//     console.log(isEligible);
// })();

function ganjilGenap(hasil, callback){
    const isEligible = hasil %2 == 0 ? "Genap" : "Ganjil";
    callback (isEligible);
}

ganjilGenap ("7", function(isEligible){
    console.log (isEligible);
});