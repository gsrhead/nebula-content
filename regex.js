// 1.   Write a function that tests if a string contains the string of '123' within it
/(123)/gm; 1,2,3

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
function containsAC(string){
    const regex = /A.*C/gm;
    return regex.test(string)
}
console.log(containsAC('helloWorldCrwe2rwe')) //true


// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
function test(string, testString){
    const regex = new RegExp(testString, 'gm')
    return string.match(regex).length
}
console.log(test("this is a test", "t"));

// 4.   Write a function that checks if all characters in a string are lowercase letters
  function allLower(string) {
    const regex = /[^a-z]/;
    return !regex.test(string);
  }
// 5.   Write a function that checks if a string has an uppercase letter
  function allUpper(stringER) {
    const regex =/[A-Z]+/g;
    return regex.test(stringER);
  }

// 6.   Write a function that checks if a string contains a dash or underscore 
  function Underscore(string) {
    const regex =/[-_]/;
    return regex.test(string);
  }


// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end

  function endWithCom(stringER) {
    const regex =/\.com$/;
    return regex.test(stringER);
  }
  console.log(endWithCom('www.endWithCom.com'));
// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
function startsHttpsorhttp(string) {
    const word = /^https*/
return word.test(string);
}

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function firstLetterIsUppercase(string) {
const regex =/^[A-Z]/;
return string.match(regex);
}

// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
import regex

def trim(string):
    return regex.sub(r^/s+(.+)/s/s+$, '', string)

 