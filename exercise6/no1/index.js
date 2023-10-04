//No 1
import helloWorld from "./helloWorld.js";

async function message() {
    const msg = await helloWorld();
    console.log(msg);
};

message();

// //No 2
// import ambilDataUser from './ambilDataUser.js';

// // Panggil fungsi ambilDataUser
// ambilDataUser()
//   .then((users) => {
//     // Data users akan ditampilkan ke konsol
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //No 3
// import ambilDataUserAsync from './ambilDataUserAsync.js';

// // Panggil fungsi ambilDataUserAsync
// ambilDataUserAsync()
//   .then((users) => {
//     // Data users akan ditampilkan ke konsol
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
