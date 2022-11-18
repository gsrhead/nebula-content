// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for (let i = 0; i <30; i++){
    console.log(i)
 }
////////


// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for (let i = 1; i <10; i+=2){
    console.log(i)
  }
  //////////////////
  // 


// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
let celebNames = ['the Rock'  , 'lil wayne'  , 'Michael jordan' , 'Steve o'  , 'Greenday'  ];
for (let index = 0; index < celebNames.length; index++) {
console.log(celebNames[index]);
}


// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for( celebNames  = 0; i < celebNames.length; i++ ){
    let celebNames = ['the Rock' , 'lil wayne' , 'Michael jordan', 'Steve o' , 'Greenday' ];
    
    if(celebNames[i]).length % 2 == 0) {
       console.log(celebNames[i])
     }


// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
let celebNames = ['the Rock' , 'lil wayne' , 'Michael jordan', 'Steve o' , 'Greenday']
for(let i = 0; i < celebNames.length; i++) {
console.log(celebNames[i]);
}


// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
let celebNames = ['the Rock' , 'lil wayne' , 'Michael jordan' , 'Steve o' , 'Greenday' ];



// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
});
for (let index = 0; index < celebNames.length; index++) {
array.forEach(element => {
   console.log(celebNames[1];


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
let celebNames = ['the Rock'  , 'lil wayne'  , 'Michael jordan' , 'Steve o'  , 'Greenday'];


// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const sentence = 'the-Rock, lil-wayne, Michael-jordan, Steve-o, Green-day';

console.log(sentence.toUpperCase());




10.  Index your array to find your favorite celebrity. 
     Save that name to a variable
     Loop over the array until you find that individual
     Log that name to the console and break out of the loop



BONUS:
     Write a loop that iterates from zero until 30
     If an index is divisible by 2 log 'fizz'
     If an index is divisible by 3 log 'buzz'
     If an index is divisible by both 2 & 3, log 'fizz-buzz'
     Otherwise print the index to the console