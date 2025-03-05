function addtwonums(num1,num2) {
    return num1+num2
}

const result = addtwonums(3,5)

console.log(result);

function loggedin(user = "Sam") {
    if (user === undefined) {
        console.log("enter the name")
        return
    }
    return `${user} just logged in`
}

const name=loggedin()

console.log(name)