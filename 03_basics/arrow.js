const username = {
    user : "amit",
    price : 999,

    welcome_msg : function(){
        console.log(`${this.user} , you r WElcome`);
        console.log(this)
    }
}

// username.welcome_msg()
// username.user = "Amul"
// username.welcome_msg(

// function chai(){
//     let userx = "Amit"
//     console.log(this.userx);
    
// }
// chai()


// const chai =  () => {  ///Arrow functn
//     let userx = "Amit"
//     console.log(this);
    
// }
// chai()


// const addtwo = (num1,num2) => {
// return num1+num2     //Explicit return
// }

// console.log(addtwo(3,4));

// const addtwo = (n1,n2) => (n1+n2)  //Implicit return

// console.log(addtwo(3,4));

const addtwo = (n1,n2) => ({usernam : "Amuul"})

console.log(addtwo(3,4));
