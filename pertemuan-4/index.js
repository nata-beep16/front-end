//Javascript Function

// function greetings(){
//     return "Hello";
// }

// const greetings = function (){
//     return "Hello";
// }
// console.log(greetings());

//IIFE
//Anonymous Function (fungsi yang langsung dipanggil)
(function(){
    console.log("Hello IIFE");
})();

//callback function (fungsi yang dipanggil kembali)
function createGreetings(name, callback){
    const greetings = "Hello " + name;
    callback(greetings);
}

function logGreetings(greetings){
    console.log(greetings);
}

createGreetings("John", logGreetings);