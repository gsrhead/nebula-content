// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1): a single operation that completes in a constant amount of time.

     O(log n): The number of operation increases at a logarithmic rate as the input size increases.

     O(n): The number of operations increases linearly with the input size.

     O(n^2): <li> The number of operations increases at a rate of N^2 as the input increases.</li>

     O(n^3): <li>The number of operation increases at a rate of n^3 as the input sizes increases.</li>

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
//********************************************************************************************************************************** */
//* O(n); one operation !
answer :// the function is multiplied  for the element so the size input array is not doubled there for a one notation array//

function loopAndPrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
//* o(N)!! ope operation !
answer :// the function  array  compares to the current maximum value,  total number of operations and size of the input consists of double arrays

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer: O(1) no  new access the input array and prints to console one time of a number you ask it to do.

function printLast(arr) {
  console.log(arr[arr.length - 1]);
}

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answers: O(N) seeps through t find one order to create that new String. same size and is created in new characterz .
function everyOther(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }

  return newStr;
}

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer: o(1) the function returns twice the value and does not create any new data structure or store the information just results mutiply
function doubled(num) {
  return 2 * num;
}

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer: O(1) it will not create a new data or store info. the function calculates returns mutiplication becuase it wont create any./
function multipleSteps(num) {
  let final = 4 * num;
  return final * 3;
}

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer: returns a new array in reversed orders, the O(N) is becuase its goes through the array on times to make a reversed.
function backwardsArr(arr) {
  let arrReversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
  }
  return arrReversed;
}

// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.  .

answer:// this function takes two arrays and returns the sum of the index
//since this is a 2 function i guess i0ts a O(N^2)
//arr1_arr2

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;
  let total = 0;
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j;
    }
  }
  return total;
}
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer://* O(1)
the help of the push element updates the length property to constant with no size or input array/
let nums = [10, 20, 30, 40];
nums.push(50);



// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer://* 0(N)
// very short and there really isnt much here for the function its shifts  away.
let nums2 = [10, 20, 30, 40];
nums.unshift(0);



// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
answer://* 0(log n);
//the loop doubles by the index I on each iteration,function grow.s


function logTime(arr) {
  let numberOfLoops = 0;
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++;
  }
  return numberOfLoops;
}
