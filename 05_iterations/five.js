const programming = ['cpp','js','python']

// programming.forEach(function (val){
//     console.log(val);
// })

// programming.forEach( (item) => {
//     console.log(item)
// })

// function printme(item) {
//     console.log(item);
    
// }

// programming.forEach(printme) //passin fn as a parameter


// programming.forEach((item , index, arr)=> {
//     console.log(item,index,arr);
// })


const coding = [
{
Filename : "javascript",
sname : 'js'
},
{
Filename : "java",
sname : 'javas'
},
{
Filename : "ruby",
sname : 'rb'
},
]

coding.forEach((item)=>{
    console.log(item.Filename);
    console.log(item.sname);

})
