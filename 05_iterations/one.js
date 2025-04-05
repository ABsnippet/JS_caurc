// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// }
// console.log(element);

// for (let index = 0; index < 10; index++) {
//     // console.log(`outer loop:${index}`)
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop ${j} and outer loop ${index}`)
//         console.log(`${index} * ${j} = ${index*j}`);
        
//     }
// }


// let myarr = ["amit","rohit","rahul","akshay"]

// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);
// }

// for (let i = 0; i <=20; i++) {
//     if(i==5){
//         console.log("detected");
//         break
//     }
//     console.log(`value of i is: ${i}`)
  
// }
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log("detected");
        continue
    }
    console.log(`value of i is: ${i}`)
  
}