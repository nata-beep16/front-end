// ambilDataUserAsync.js

// Async function ambilDataUserAsync untuk mengambil data dari API
async function ambilDataUserAsync() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data); // Menampilkan data dengan key 'data' ke konsol
      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Ekspor fungsi ambilDataUserAsync sebagai default export
  export default ambilDataUserAsync;