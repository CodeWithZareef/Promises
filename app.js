
// Promise is object which is effective way to handle asynchronous code
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Babbar");
//     // resolve(100);
//     reject(new Error("Internal Server Error"));
//     // reject();
// });

// console.log(firstPromise);

let secondPromise = new Promise( (resolve, reject) => {

    setTimeout(function sayMyName() {
        console.log("My name is Love Babbar");
    }, 1000);
    resolve(1);
});


let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Fulfilled");
    } else {
        reject("Promise Rejected");
    }
});

// Promise channing

promise.then((message) => {
    console.log("first msg: " + message);
    return "Promise fulfilled second message";
}).then((message) => {
    console.log("second msg: " + message);
    return "Promise fulfilled third message";
}).then((message) => {
    console.log("third msg: " + message);
    return "Promise fulfilled second message";
}).catch((error) => {
    console.log(error);
}).finally((message) => {
    console.log("Main to finally hu, chaluga pakka");
});

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Third");
})

// new promise create hota hai, jo tab resolve mark hoga jab saare resolve honge
Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.log("Error: " + error);
})

// promise.then((message) => {
//     console.log("Then ka message is: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })

// console.log(promise);



// function sayMyName() {
//     console.log("My name is Love Babbar");
// }

// setTimeout(sayMyName, 1000);


// These are Asynchronous

// setTimeout
// setInterval
// fetch
// axios
// promises (then catch)
// async await

