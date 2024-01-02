// if
var x = true;
if (x == true) {
    console.log("x is true");
}
if (x == true) {
    console.log("x is true");
}
else {
    console.log("x is false");
}
var y = 1;
if (y == 0) {
    console.log("y is 0");
}
else if (y == 1) {
    console.log("y is 1");
}
else {
    console.log("y is another number");
}
var role = "admin";
if (role == "admin") {
    console.log("show table");
}
else if (role == "user") {
    console.log("dont show table return to home");
}
// for 
// block
{
    var number = 8;
}
// متغییر قبلی که در داخل بلاک هست
number = 9;
{
    var number1_1 = 1;
}
// متغییر جدید است که بیرون بلاک است
var number1 = 1;
//escma 2015 have let
//for
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
//for
for (var i = 0; i < 10; i = i + 3) {
    console.log("hello");
    console.log("he");
}
// تعریف صریح
var numbers = [1, 3, 4, 5];
// تعریف ضمنی
var names = ["reza", "hasan"];
for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}
