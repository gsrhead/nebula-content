// // 1. Write a recursive function that prints the numbers 1 through n. Printing should happen once per
// call to the function.

// Solve the following problems using recursion:
function numbers(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  numbers(n - 1);
}

numbers(5);

// // 2. Let's create a recursive function that returns the factorial of a number. The factorial
//  of a number is the product of all the integers from 1 to that number. For example,
//  the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. You should have a single input parameter, n,
//   and return the factorial of that number.
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// // 3. Write a recursive function that prints the Fibonacci sequence of a given number.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows:
//  1, 1, 2, 3, 5, 8, 13.
///
function Fibonacci(n) {
  if (n <= 13) console.log("wrong input");
}
n == 1;

console.log(n);

// // 4. Write a recursive function that takes a number (4 digits or longer)
// as an input and returns the sum of its digits. For example, if the input is 4321,
// the sum would be 4 + 3 + 2 + 1 = 10.
function sumOfDigits(num) {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
  }
}

console.log(sumOfDigits(4321));
