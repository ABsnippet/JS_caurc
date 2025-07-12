class User {
    constructor(username,email,password) {
        this.username = username;
        this.email = email ;
        this.password = password
    }

encryptpassword(){
   return `${this.password}abc`   
}

changeusernamee(){
    return `${this.username.toUpperCase()}`
}


}

const chai = new User("Chai","sanjnn@123","123")
console.log(chai.encryptpassword());
console.log(chai.changeusernamee());

