function one() {
    const username = "Amit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const user = "Amul"
    if(user === "Amul"){
        const sub = "web"
        console.log(user);
        
    }
    // console.log(sub);
    
}
// console.log(user);


//++++++++++++++++++++++++++++++++++++++++imp++++++++++++++++++++++++//
console.log(one(3))
function one(num){
    return num+1
}

two(3)
const two = function(num){
    return num+2
}
