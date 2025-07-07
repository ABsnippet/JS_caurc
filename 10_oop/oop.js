// let user = {
//     username : "Amit",
//     password : "123456",
//     signedin: true,

//     getuserdetails : function(){
//             console.log(this);
//     }
// }

// console.log(user
    // .getuserdetails());

    // console.log(this);


function user(username,logincount,isloggedin,)   
 {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = function(){
        console.log(`Welcomme  ${username}`);
        
    }
    return this
 }



 const userone = new user("AmitBande",4,true);
 const usertwo = new user("Rahul",18,false);
//  console.log(usertwo);
 console.log(userone.constructor);
 
