        // IOANNIS STATHOPOULOS
// ------------------------------------------------------------------------------------------------------------
/* 
Write a class that creates animals
**The animals should make a noise **
**The class should log what the animal eats
**The class should log where the animal lives
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/

let cat = {};
cat.speak =function(line){
    console.log(`The cat says '${line}'`);
};
cat.speak("MEOW.");

function speak(line){
    console.log((`the ${this.type} ${line}'`));
}
let cat1 = {type: "cats", speak};
cat1.speak("eats 9lives, plus lives in houses as pets and MEOWS");
// speak.call(cat1, "MEOW MIX!")
// ----------------------------------------------------------------------------

  class  cat{
    constructor(eats,lives,noise){
    this.eats = eats;
    this.lives = lives;
    this.noise = noise;
    console.log("cat live in peoples houses,cats meow and eat cat food")}
    }
   let cat1 = new cat();
         
const cat = {
    greeting(lives,noise,eats) {
        return `The cat lives in ${lives} it eats ${noise} the cats ${eats}`;
    }
}
console.log(cat.greeting('homes','cat food',' meows'));
_------>  .also i want to make sure i have the correct format ,so i made a second class
let cat = {};
cat.speak =function(line){
    console.log(`The cat says '${line}'`);
};
cat.speak("MEOW.");
  
// ________------------------------------------------------------------------------------------------>>>>
// 
let lion = {};
lion.speak =function(line){
    console.log(`The lion says '${line}'`);
};
lion.speak("ROAR.");

function speak(line){
    console.log((`the ${this.type} ${line}'`));
}
let lion = {type: "lion", speak};
lion.speak("eats preys,plus lives in wilderness and roars!");
speak.call(lion1, "ROAR!").
____------------------------------------------
let lion = {};
lion.speak =function(line){
    console.log(`The lion says '${line}'`);
};
lion.speak("ROAR.");
// _+_+-------------------------------------------------------------
     1.      const lion = {
    greeting(lives,noise,eats) {
        return `The lion lives in ${lives} it eats ${noise} the lions ${eats}`;
    }
}
console.log(lion.greeting('wilderness','prey on animals',' roars'));

     .2           class  lion{
    constructor(eats,lives,noise){
    this.eats = eats;
    this.lives = lives;
    this.noise = noise;
    console.log("lions live in wilderness, they prey on other species to eat and they make roar sounds")}
    }
   let lion1 = new lion();
// --------------------------------------------------------------------------------------------

let dog = {};
dog.speak =function(line){
    console.log(`The dog says '${line}'`);
};
dog.speak("WOOF.");

 .1       class  dog{
    constructor(eats,lives,noise){
    this.eats = eats;
    this.lives = lives;
    this.noise = noise;
    console.log("Dogs live in peoples houses, they bark and are carnivorous")}
    }
   let dog1 = new dog();

    .2

const dog = {
    greeting(lives,noise,eats) {
        return `The dog lives in ${lives} it barks ${noise} the dog ${eats}`;
    }
}
console.log(dog.greeting('humans homes',' loud',' can eat anything'));
let dog = {};
dog.speak =function(line){
    console.log(`The dog says '${line}'`);
};
dog.speak("WOOF.");

function speak(line){
    console.log((`the ${this.type} ${line}'`));
}
let dog1 = {type: "dogs", speak};
dog1.speak("eats poultry, plus lives in houses as pets and barks!");
speak.call(dog1, "BARK WOOF!")
// =========================================================
let cat = {};
cat.speak =function(line){
    console.log(`The cat says '${line}'`);
};
cat.speak("MEOW.");

function speak(line){
    console.log((`the ${this.type} ${line}'`));
}
let cat1 = {type: "cats", speak};
cat1.speak("eats 9lives, plus lives in houses as pets and MEOWS");
speak.call(cat1, "MEOW MIX!")
// +=====---------------------------------------------------------------------------------------
/* ++++++++++++++++++++++==========================================================================
    
        Write a class that creates shoes
The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence to the console: ex:
`My flipflops are yellow, size 9, and 6 years old.` 
*/

class  shoe{
    constructor(size,color,type,age){
    this.size = size;
    this.color = color;
    this.age = age;
    this.type = type;
    console.log("MY size is 9 jordans are black and 4 years old runners!")}
    }
   let shoe1 = new shoe();
{
}


// Write a class that creates shoes
// The shoe should have a size, color, type, and age. 
// Initialize 3 shoes with your class & log a sentence to the console: ex:
// `My flipflops are yellow, size 9, and 6 years old.` 


const shoes2  = (user) => `My shoes are black, size 9, and 4 years old, they are  asics !`
const user1 = { size: 9 }
const user2 = { color: 'black'}
const user3 = { age: '3 years old'}
const user4 = {type: 'asics'}

console.log(shoes2());
const shoes1  = (user) => `My shoes are brown, size 9 half, and 4 years old, they are  Merrel !`
const user5 = { size:'9 half' }
const user6 = { color: 'brown'}
const user7= { age: '1 years old'}
const user8 = {type: 'Merrel'}

console.log(shoes1());

const shoes  = (user) => `My shoes are black, size 9 half, and 3 years old, they are  nike !`
const user9 = { size: '9 half' }
const user10 = { color: 'black'}
const user11= { age: '3 years old'}
const user12= {type: 'nike'}

console.log(shoes());
// =======================================================================================

let shoes = {
    name: "jordans",
  };
  shoes.greet = function () {
    console.log("My shoes are size 9 black jordans they are 2 years old!");
  };
  shoes.greet(); 


  let shoes1 = {
    name: "asics",
  };
  shoes1.welcome = function () {
    console.log("My shoes are size 9 blue asics they are 1 years old!");
  };
  shoes1.welcome(); 


  let shoes2 = {
    name: "nike",
  };
  shoes2.welcome = function () {
    console.log("My shoes are size 9 blue/white nike they are 4 years old!");
  };
  shoes2.welcome(); 
// // =====================================================================================================================
// /* 
// Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape. 
// Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape
// Log to the console a sentence about your shape:
// `Given a cylinder of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.` 
// */




// // // Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))
// // // Have methods to find the areas of the different shapes

class shape {
    constructor(height, width){
    this.height = height;
    this.width = width;
// }
getHeight(){
    return this.height
}
getWidth(){
    return this.width
}
}
class Circle extends shape {
    constructor(height,width){
        super(height,width)
        this.radius =radius
    }
// } 
class Rectangle {
    constructor(width,height,element = (x,y) => ){
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 2; < height; y++){
        for (let  x = 2; < width; x++){
this.content[y * width + x] = element(x ,y);
         }
        }
    }
}// 

const addition = (num1, num2) => num1 + num2
const subtraction = (num1, num2) => num1 - num2

const myCalculator = (num1,num2, callback) => {
    return callback(num1,num2)
}
console.log(calculate(2, 4, addition))
console.log(calculate(2, 4, subtraction))
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1,num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(2,4, myDisplayer)
