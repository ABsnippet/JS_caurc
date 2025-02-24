//primitive

//  String ,Number,Booolean,undefined,null,symbol,bigInt

const id = Symbol('123');
const aid = Symbol('123');

console.log(id);
console.log(aid);

console.log(id===aid);
// JavaScript is dynamically typed, which means that the type of a variable is determined at runtime based on the value of the variable

//reference(non -primitive)

//arrays,objects,functions

const heros = ["Amit","Rohit"];

let myobj = {
  Name:"AMol",
  age : 18
}

const myfunction=function(){
    console.log("Hello");
}

console.log(typeof heros );
console.log(typeof myfunction );
console.log(typeof id );


//stack memory(primitive datatype) = takes the copies

//heap memory (non-primitive datatype) = takes the reference (original)

let useronec= {
  Name:"Amit",
  age : 18
}

let user2 = useronec

user2.Name = "amul";

console.log(useronec)


