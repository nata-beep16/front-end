function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}

//Eksport fungsi
export default helloWorld;