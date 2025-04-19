// const  programming = ['cpp','js','python','ruby']

// const values=programming.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);


// const nums = [1,2,3,4,5,6,7,89,10]

// // const n = nums.filter((num)=>num>4)

// const n = nums.filter((num)=>{
//     return num>4;
// })
// console.log(n);

const books  = [{
    title: 'book one',genre:'history',year:2003
},
 {
    title: 'book tw0',genre:'hist',year:2005
},
 {
    title: 'book thrne',genre:'history',year:2003
},
]

const a = books.filter( (bk)=>{
return bk.genre==="history"
})

console.log(a);