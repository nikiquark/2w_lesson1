// Number
let a = 0 // 1.1

// String
let b = "hello"

// Boolean
let c = true // false

// Array
let d = [1,2,3,4]

if (123 === '123'){
    console.log("True")
}
else{
    console.log("False")
}

for (let i = 0; i < 5; i = i + 1){
    console.log("Hello");
}

function say_hello(name){
    console.log("hello, " + name)
}

say_hello("Nikita") // -> hello, Nikita
say_hello("Dio-gen") // -> hello, Nikita

function multBy2(x){
    return 2*x
}
console.log(multBy2(4))

// Node.js