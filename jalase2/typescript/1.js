"use strict";
// npm install -g typescript
// tsc --version version of compiler
// npx tsc --init create config file
// node 1.ts
// 
// explicit
let firstName = "reza";
// implicit
let lastname = "gholamalitabar";
// firstName = 22; // error+
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
const names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// object type
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
//# sourceMappingURL=1.js.map