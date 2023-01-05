// Map
//  Modifying the array it's called on
// forEach
//  Not modifying the array it's called on
//  Iters through the array and does something to each element\
const myArray = [1, 2, 3, 4, 5]
// Pseudo For Each - Written as For Loop
for (let i = 0; i < myArray.length; i++) {
  let element = myArray[i]
  element += 1
  console.log(element)
}
// For Each
myArray.forEach((element) => {
  element += 1
  console.log(element)
})
// .forEach
// 1.   Given an array of numbers, log them to the console for each number.
const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrOfNums.forEach(
  // Two parameters: element, index
  (element, index) => {
    console.log(element)
  } // Callback function
) // Method
// 2.   Given an array of people, log a greeting to the console for each person.
const arrOfPeople = ['james', 'jim', 'jimmy', 'jimbo', 'jimothy']
arrOfPeople.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    console.log(`Hello, ${element}!`)
  }
)
// 3.   Given an array of mixed values, log whether the value is undefined.
const arrOfMixedValues = [1, 2, 3, undefined, 4, 5, 6, undefined, 7, 8, 9, 10]
arrOfMixedValues.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    if (element === undefined) {
      console.log(`The element at index ${index} is undefined.`)
    }
  }
)
// 4.   Given an array of strings, log the vowel count for each string.
const arrOfStrings = ['hello', 'world', 'this', 'is', 'a', 'test']
let vowelCount = 0
arrOfStrings.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    // Element is a string: 'hello'
    // Loop through each character in the string
    element.split('').forEach(
      // 'h', 'e', 'l', 'l', 'o'
      // callback function - Two parameters: element, index
      (char) => {
        // char is a string: 'h'
        // Check if the character is a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          vowelCount += 1
        }
      }
    )
  }
)
// 5.   Given an array of numbers, double them and log them to the console.
// const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrOfNums.forEach(
  // Callback function - Two parameters: element, index
  (element) => {
    console.log(element * 2)
  }
)//
// .filter()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1.   Write a function to filter an array for all the numbers greater than 5
nums.filter(
  // Callback Function - Two parameters: element, index
  (num) => {
    // Return true if the number is greater than 5
    // Return false if the number is less than or equal to 5
    return num > 5
  }
)
// 2.   Write a function to filter an array for all the even numbers
// const nums = [1,2,3,4,5,6,7,8,9,10]
nums.filter(
  // Callback Function - Two parameters: element, index
  (num) => {
    // Return true if the number is even
    // Return false if the number is odd
    return num % 2 === 0
  }
)
// 3.   Write a function to filter an array for all the non number items
const mixedArray = [1, 'hello', 2, 'world', 3, 'this', 4, 'is', 5, 'a', 6, 'test']
// Hello World this is a test
const nonNumber = mixedArray.filter(
  // callback function - Two parameters: element, index
  (element) => {
    // Return true if the element is not a number
    // Return false if the element is a number
    // Current Value: 1
    // element = 1 // typeof element = 'number'
    // Current Value: 'hello'
    // element = 'hello' // typeof element = 'string'
    if (typeof element !== 'number') {
      return true
    }
    return false
  }
)
console.log(nonNumber)
// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]
const ofAge = partyPeople.filter(
  // callback function - Two parameters: element, index
  (person) => {
    // return true if the person is over the age of 21
    // return false if the person is under the age of 21
    if (person.age >= 21) {
      return true
    }
    return false
  }
)
console.log(ofAge)
// 5.   Write a function to filter out all letters from a string
//      Hint: filter doesn't work on strings..
let sortaString = 'hel4lo w32orl1d t14his 5i3s2 a1 te23st' // Hello World this is a test
sortaString = sortaString.split('')
const hiddenMessage = sortaString.filter(
  // callback function - Two parameters: element, index
  (char) => {
    // return true if it's a letter
    // return false if it's a number
    if (parseInt(char) || char === '0') {
      return false
    }
    return true
  }
).join('')
console.log(hiddenMessage)
//----------------------------------------------------------------------------------------------------------

.reduce()
// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums = [1,2,3,4,5]
let output = nums.reduce(
  // Callback Function - accumulator, currentValue
  (accumulator, currentValue) => {
    // accumulator = 0
    // currentValue = 1
    // SIDE EFFECT -> DOES NOT WORK accumulator = accumulator + currentValue
    return accumulator + currentValue
  }, 0
  )
  console.log(output)
  // 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
  // const nums = [1,2,3,4,5] // 120
let output2 = nums.reduce(
  (accumulator, current) => {
    return accumulator * current
  }
)
console.log(output2)
// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const nums1 = [2,8,12,98,167,3]
// Hold the highest number in the accumulator
// Compare the current value to the accumulator
// If the current value is greater than the accumulator, replace the accumulator with the current value
const output3 = nums1.reduce(
  // callback function - accumulator, currentValue
  (accumulator, currentValue) => {
    // accumulator = 0
    // currentValue = 2
    return (accumulator < currentValue) ? accumulator : currentValue
  }, 0
)
console.log(output3)
// 4.   Write a HOF to find the oldest person in a group
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
// let Accumulator = {}
// Iterate through the people array
// Compare the current person's person.age to the accumulator's accumulator.age
// If the current person's age is greater than the accumulator's age, replace the accumulator with the current person object
let oldestPerson = partyPeople.reduce(
  // callback function - accumulator, currentValue
  (accumulator, currentValue) => {
    // accumulator = {name: 'John', age: 25}
    // currentValue = {name: 'Jordan', age: 18}}
    // Compare the current person's person.age to the accumulator's accumulator.age
    return (currentValue.age > accumulator.age) ? currentValue : accumulator
  }, {age: 0}
)
console.log(oldestPerson)
// =================================================================================================
//.find()
// 1.   Write a HOF to find the first number greater than 10 in an array
const nums = [1,2,3,15, 4, 80, 34]
console.log(
  nums.find(
    // callback function - element
    (element) => {
      // return true or false
      return element > 10
    }
  )
)
// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
let firstString = arr.find(
  // callback function - element
  (element) => {
    // return true or false
    return typeof element === "string"
  }
)
// typeof element === "string"
// 3.   Write a HOF to find the first instance of null in an array 
// const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
let firstNull = arr.find(
  // callback function - element
  (element) => {
    // return true or false
    return element === null
  }
)
console.log(firstNull);
//.find()
// 1.   Write a HOF to find the first number greater than 10 in an array
const nums = [1,2,3,15, 4, 80, 34]
console.log(
  nums.find(
    // callback function - element
    (element) => {
      // return true or false
      return element > 10
    }
  )
)
// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
let firstString = arr.find(
  // callback function - element
  (element) => {
    // return true or false
    return typeof element === "string"
  }
)
// typeof element === "string"
// 3.   Write a HOF to find the first instance of null in an array 
// const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
let firstNull = arr.find(
  // callback function - element
  (element) => {
    // return true or false
    return element === null
  }
)
console.log(firstNull);