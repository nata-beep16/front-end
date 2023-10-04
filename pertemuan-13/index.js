//class in JS, bisa dikatakan OOPnya JS
//Kelas itu kaitannya dengan object

//Object literal, object sebelumnya dideklarikan secara langsung.
// const mobil1 = {
//     transmisi: "Manuan",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil $(this.transmisi) dinyalakan`);
//     },
// };

// const mobil2 = {
//     transmisi: "Automatic",
//     bahanBakar: "Solar",
//     mesin: 2000,
// };
//ingin buat lebih maka buat lebih banyak sama seperti diatas

class Mobil{ //parent
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar =  bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin() {
        console.log(`Mobil ${this.transmisi} dinyalakan`);
    }
}

const mobil1 = new Mobil ("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil ("Automatic", "Solar", 2000);
console.log(mobil1, mobil2);


class Toyota extends Mobil{ //class child
    constructor(merek, warna, transmisi, bahanBakar, mesin){
        super(transmisi, bahanBakar, mesin);
        this.merek = merek;
        this.warna = warna;
    }
    //Overriding
    nyalakanMesin(){
        console.log(`Mobil merek ${this.merek} dinyalakan`);
    }
}

const agya = new Toyota("Agya", "Putih", "Automatic", "Bensin", 1000);
agya.nyalakanMesin();
console.log(agya);