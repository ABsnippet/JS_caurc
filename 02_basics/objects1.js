//singleton
// Object.create

//Object literals

const mySym = Symbol("my key1");

const Juser = {
    name : "Amit",
    "Fullname" : "Amit Bande",
    age : 20,
    [mySym]: "key2",

}

// console.log(Juser.name);
// console.log(Juser.age);
// console.log( typeof Juser[mySym]);

Juser.age = 19;
// Object.freeze(Juser);
Juser.age = 20;
// console.log(Juser);

Juser.greeting = function () {
    console.log("hello Js user");
    
}
console.log(Juser.greeting());
Juser.newgreeting = function () {
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(Juser.newgreeting());