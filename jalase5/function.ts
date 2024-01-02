function func1(): void{
  // algorithm
}
// function input -- output

function sum( i, j){
  return i + j
}

sum(1,10)
console.log(sum(1,10))

y = sum(2,20)

function add(a, b , c?){
  return a + b + (c || 0 )
}

add(2,4)
add(3,4,6)

function mul(a , b = 10){
  return a * b
}

mul(4)
mul(3,7)

function showName(a , ...another){
  console.log(a)
  console.log(another)
}

showName("reza")
showName("reza", "hasan", "ali","m")