function addtwonums(num1,num2) {
    return num1+num2
}

const result = addtwonums(3,5)

// console.log(result);

function loggedin(user = "Sam") {
    if (user === undefined) {
        console.log("enter the name")
        return
    }
    return `${user} just logged in`
}

const name=loggedin()

// console.log(name)

function calculatePrice(n1,n2,...numb1){
    return numb1
}

// console.log(calculatePrice(20,40,60,80,100))

const user = {
username : "Amit",
price : 699

}


function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}

// handleObject(user)
handleObject({
    username : "amit",
    price:500
})

const newarray = [1,2,3,45,66]

function arraypass(arr){
    return arr[2]
}

console.log(arraypass(newarray));
