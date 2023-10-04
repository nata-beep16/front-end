import ambilDataUserAsync from './ambilDataUserAsync.js';

// Panggil fungsi ambilDataUserAsync
ambilDataUserAsync()
  .then((users) => {
    // Data users akan ditampilkan ke konsol
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });