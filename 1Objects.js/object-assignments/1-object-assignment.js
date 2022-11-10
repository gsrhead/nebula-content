// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const car = {
    color: 'championship white',
        engine: "4 cylinder",
            mpg: 46,
            push: "start",
        turbo:true,
    speed: ["144 mph"]
};
// 2.   Using dot-notation Log to the console 3 properties from the previous object
       
         console.log(car.color);
                    console.log(car.engine);
                    console.log(car.speed);

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
  
        console.log(car["push"]);
            console.log(car["turbo"]);
                console.log(car["mpg"]);
                   


// 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(car.turbo);
///undefined///

// 5.   Add a new key-value pair to the vehicle.
                car["slow"] = 'fast'

// 6.   Using bracket-notation update a property on the vehicle.

                        car["turbo"] = "spool";

// 7.   Using dot-notation update a property on the vehicle.
   
                car.mpg = 39;

// 8.   Create a method for turning your vehicle on
     car.open = function() {
        console.log("starting car");

        }
     car.open()


// 9.   Create a method for turning your vehicle off
   car.off = function() {
      console.log("turning off");
       
    }
 car.off()
// 10.  
//      a. Check if your vehicle is on (it should be off)
     console.log(car)
//      b. Start your vehicle
car.open()
//      c. Check if your vehicle is on (it should be on)
console.log(car)
//      d. Stop your vehicle
car.off()
//      e. Check if your vehicle is on (it should be on)
console.log(car)