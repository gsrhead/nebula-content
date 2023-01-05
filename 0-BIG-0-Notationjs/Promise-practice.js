// // 1.   What is the order of output?
// setTimeout(() => {
//     console.log('a');
// }, 1);
// console.log('b');

// new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
// console.log('e');

// setTimeout(() => {
//   console.log('f');
// }, 0);

// setTimeout(() => {
//     console.log('g');
// }, 3);

// new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))
// // it will first handle the consoles log B and E then work in the promise and and console log D C and then it will log H and I witch will log out the sequence of the Delay

// // --------------------------------------------------------------------------------------------------------------------------------
// // 2.   Create a promise for something you may, or may not do.
// let promised = new Promise(function(resolve, reject){
//     // look at the stars
// });

// // 3.   Create a new promise for something you may or may not do. 
// //      After a few seconds log whether it has been done.
// let promises = new Promise(function (resolve, reject) {
//   // look at the stars 
//   setTimeout(() => {
//    resolve("looking,up") 
//    if (promises) {
//     resolve('you looked up');
//    }else {
//     reject('did not look up');
//    }

//   }, 2000);
// });


// // 4.   Using the prior example use .then and .catch to handle responses and rejections
// promises.then(resolve => console.log(resolve)).catch(reject => console.log(reject))
// .finally(() => console.log("done good"));



// // 5.   What does a promise resolve to?

// if we write what we want it will bring the result "you looked up"
// // 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page


// // 7. What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v);
//     return v * 2;
// })
// .then(v => {
//     console.log(v); // answer: 4* 2 =
//     return v * 2;
// })
// .then(v => {
//     console.log(v);
//     return v * 2; //answer: 4* 2 = 8;
// })
// .finally(v => { // no value  or the finally has no ending to give back there for undefined no parameters.//
//     console.log(v)// has  null no number !
// })

// answer:2,4,8, undefined
