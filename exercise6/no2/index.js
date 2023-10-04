import ambilDataUser from './ambilDataUser.js';

// Panggil fungsi ambilDataUser
ambilDataUser()
  .then((users) => {
    // Data users akan ditampilkan ke konsol
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });