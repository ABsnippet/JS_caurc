const useremail = 'amit@gmail.com'

if (useremail) {
    // console.log("you are welcome");
    
} else {
    // console.log("Welcome");
}

//falsy values 
// 0 false  bigInt(0n) -0 "" null  nt defined Nan

//truthy values
// '0',"false",[],{},function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length ===0){

    // console.log("Obj is empty");
    
}

let val1 ;
val1 = 5??10  //nullish coalesing operator

console.log(val1);

let v2 = null??10
console.log(v2);

//terniary operator 

const iceteaprice =120;
    iceteaprice<=100 ? console.log("plice less than 100") : console.log("greater then 100")


