function multi(num) {
    return num*5
}

multi.power = 2;

console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",10)
const tea = createUser("tea",50)

chai.printMe()