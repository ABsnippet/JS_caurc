function SetUsername(username){
    this.username = username
    console.log("called")
}

function createuser(username,email,password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const a = new createuser("Amit","amit@133","amdnjej")
console.log(a);

