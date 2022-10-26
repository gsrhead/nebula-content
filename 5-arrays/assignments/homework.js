// 1.   Create an array that contains two of your favorite things to do
const movies =[ "movies,playing codewars"];
console.log(movies);

// 2.   Using an array method, add another thing you like to do to that list
const movies1 = 'get a job';
const movies2 = ' learn more codeing';
const movies3 = movies1.concat(movies2);
console.log(movies3);0

// 3.   Reverse the order of the array (remember, if needed use MDN)
const movies1 = ['get a job', 'learn more codeing!'];
console.log('movies1:', movies1); //  ANSWER   / 'learn more coding!, 'get a job');
const reversed = movies1.reverse();
console.log('reversed:', reversed);
console.log('movies1:', movies1);
                                  
// Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let output = days.length;
console.log(output);/// ANSWER 7 ///

// 5.   log the 4th element in the array
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(days[4]); // ANSWER THURSDAY


// 6.   Remove the first element in the array. Log the new array and the element removed from the array
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
days.shift();
console.log(days);// answer removed SUNDAY!

// 7.   Put 'Sunday' back at the beginning of the array and log the new array

days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
days.unshift('sunday');
console.log(days); // answer put back sunday


// 8.   Remove the last element in the array. Log the new array and log the element removed
let days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
days.pop();
console.log(days); // ANSWER REMOVED SATURDAY


// 9.   Add 'Saturday' back to the end of the array and log the new array  
let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
days.push('saturday')
console.log(days);/// ANSWER added SATURDAY BACK

//10.   Replace 'Thursday' with 'Friday Junior'
let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",'saturday'];
days[4] = " Friday Junior"
console.log(days);
/ANSWER ?=  Array ["sunday", "Monday", "Tuesday", "Wednesday", " Friday Junior", "Friday", "saturday"]


//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let favorite = ["sunday", "Monday", "Tuesday", "Wednesday", " Friday Junior", "Friday", "saturday"]
console.log(favorite(2))

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const array3 = phone.concat(laptop);

console.log(array3);

>//
let phone = ['iphone', 'android'];
let laptop = ['MacBook', 'HP', 'Dell'];
console.log(phone,laptop);
//

//13.   Write a line of code to test if something is an array or not
const data = [1,2,3,4,5];
const isArray = Object.prototype.toString.call(data) === '[object Array]';
console.log(isArray); // it returns true
