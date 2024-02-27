//use const where variable values do not change
var a = 5;
var b = 33;
var c = "best";
var z = 5 < 10;
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    var z_1 = 4;
    //use z
}
else {
    var z_2 = "string";
    //use z
}
console.log("let: " + z); // Error: z is not defined in this scope
