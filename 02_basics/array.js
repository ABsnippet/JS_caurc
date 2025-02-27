//arrays 

const myarr = [0,1,2,3,4];
const name = ["amit","rohit"];

const arr2 = new Array(1,2,3,4,5);

// console.log(myarr);
// console.log(name[1]);

// myarr.push(5)
// console.log(myarr);

// myarr.pop();
// console.log(myarr);

// myarr.unshift(85)
// console.log(myarr);

// myarr.shift()
// console.log(myarr);

// const newarr = myarr.join()

// console.log(myarr);
// console.log(typeof newarr);
console.log(myarr);

const myn1 = myarr.slice(1,3);//slice makes yhe copy and prints elements nt inncludu=ing range
console.log(myn1);

const myn2 = myarr.splice(1,3); //splice manipulates the original array and includes the range
console.log(myarr);
console.log(myn2);




