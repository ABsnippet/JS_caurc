class User {
    constructor(username) {
        this.username = username;
    }
logme (){
    console.log(`USERNAME IS : ${this.username}`)
}


}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

        addcourse(){
            console.log(`A new course wass added ${this.username}`);
            
        }
}

const chai = new Teacher("Chai","AMit@1234","password");
chai.logme();
chai.addcourse();