//Buatlah fungsi yang menerima 1 input angka 
//dan mengembalikan string apakah angka yang dimasukan adalah bilangan ganjil atau genap

function Num (angka){
    let isEligible = angka % 2 == 0 ? "Genap"  : "Ganjil";
    return isEligible;
}

let output = Num("7");
console.log("Angka yang dimasukkan = " + output);