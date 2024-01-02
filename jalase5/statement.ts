// if
let x = true

if(x == true){
  console.log("x is true")
}

if(x == true){
  console.log("x is true")
}else{
  console.log("x is false")
}

let y = 1

if(y == 0){
  console.log("y is 0")
}else if(y == 1){
  console.log("y is 1");
}
else{
  console.log("y is another number")
}

let role = "admin"

if(role == "admin"){
  console.log("show table")
}
else if (role == "user"){
  console.log("dont show table return to home");
}

// for 

// block
{
  var number = 8

}
// متغییر قبلی که در داخل بلاک هست
number = 9

{
  let number1 = 1
}
// متغییر جدید است که بیرون بلاک است
let number1 = 1

//escma 2015 have let

//for
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

//for
for(let i=0; i < 10 ; i = i + 3){
  console.log("hello")
  console.log("he");
  
}

// تعریف صریح
let numbers:number[] = [1,3,4,5]
// تعریف ضمنی
let names = ["reza", "hasan"]
// array method
names.length
for(let j=0 ; j < names.length; j++){
  console.log(names[j])
  if(true){
    //if statement
    console.log("if statement in for")
  }
  {
    // block
    console.log("block")
  }
  for(;false;){
    //for
    console.log("for unlimited")
  }
}

// while

let j = 0
while(j < names.length){
  console.log(names[j])
  j++
}

// declare function
// استفاده مجدد کد 
function function1(): void{
  console.log("im do homework1");
  console.log("im do homework2");
  console.log("im do homework3");
  console.log("im do homework4");
  console.log("im do homework5");
  console.log("im do homework6");
  console.log("im do homework7");
}


// night 1
console.log("im do homework1");
console.log("im do homework2");
console.log("im do homework3");
console.log("im do homework4");
console.log("im do homework5");
console.log("im do homework6");
console.log("im do homework7");
// night2
console.log("im do homework1");
console.log("im do homework2");
console.log("im do homework3");
console.log("im do homework4");
console.log("im do homework5");
console.log("im do homework6");
console.log("im do homework7");
// night3
console.log("im do homework1");
console.log("im do homework2");
console.log("im do homework3");
console.log("im do homework4");
console.log("im do homework5");
console.log("im do homework6");
console.log("im do homework7");

//function call night4
function1()