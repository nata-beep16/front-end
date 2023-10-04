function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
    .then((Response) => {
        return Response.json();
    })
    .then((data) =>{
        console.log(data.data);
        return data.data;
    });
}

export default ambilDataUser;