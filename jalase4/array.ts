// array
let name1 = "reza"

let names: string[] = []

names.push("reza")
names.push("taha")
names.push("hasan")

let cars: string[] = ["reza", "hasan", "ali"] // index

console.log(cars[2])

// array readonly

let arr1 : readonly string[] = ["reza", "hasan"]

// arr1.push("hasan")

// tuple
let t1 : [string, number, boolean]

t1 = ["reza", 1, true]

console.log(t1[1+1])

t1.push(1)

t1.push("reza")