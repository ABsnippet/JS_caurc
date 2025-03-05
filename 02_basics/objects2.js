// const tinderuser = new Object();
const tinderuser = {}
tinderuser.id = "abc123"
tinderuser.name = "Amit"
tinderuser.ph = 505
// console.log(tinderuser);

const user = {

    email : "amit@gmail.com",
    fullname : {
        firstname : "amit",
        lastname : "Bande"
    }

}

// console.log(user);

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2};

// console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    },
]

// users[1].firstname
// console.log(Object.values(tinderuser))
// console.log(Object.keys(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('name'));

const course = {
coursename : "js hindi",
courseinstructor : "Hitesh",
courseamt : "999"

}

// console.log(course.courseamt);

const {courseinstructor:instructor} = course;
console.log( instructor);



