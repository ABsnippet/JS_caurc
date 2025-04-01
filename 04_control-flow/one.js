// if (2!==3) {
//     console.log("not Executed");
//     var power = "fly";

// }
// console.log(`user can ${power}`);

userloggedin = true;
debitcard = true;

loggedinfromfb = false;
if(userloggedin && debitcard){
    console.log(`you are welcome`);
}

if (loggedinfromfb || userloggedin) {
   console.log("you can shop");
    
}